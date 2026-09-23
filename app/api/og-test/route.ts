import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

/**
 * Fetch a page as each social crawler sees it, then fetch the card it points
 * at the same way.
 *
 * This has to run on the server. A browser cannot set User-Agent on fetch, and
 * cross-origin reads of someone else's site are blocked, so a client-side
 * version of this test can only ever pretend.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ------------------------------------------------------------------ */
/*  In-memory rate limiter (per-function-instance)                     */
/*  Good enough to stop casual abuse. Won't share state across Vercel  */
/*  edge instances, but that's fine for a free-tier scanner.           */
/* ------------------------------------------------------------------ */

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

const hits = new Map<string, { count: number; resetAt: number }>();

/** Evict stale entries every 5 minutes so the map doesn't grow forever. */
setInterval(() => {
  const now = Date.now();
  for (const [key, v] of hits) {
    if (now > v.resetAt) {
      hits.delete(key);
    }
  }
}, 5 * 60_000);

const rateLimit = (ip: string) => {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  entry.count += 1;
  const remaining = Math.max(0, RATE_LIMIT_MAX - entry.count);

  if (entry.count > RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { ok: false, remaining: 0, retryAfter };
  }

  return { ok: true, remaining };
};

/* Instagram unfurls through Meta's shared crawler, so it sends the same
   facebookexternalhit agent from a separate fetch. */
const CRAWLERS = [
  { id: "facebook", label: "Facebook", ua: "facebookexternalhit/1.1" },
  { id: "x", label: "X", ua: "Twitterbot/1.0" },
  { id: "linkedin", label: "LinkedIn", ua: "LinkedInBot/1.0" },
  { id: "slack", label: "Slack", ua: "Slackbot-LinkExpanding 1.0" },
  { id: "snapchat", label: "Snapchat", ua: "SnapchatBot/1.0" },
  { id: "discord", label: "Discord", ua: "Discordbot/2.0" },
  {
    id: "teams",
    label: "Microsoft Teams",
    ua: "Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5 skype-url-preview@microsoft.com",
  },
  { id: "whatsapp", label: "WhatsApp", ua: "WhatsApp/2.23" },
  // Signal intentionally masquerades as WhatsApp when fetching previews.
  { id: "signal", label: "Signal", ua: "WhatsApp/2" },
  { id: "instagram", label: "Instagram", ua: "facebookexternalhit/1.1" },
  { id: "telegram", label: "Telegram", ua: "TelegramBot (like TwitterBot)" },
  { id: "pinterest", label: "Pinterest", ua: "Pinterest/0.2" },
  { id: "reddit", label: "Reddit", ua: "redditbot/1.0" },
  { id: "bluesky", label: "Bluesky", ua: "Bluesky Cardyb/1.0" },
  {
    id: "mastodon",
    label: "Mastodon",
    ua: "Mastodon/4.8.0-alpha.3 (http.rb/5.3.1; +https://mastodon.social/) Bot",
  },
  {
    id: "threads",
    label: "Threads",
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Threads/1.0",
  },
  {
    id: "notion",
    label: "Notion",
    ua: "Notionbot/1.0 (+https://www.notion.so)",
  },
  /* Nextdoor publishes no preview-crawler UA, so fetch with a standard
     browser UA that will not be blocked outright. */
  {
    id: "nextdoor",
    label: "Nextdoor",
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  },
  {
    id: "tumblr",
    label: "Tumblr",
    ua: "Tumblr/14.0",
  },
  {
    id: "imessage",
    label: "iMessage",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
  },
  {
    id: "tiktok",
    label: "TikTok",
    ua: "Mozilla/5.0 (compatible; TikTokSpider; ttspider-feedback@tiktok.com)",
  },
  {
    id: "line",
    label: "LINE",
    ua: "Mozilla/5.0 (compatible; Linespider/1.1; +https://lin.ee/4dwXkTH)",
  },
  {
    id: "wechat",
    label: "WeChat",
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN",
  },
  {
    id: "google",
    label: "Google",
    ua: "Googlebot/2.1 (+http://www.google.com/bot.html)",
  },
  {
    id: "google-chat",
    label: "Google Chat",
    ua: "Google-Chat/1.0",
  },
] as const;

const TIMEOUT_MS = 10_000;
const MAX_IMAGE_BYTES = 12 * 1024 * 1024;

/** Reserved v4 ranges, as [first octet, second octet range]. */
const RESERVED_V4: [number, [number, number]][] = [
  [0, [0, 255]],
  [10, [0, 255]],
  [127, [0, 255]],
  // CGNAT
  [100, [64, 127]],
  // link local, including the cloud metadata address
  [169, [254, 254]],
  [172, [16, 31]],
  [192, [168, 168]],
  // benchmarking
  [198, [18, 19]],
];

const V6_PREFIXES = ["fc", "fd", "fe80", "::ffff:"];

