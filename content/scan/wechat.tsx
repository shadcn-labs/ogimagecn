import type { ScanFaq, ScanSection } from "@/content/scan/types";

export const SECTIONS: ScanSection[] = [
  {
    body: (
      <>
        <p>
          WeChat draws a shared link as a chat-bubble card: the title across the
          top, a muted description on the left, and a small square thumbnail on
          the right. What fills those slots depends on the page, not on its Open
          Graph tags.
        </p>
        <p>
          Since 2017, a link shared from inside WeChat uses custom content only
          when the page calls WeChat&apos;s JS-SDK (
          <code>wx.updateAppMessageShareData</code>) from a domain registered to
          a verified Official Account. Every other page is sent in{" "}
          <em>link form</em>: the <code>&lt;title&gt;</code> as the title, the
          URL itself as the description, and a generic link icon instead of a
          picture.
        </p>
      </>
    ),
    heading: "How WeChat renders a link",
  },
  {
    body: (
      <>
        <p>
          <code>og:title</code>, <code>og:description</code> and{" "}
          <code>og:image</code> are only used when another browser or app shares
          the page to WeChat and builds the card itself. Inside WeChat they are
          ignored, so a page can unfurl everywhere else and still arrive as a
          bare title and URL.
        </p>
        <p>
          The scan above looks for the JS-SDK script in the page. Without it,
          the preview shows the link-form card WeChat will actually send. With
          it, the preview uses your Open Graph values as a stand-in, because the
          real ones are set by JavaScript at share time and cannot be read from
          the HTML.
        </p>
      </>
    ),
    heading: "Why WeChat ignores your Open Graph tags",
  },
  {
    body: (
      <>
        <p>
          Always write a <code>&lt;title&gt;</code> that makes sense on its own:
          it is the one thing every WeChat share shows. For a full card, load
          the JS-SDK, sign the config on your server, and call{" "}
          <code>wx.updateAppMessageShareData</code> inside <code>wx.ready</code>{" "}
          with a title, a description, and an HTTPS thumbnail.
        </p>
        <p>
          Keep the Open Graph tags as well: they cover shares from other
          browsers into WeChat and every other platform on this page.
        </p>
      </>
    ),
    heading: "What to set for a WeChat preview",
  },
];

export const FAQS: ScanFaq[] = [
  {
    answer:
      "When a link is shared from inside WeChat, none of them unless the page configures the JS-SDK. Without it, WeChat uses the title tag and shows the URL as the description. Open Graph tags only apply when another app shares the page into WeChat.",
    question: "Which meta tags does a WeChat preview use?",
  },
  {
    answer:
      "That is WeChat's link form, used for every page that does not call wx.updateAppMessageShareData. A thumbnail and a custom description require the JS-SDK on a domain registered to a verified Official Account.",
    question: "Why does WeChat show only the title and URL?",
  },
  {
    answer:
      "The thumbnail comes from the imgUrl you pass to wx.updateAppMessageShareData, not from og:image. Use an HTTPS image that WeChat can reach without a login; it is cropped into a small square.",
    question: "How do I set the WeChat thumbnail?",
  },
  {
    answer:
      "Call wx.updateAppMessageShareData again with the new values; the next share uses them. Cards already sent in a chat keep what they were sent with.",
    question: "How do I update a WeChat share card?",
  },
];
