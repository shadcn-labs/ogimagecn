import type { MetadataRoute } from "next";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: SITE.URL,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_INSTAGRAM}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_BLUESKY}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_MASTODON}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_LINE}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_REDDIT}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_SNAPCHAT}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_TEAMS}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_THREADS}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_TIKTOK}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_TUMBLR}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE.URL}${ROUTES.SCAN_WECHAT}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
      url: `${SITE.URL}${ROUTES.SPONSOR}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE.URL}${ROUTES.SCAN_NOTION}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE.URL}${ROUTES.SCAN_NEXTDOOR}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE.URL}${ROUTES.SCAN_GOOGLE}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE.URL}${ROUTES.SCAN_GOOGLE_CHAT}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE.URL}${ROUTES.SCAN_IMESSAGE}`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${SITE.URL}${ROUTES.SCAN_SIGNAL}`,
    },
  ];

  const docPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
    priority: page.url === "/docs" ? 0.9 : 0.8,
    url: `${SITE.URL}${page.url}`,
  }));

  return [...staticPages, ...docPages];
}