/** Reserved ranges. A URL box on a public site is an SSRF hole without this. */
const isPrivate = (ip: string) => {
  if (isIP(ip) === 6) {
    const v = ip.toLowerCase();
    return (
      v === "::1" || v === "::" || V6_PREFIXES.some((p) => v.startsWith(p))
    );
  }
  const [a, b] = ip.split(".").map(Number);
  // multicast and reserved
  if (a >= 224) {
    return true;
  }
  return RESERVED_V4.some(
    ([first, [lo, hi]]) => a === first && b >= lo && b <= hi
  );
};

const assertPublic = async (raw: string) => {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("That is not a URL.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Only http and https.");
  }
  const host = url.hostname.replaceAll(/^\[|\]$/g, "");
  if (isIP(host)) {
    if (isPrivate(host)) {
      throw new Error("That address is not reachable from the internet.");
    }
    return url;
  }
  // Resolve first: a public-looking name can still point at a private address.
  const answers = await lookup(host, { all: true }).catch(() => []);
  if (answers.length === 0) {
    throw new Error("That host does not resolve.");
  }
  if (answers.some((a) => isPrivate(a.address))) {
    throw new Error("That address is not reachable from the internet.");
  }
  return url;
};

const withTimeout = async <T>(fn: (signal: AbortSignal) => Promise<T>) => {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), TIMEOUT_MS);
  try {
    return await fn(c.signal);
  } finally {
    clearTimeout(t);
  }
};

/** Read og:image and friends without pulling in a parser. */
const readMeta = (html: string) => {
  const pick = (key: string) => {
    const re = new RegExp(
      `<meta[^>]+(?:property|name)=["']${key}["'][^>]*content=["']([^"']*)["']|` +
        `<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${key}["']`,
      "i"
    );
    const m = html.match(re);
    return m ? (m[1] ?? m[2] ?? "").trim() : "";
  };
  /* The declared favicon, if any. <link rel="icon" ...> wins and the
     apple-touch-icon is the fallback. data: URIs are skipped: they can be
     huge and are useless to a preview. Resolved against the page URL later. */
  const pickIcon = () => {
    const tags = html.match(/<link[^>]*>/gi) ?? [];
    let fallback = "";
    for (const tag of tags) {
      const rel =
        tag.match(/rel=["']([^"']*)["']/i)?.[1]?.toLowerCase().split(/\s+/) ??
        [];
      if (!rel.includes("icon") && !rel.includes("apple-touch-icon")) {
        continue;
      }
      const href = tag.match(/href=["']([^"']*)["']/i)?.[1]?.trim() ?? "";
      if (!href || href.startsWith("data:")) {
        continue;
      }
      if (rel.includes("icon")) {
        return href;
      }
      fallback ||= href;
    }
    return fallback;
  };
  return {
    card: pick("twitter:card"),
    description: pick("og:description") || pick("description"),
    height: pick("og:image:height"),
    icon: pickIcon(),
    image: pick("og:image") || pick("twitter:image"),
    siteName: pick("og:site_name"),
    title:
      pick("og:title") ||
      (html.match(/<title[^>]*>([^<]*)</i)?.[1] ?? "").trim(),
    url: pick("og:url"),
    width: pick("og:image:width"),
  };
};

interface Hop {
  status: number;
  url: string;
}

/* Resolve the declared favicon against the page that declared it, so the
   Google preview can show the site's real icon. Garbage hrefs resolve to
   nothing rather than breaking the response. */
const resolveIcon = (href: string, base: string) => {
  if (!href) {
    return "";
  }
  try {
    return new URL(href, base).toString();
  } catch {
    return "";
  }
};

/** Follow redirects by hand so each hop can be reported and re-validated. */
const trace = async (target: string, ua: string, accept: string) => {
  const hops: Hop[] = [];
  let current = target;
  for (let i = 0; i < 5; i += 1) {
    const url = await assertPublic(current);
    const res = await withTimeout((signal) =>
      fetch(url, {
        headers: { Accept: accept, "User-Agent": ua },
        redirect: "manual",
        signal,
      })
    );
    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get("location");
      if (!next) {
        return { hops, res, url: current };
      }
      hops.push({ status: res.status, url: current });
      current = new URL(next, current).toString();
      continue;
    }
    return { hops, res, url: current };
  }
  throw new Error("Too many redirects.");
};

interface Finding {
  title: string;
  detail: string;
}

/**
 * What is actually wrong, in words rather than status codes.
 *
 * Only things that change how a link looks when someone shares it. A missing
 * og:url or a redirecting image is worth saying; a missing og:locale is not.
 * Everything reported here is worth fixing, so there are no severity levels:
 * if a tag or a fetch does not change what a person sees when the link is
 * shared, it does not belong in this list at all.
 */
