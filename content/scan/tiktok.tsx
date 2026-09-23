import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          TikTok draws a shared link as a compact card in DMs and comments: a
          small thumbnail cropped from <code>og:image</code>, a bold{" "}
          <code>og:title</code>, and the bare domain underneath. The card is
          mobile-sized and follows the app&apos;s light or dark setting, so it
          reads as a message attachment rather than a post.
        </p>
        <p>
          TikTokSpider reads the standard tags — <code>og:title</code>,{" "}
          <code>og:description</code>, <code>og:image</code>, and{" "}
          <code>og:url</code> — but the card itself shows only the image, the
          title, and the domain. A card whose meaning lives in{" "}
          <code>og:description</code> still needs that tag set for other
          consumers, but it will not appear in the TikTok unfurl, so the title
          has to make sense on its own.
        </p>
      </>
    ),
    heading: "How TikTok renders a link",
  },
  {
    body: (
      <>
        <p>
          When a message shows a bare URL instead of a card, the fetch failed
          rather than a tag being absent. TikTokSpider fetches the page without
          executing JavaScript and respects <code>robots.txt</code>, so
          client-rendered tags, a login wall, or a crawler block leave only the
          link text. It is a distinct crawler from ByteDance&apos;s Bytespider,
          which is used for AI training — blocking one does not block the other,
          so check your rules against the <code>TikTokSpider</code> token
          specifically.
        </p>
        <p>
          The scan above requests the page the way TikTokSpider does, so a check
          that passes here is a fetch that works in TikTok chats.
        </p>
      </>
    ),
    heading: "Why TikTok sometimes shows no preview",
  },
  {
    body: (
      <>
        <p>
          Set <code>og:title</code>, <code>og:description</code>, and{" "}
          <code>og:image</code> in the page head, server-rendered. Use an HTTPS
          image at <code>1200×630</code> when possible, keep it under 5 MB, and
          serve it without an avoidable redirect. Keep the title short — the
          thumbnail is small and the title is all the text the card shows.
        </p>
        <p>
          The scanner fetches both the page and its image with
          TikTokSpider&apos;s user agent, so it can show whether the tags are
          reachable before you share the link.
        </p>
      </>
    ),
    heading: "What to set for a TikTok preview",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "TikTokSpider reads the standard tags — og:title, og:description, og:image, and og:url — with fallbacks to the title element and meta description. The rendered card shows only the image, the title, and the domain.",
    question: "Which meta tags does a TikTok preview use?",
  },
  {
    answer:
      "TikTok does not render og:description in the link card — it shows the image, the title, and the domain only. Keep the tag set anyway for other platforms, but make the title self-contained.",
    question: "Why is my og:description not shown on TikTok?",
  },
  {
    answer:
      "Use a 1200×630 image when possible and keep it under 5 MB. Serve it from an HTTPS URL with an image content type and no avoidable redirect — TikTok crops it into a small square thumbnail.",
    question: "What image size works best for TikTok?",
  },
  {
    answer:
      "TikTok caches the card once it has been unfurled. Fix the tags, then share the URL with a fresh query string to trigger a new fetch — the cached card keeps showing until it expires.",
    question: "How do I refresh a cached TikTok preview?",
  },
];
