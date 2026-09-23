import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          Every platform reads the same handful of tags and then frames them its
          own way. <code>og:image</code> is a banner on Facebook and a thumbnail
          in a{" "}
          <Link
            className="underline underline-offset-4"
            href={ROUTES.SCAN_NOTION}
          >
            Notion bookmark
          </Link>
          . <code>og:site_name</code> is invisible almost everywhere except{" "}
          <Link
            className="underline underline-offset-4"
            href={ROUTES.SCAN_TEAMS}
          >
            Microsoft Teams
          </Link>{" "}
          and Discord. <code>og:title</code> is ignored outright on{" "}
          <Link
            className="underline underline-offset-4"
            href={ROUTES.SCAN_REDDIT}
          >
            Reddit
          </Link>
          , where the person posting writes the headline.{" "}
          <Link
            className="underline underline-offset-4"
            href={ROUTES.SCAN_GOOGLE}
          >
            Google
          </Link>{" "}
          does not read Open Graph at all and builds its result from the title
          tag and meta description.
        </p>
        <p>
          That is why one card is not enough to check. A description written to
          survive X is cut to nothing on LinkedIn and read in full on Discord,
          and an image that looks right as a wide banner can lose its text once{" "}
          <Link
            className="underline underline-offset-4"
            href={ROUTES.SCAN_INSTAGRAM}
          >
            Instagram
          </Link>{" "}
          crops it into a DM bubble.
        </p>
      </>
    ),
    heading: "Why the same tags look different everywhere",
  },
  {
    body: (
      <>
        <p>
          Each preview above comes from a real request. The page is fetched once
          per crawler user agent, and then the image it points at is fetched the
          same way, so a host that serves a different response to Twitterbot or
          blocks{" "}
          <Link
            className="underline underline-offset-4"
            href={ROUTES.SCAN_BLUESKY}
          >
            Bluesky
          </Link>
          &apos;s Cardyb shows up as a failed row rather than a guess.
        </p>
        <p>
          Open <em>What each crawler got</em> to see the status, content type,
          size and redirect count per platform. A card that renders everywhere
          but 403s to one crawler is the failure people actually hit, and it is
          invisible in a browser.
        </p>
      </>
    ),
    heading: "What this checker actually does",
  },
  {
    body: (
      <>
        <p>
          Set <code>og:title</code>, <code>og:description</code>,{" "}
          <code>og:url</code>, <code>og:site_name</code> and an{" "}
          <code>og:image</code> at 1200×630, with <code>og:image:width</code>{" "}
          and <code>og:image:height</code> declared so platforms can reserve the
          space before the file lands. Add <code>twitter:card</code> set to{" "}
          <code>summary_large_image</code>, or X shrinks the image to a square
          thumbnail.
        </p>
        <p>
          Keep the image under a megabyte or two, serve it without a redirect,
          and make sure it needs no cookie or login to fetch. Most broken cards
          are not missing tags; they are tags pointing at an image a crawler
          cannot reach.
        </p>
      </>
    ),
    heading: "What to set before you share",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "The page is fetched once per platform using that platform's crawler user agent, then the og:image is fetched the same way. Nothing is cached and nothing is guessed, so what you see is what those services get right now.",
    question: "How does this preview checker work?",
  },
  {
    answer:
      "Almost always the image, not the tags: it redirects, needs a login, is too large, or is served only to browsers. Open the crawler list under the previews to see which platform failed and why.",
    question: "Why does my link preview work on one platform but not another?",
  },
  {
    answer:
      "1200×630. It is the ratio every platform crops toward, so a square or portrait image loses its top and bottom on Facebook, X, Bluesky and Reddit alike.",
    question: "What is the right Open Graph image size?",
  },
  {
    answer:
      "No. Platforms cache an unfurl for hours or days. Facebook's Sharing Debugger and LinkedIn's Post Inspector can force a refetch; elsewhere, changing the URL is the reliable way to get a fresh fetch.",
    question: "Does fixing my tags update links I already shared?",
  },
];