const buildFindings = (
  meta: ReturnType<typeof readMeta> | null,
  images: { redirects: number; bytes: number; ok: boolean }[],
  imageUrl: string
): Finding[] => {
  const out: Finding[] = [];
  if (!meta || !imageUrl) {
    out.push({
      detail:
        "Without og:image most platforms show a bare link, or pick a picture off the page at random.",
      title: "No image to share",
    });
    return out;
  }
  if (!meta.title) {
    out.push({
      detail:
        "Platforms fall back to the page title, which is usually written for search, not for sharing.",
      title: "No og:title",
    });
  }
  if (!meta.description) {
    out.push({
      detail:
        "The line under the image will be empty or scraped from the page.",
      title: "No og:description",
    });
  }
  if (!meta.width || !meta.height) {
    out.push({
      detail:
        "Telling platforms the size up front means the card renders immediately instead of after the image downloads.",
      title: "No og:image:width or og:image:height",
    });
  }
  if (!meta.card) {
    out.push({
      detail:
        "Without twitter:card set to summary_large_image, X shows a small square thumbnail rather than the full picture.",
      title: "No twitter:card",
    });
  }
  if (!meta.url) {
    out.push({
      detail:
        "og:url tells platforms which address is canonical when the same page is reachable more than one way.",
      title: "No og:url",
    });
  }
  if (images.some((i) => !i.ok)) {
    out.push({
      detail:
        "At least one crawler asked for the image and did not get it, so that platform will show the link without a picture.",
      title: "Some crawlers could not load the image",
    });
  }
  const hops = Math.max(...images.map((i) => i.redirects), 0);
  if (hops > 0) {
    out.push({
      detail:
        "Every crawler here followed it, but it is an avoidable hop. It usually means the image URL points at a different host from the one you serve, such as the apex domain rather than www.",
      title: "The image redirects",
    });
  }
  const bytes = images.find((i) => i.ok)?.bytes ?? 0;
  if (bytes > 5_000_000) {
    out.push({
      detail:
        "Some platforms refuse anything over about 5MB and will show no image at all.",
      title: "The image is large",
    });
  }
  return out;
};

export const POST = async (request: Request) => {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(ip);

  if (!limit.ok) {
    return Response.json(
      { error: "Too many requests. Try again in a minute." },
      {
        headers: {
          "Retry-After": String(limit.retryAfter),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": "0",
        },
        status: 429,
      }
    );
  }

  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Send a JSON body with a url." },
      { status: 400 }
    );
  }

  const input = (body.url ?? "").trim();
  if (!input) {
    return Response.json({ error: "Enter a URL." }, { status: 400 });
  }

  const target = /^https?:\/\//i.test(input) ? input : `https://${input}`;

  try {
    await assertPublic(target);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 400 });
  }

  // 1. the page, as each crawler
  const pages = await Promise.all(
    CRAWLERS.map(async (c) => {
      try {
        const { res, hops, url } = await trace(target, c.ua, "text/html,*/*");
        const text = res.ok ? await res.text() : "";
        const html = text.slice(0, 400_000);
        return {
          finalUrl: url,
          id: c.id,
          label: c.label,
          meta: html ? readMeta(html) : null,
          ok: res.ok,
          redirects: hops.length,
          status: res.status,
        };
      } catch (error) {
        return {
          error: (error as Error).message,
          finalUrl: target,
          id: c.id,
          label: c.label,
          meta: null,
          ok: false,
          redirects: 0,
          status: 0,
        };
      }
    })
  );

  /* Prefer a crawler that saw an image, but keep the tags either way: the
     Google result is built from title and description alone. */
  const read = pages.filter((p) => p.meta);
  const foundPage = read.find((p) => p.meta?.image) ?? read[0];
  const found = foundPage?.meta ?? null;
  const imageUrl = found?.image ? new URL(found.image, target).toString() : "";
  /* Same base as og:image above: the declared favicon for the Google preview. */
  const iconUrl = resolveIcon(found?.icon ?? "", target);
  const meta = found ? { ...found, icon: iconUrl } : null;

  // 2. the card itself, as each crawler. A page that unfurls everywhere and an
  //    image that 403s to one of them is the failure people actually hit.
  const images = imageUrl
    ? await Promise.all(
        CRAWLERS.map(async (c) => {
          try {
            const { res, hops, url } = await trace(
              imageUrl,
              c.ua,
              "image/*,*/*"
            );
            const type = res.headers.get("content-type") ?? "";
            const len = Number(res.headers.get("content-length") ?? 0);
            let bytes = len;
            if (res.ok && len === 0) {
              const buf = await res.arrayBuffer();
              bytes = Math.min(buf.byteLength, MAX_IMAGE_BYTES);
            }
            return {
              bytes,
              contentType: type,
              finalUrl: url,
              id: c.id,
              label: c.label,
              ok: res.ok && type.startsWith("image/"),
              redirects: hops.length,
              status: res.status,
            };
          } catch (error) {
            return {
              bytes: 0,
              contentType: "",
              error: (error as Error).message,
              finalUrl: imageUrl,
              id: c.id,
              label: c.label,
              ok: false,
              redirects: 0,
              status: 0,
            };
          }
        })
      )
    : [];

  const findings = buildFindings(found, images, imageUrl);

  return Response.json(
    { findings, imageUrl, images, meta, pages, url: target },
    { headers: { "Cache-Control": "no-store" } }
  );
};
