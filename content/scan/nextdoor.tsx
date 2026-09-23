import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          Nextdoor turns a shared link into a post card: a large{" "}
          <code>og:image</code> on top, a bold <code>og:title</code> below it,
          one to two lines of muted <code>og:description</code>, and the bare
          domain underneath. The card is text-led and neighborhood-scannable, so
          a plain-spoken title and a first line that says what the link is do
          the most work.
        </p>
        <p>
          The card is driven by the standard tags — <code>og:title</code>,{" "}
          <code>og:description</code>, <code>og:image</code>, and{" "}
          <code>og:url</code> — read from the initial HTML response.
        </p>
      </>
    ),
    heading: "How Nextdoor renders a link",
  },
  {
    body: (
      <>
        <p>
          When a post shows a bare URL instead of a card, the fetch failed
          rather than a tag being absent. Nextdoor publishes no dedicated
          preview crawler, so the scan fetches the page with a standard browser
          user agent — a login wall, an internal host, or an{" "}
          <code>og:image</code> it cannot reach leaves only the link text either
          way.
        </p>
        <p>
          The scan above requests the page the same way, so a check that passes
          here is a fetch that works in a Nextdoor post.
        </p>
      </>
    ),
    heading: "Why Nextdoor sometimes shows no preview",
  },
  {
    body: (
      <>
        <p>
          Set <code>og:title</code>, <code>og:description</code>, and{" "}
          <code>og:image</code> in the page head, server-rendered. Use an HTTPS
          image at <code>1200×630</code> when possible, keep it under 5 MB, and
          serve it without an avoidable redirect. Keep the title short and the
          description to two lines — that is all the card shows.
        </p>
        <p>
          The scanner fetches both the page and its image the same way a
          Nextdoor unfurl would, so it can show whether the tags are reachable
          before you share the link.
        </p>
      </>
    ),
    heading: "What to set for a Nextdoor preview",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "Nextdoor reads the standard Open Graph tags — og:title, og:description, og:image, and og:url — from the initial HTML response. The page and image must be reachable over HTTPS without a login.",
    question: "Which meta tags does a Nextdoor preview use?",
  },
  {
    answer:
      "Nextdoor publishes no dedicated preview crawler, so there is no bot token to allow-list — the page simply needs to serve its Open Graph tags to ordinary requests. A login wall, client-rendered tags, or an unreachable image are the usual causes of a bare link.",
    question: "Why does Nextdoor show only the URL?",
  },
  {
    answer:
      "Use a 1200×630 image when possible and keep it under 5 MB. Serve it from an HTTPS URL with an image content type and no avoidable redirect — Nextdoor shows it large at the top of the post card.",
    question: "What image size works best for Nextdoor?",
  },
  {
    answer:
      "Nextdoor caches the card once the post has been created. Fix the tags, then share the URL with a fresh query string to trigger a new fetch — the cached card keeps showing until it expires.",
    question: "How do I refresh a cached Nextdoor preview?",
  },
];
