import assert from "node:assert/strict";
import test from "node:test";

import { resolvePreviewAssets } from "../lib/og-test-urls.ts";

test("relative preview assets use the page URL after a redirect", () => {
  const result = resolvePreviewAssets({
    finalUrl: "https://example.com/articles/post/",
    meta: {
      icon: "../../favicon.ico",
      image: "images/card.png",
      ogImage: "images/card.png",
      twitterImage: "/social/twitter.png",
    },
  });

  assert.equal(
    result.imageUrl,
    "https://example.com/articles/post/images/card.png"
  );
  assert.equal(result.meta.icon, "https://example.com/favicon.ico");
  assert.equal(result.meta.ogImage, result.imageUrl);
  assert.equal(
    result.meta.twitterImage,
    "https://example.com/social/twitter.png"
  );
});

test("absolute preview assets remain unchanged", () => {
  const result = resolvePreviewAssets({
    finalUrl: "https://example.com/articles/post/",
    meta: {
      icon: "",
      image: "https://cdn.example.net/card.png",
      ogImage: "https://cdn.example.net/card.png",
      twitterImage: "",
    },
  });

  assert.equal(result.imageUrl, "https://cdn.example.net/card.png");
  assert.equal(result.meta.icon, "");
  assert.equal(result.meta.twitterImage, "");
});
