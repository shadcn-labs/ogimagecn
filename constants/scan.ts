import type { ScanPlatformId } from "@/components/og-tester";
import { ROUTES } from "@/constants/routes";

export interface ScanPlatformPage {
  href: string;
  id: ScanPlatformId;
  name: string;
}

export const SCAN_PLATFORM_PAGES: ScanPlatformPage[] = [
  { href: ROUTES.SCAN_BLUESKY, id: "bluesky", name: "Bluesky" },
  { href: ROUTES.SCAN_GOOGLE, id: "google", name: "Google" },
  { href: ROUTES.SCAN_GOOGLE_CHAT, id: "google-chat", name: "Google Chat" },
  { href: ROUTES.SCAN_IMESSAGE, id: "imessage", name: "iMessage" },
  { href: ROUTES.SCAN_INSTAGRAM, id: "instagram", name: "Instagram" },
  { href: ROUTES.SCAN_LINE, id: "line", name: "LINE" },
  { href: ROUTES.SCAN_MASTODON, id: "mastodon", name: "Mastodon" },
  { href: ROUTES.SCAN_NEXTDOOR, id: "nextdoor", name: "Nextdoor" },
  { href: ROUTES.SCAN_NOTION, id: "notion", name: "Notion" },
  { href: ROUTES.SCAN_REDDIT, id: "reddit", name: "Reddit" },
  { href: ROUTES.SCAN_SIGNAL, id: "signal", name: "Signal" },
  { href: ROUTES.SCAN_SNAPCHAT, id: "snapchat", name: "Snapchat" },
  { href: ROUTES.SCAN_TEAMS, id: "teams", name: "Microsoft Teams" },
  { href: ROUTES.SCAN_THREADS, id: "threads", name: "Threads" },
  { href: ROUTES.SCAN_TIKTOK, id: "tiktok", name: "TikTok" },
  { href: ROUTES.SCAN_TUMBLR, id: "tumblr", name: "Tumblr" },
  { href: ROUTES.SCAN_WECHAT, id: "wechat", name: "WeChat" },
];
