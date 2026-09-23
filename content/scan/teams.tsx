import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          Teams attaches the card under the message: the site name from{" "}
          <code>og:site_name</code> in small type, the title, a short piece of
          the description, and the image. It is one of the few surfaces where{" "}
          <code>og:site_name</code> is actually shown, and one of the few where
          a link is read by colleagues rather than scrolled past.
        </p>
        <p>
          The description is trimmed hard, so the first sentence has to say what
          the page is. Everything after it is decoration in this context.
        </p>
        <p>
          Teams also reverses the usual precedence: when a page sets both,{" "}
          <code>twitter:title</code>, <code>twitter:description</code> and{" "}
          <code>twitter:image</code> win over their Open Graph equivalents. The
          preview above follows the same order, so mismatched tags show up here.
        </p>
      </>
    ),
    heading: "How Teams renders a link",
  },
  {
    body: (
      <>
        <p>
          Teams unfurls server side, so the page has to be reachable from the
          public internet. An internal URL, a staging host behind a VPN, or a
          page that requires a session will show as a bare link for everyone,
          including the person who can open it in their own browser.
        </p>
        <p>
          Corporate policy is the other common cause: some tenants disable link
          previews, and some channels strip them. If the scan above returns a
          clean card and the message still shows a plain URL, the limit is on
          the tenant rather than the page.
        </p>
      </>
    ),
    heading: "When a link does not unfurl",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "Teams reads og:title, og:description, og:image and og:site_name, but twitter:title, twitter:description and twitter:image override the Open Graph values when both are set. The site name is displayed above the title, which most other platforms drop.",
    question: "Which meta tags does Microsoft Teams read?",
  },
  {
    answer:
      "Most often the page is not publicly reachable — an intranet host, a staging site behind a VPN, or a page that needs a login. Teams fetches it server side, so what your browser can open is not the test.",
    question: "Why does my link not preview in Teams?",
  },
  {
    answer:
      "Use 1200×630. Teams scales the image into the card under the message, and an off-ratio image is cropped rather than letterboxed.",
    question: "What image size should I use for Teams?",
  },
  {
    answer:
      "Teams caches unfurls and has no public debugger. Change the URL — a query string is enough — to force a fresh fetch once the tags are fixed.",
    question: "How do I clear a cached Teams preview?",
  },
];
