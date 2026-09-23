import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          Signal builds a link preview on the sender&apos;s device and routes
          the request through a privacy proxy. The card puts the image first,
          then a bold title, a short description, and the bare domain
          underneath.
        </p>
        <p>
          Signal reads the Open Graph title, description, and image from the
          initial HTML response and ignores <code>twitter:*</code> tags. Without{" "}
          <code>og:image</code> it falls back to the page&apos;s
          apple-touch-icon or favicon, shown as a small thumbnail beside the
          text; so is any image under 200px or roughly square. A clear title and
          a wide image that still reads when cropped do the most work.
        </p>
      </>
    ),
    heading: "How Signal renders a link",
  },
  {
    body: (
      <>
        <p>
          Signal only supports links that start with <code>https</code>. A
          disabled link-preview setting, a page that blocks the request, or
          metadata that is not present in the initial response can leave the
          message as a plain link.
        </p>
        <p>
          Previews are generated before a message is sent and can be removed
          from the composer. If a page has changed, paste the link again after
          fixing its metadata instead of relying on an older preview.
        </p>
      </>
    ),
    heading: "When Signal does not show a preview",
  },
  {
    body: (
      <>
        <p>
          Set <code>og:title</code>, <code>og:description</code>, and{" "}
          <code>og:image</code> in the page head. Use an HTTPS image at{" "}
          <code>1200×630</code> when possible, keep it under 5 MB, and serve it
          without an image redirect.
        </p>
        <p>
          The scanner requests both the page and its image with Signal&apos;s
          preview user agent, so it can show whether the tags are reachable
          before you send the link.
        </p>
      </>
    ),
    heading: "What to set for a Signal preview",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "Signal reads og:title, og:description, and og:image from the initial HTML response. The page and image must be reachable over HTTPS.",
    question: "Which meta tags does a Signal preview use?",
  },
  {
    answer:
      "Check that link previews are enabled in Signal under Settings > Chats > Generate link previews, then make sure the page returns the Open Graph tags in its initial response.",
    question: "Why does Signal show only the URL?",
  },
  {
    answer:
      "Use a 1200×630 image when possible and keep it under 5 MB. Serve it from an HTTPS URL with an image content type and no avoidable redirect.",
    question: "What image size works best for Signal?",
  },
  {
    answer:
      "Signal creates the preview before sending. Paste the URL again after changing the page metadata, and remove the existing preview with the X button if it was already attached.",
    question: "How do I refresh a Signal link preview?",
  },
];
