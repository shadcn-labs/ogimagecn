import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          Mastodon expands a wide preview image above the text. Under it, the
          card shows the provider or hostname, a bold title, and one clipped
          description line. Images wider than they are tall use the expanded
          layout; small or square images, or a page with no{" "}
          <code>og:image</code>, get a compact row instead. Mastodon never falls
          back to <code>twitter:image</code>, and without{" "}
          <code>og:site_name</code> it prints the full hostname, www included.
        </p>
        <p>
          Use a 1.91:1 image such as 1200×630 and keep essential text away from
          the edges. Mastodon instances cache preview cards, so an old share may
          keep the earlier image after you update the page.
        </p>
      </>
    ),
    heading: "How Mastodon renders a link",
  },
  {
    body: (
      <>
        <p>
          Each Mastodon server fetches links for its own users. A page that
          blocks the instance&apos;s bot, requires a login, or returns
          incomplete metadata can appear as a bare link on one server even when
          another server already has a cached card.
        </p>
        <p>
          Set <code>og:title</code>, <code>og:description</code>,{" "}
          <code>og:image</code>, and <code>og:url</code>. Add{" "}
          <code>og:site_name</code> when you want a recognizable provider name
          above the title. The crawler row above shows whether Mastodon could
          fetch both the page and its image.
        </p>
      </>
    ),
    heading: "Why a preview can be missing",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "Mastodon reads Open Graph metadata and creates a preview card with the provider or hostname, title, description, and image. A wide image produces the large card shown above.",
    question: "Which tags does Mastodon use for link previews?",
  },
  {
    answer:
      "Use 1200×630 or another image close to a 1.91:1 ratio. Mastodon treats images wider than they are tall as expanded cards and crops them to the available width.",
    question: "What image size works best on Mastodon?",
  },
  {
    answer:
      "The Mastodon instance may be unable to fetch the page or image, the page may omit Open Graph tags, or the instance may still hold an older cached result. Check the crawler result above before changing the design.",
    question: "Why does my Mastodon post show a bare link?",
  },
  {
    answer:
      "Preview cards are fetched and cached by each Mastodon instance. Updating your metadata does not guarantee that an existing post or another instance will refresh immediately.",
    question: "How do I refresh a Mastodon link preview?",
  },
];
