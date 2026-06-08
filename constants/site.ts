export const FALLBACK_SITE_ORIGIN = "https://ogimagecn.vercel.app" as const;

const getBaseUrl = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return process.env.SITE_URL ?? FALLBACK_SITE_ORIGIN;
};

const baseUrl = getBaseUrl();

export const SITE = {
  AUTHOR: {
    NAME: "Aniket Pawar",
    TWITTER: "@alaymanguy",
  },
  DESCRIPTION: {
    LONG: "A collection of beautifully designed and customizable Open Graph image components. Built on Satori. Works with shadcn/ui.",
    SHORT: "Beautiful OG images, made simple",
  },
  KEYWORDS: [
    "og image",
    "open graph",
    "satori",
    "next/og",
    "shadcn registry",
    "social card",
    "next.js",
    "tailwindcss",
    "npx shadcn add",
  ] as const,
  NAME: "ogimagecn",
  OG_IMAGE: `${baseUrl}/og`,
  REGISTRY: "@ogimagecn",
  URL: baseUrl,
};

export const META_THEME_COLORS = {
  dark: "#09090b",
  light: "#ffffff",
};

export const UTM_PARAMS = {
  utm_source: new URL(baseUrl).hostname,
};
