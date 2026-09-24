const resolveUrl = (href: string, base: string) => {
  if (!href) {
    return "";
  }
  try {
    return new URL(href, base).toString();
  } catch {
    return "";
  }
};

interface PreviewMeta {
  icon: string;
  image: string;
  ogImage: string;
  twitterImage: string;
}

/** Resolve metadata URLs against the page that supplied them, after redirects. */
export const resolvePreviewAssets = <T extends PreviewMeta>(
  page: { finalUrl: string; meta: T } | undefined
) => {
  if (!page) {
    return { imageUrl: "", meta: null };
  }

  const { finalUrl, meta } = page;
  return {
    imageUrl: resolveUrl(meta.image, finalUrl),
    meta: {
      ...meta,
      icon: resolveUrl(meta.icon, finalUrl),
      ogImage: resolveUrl(meta.ogImage, finalUrl),
      twitterImage: resolveUrl(meta.twitterImage, finalUrl),
    },
  };
};
