import { ROUTES } from "@/constants/routes";
import type { PageTreeFolder } from "@/lib/page-tree";
import { formatLabelFromSlug } from "@/lib/utils";

export const DOCS_DIR = `content${ROUTES.DOCS}`;

export const EXCLUDED_SECTIONS = new Set(["installation", "(root)"]);

export const isBlocksFolder = (folder: PageTreeFolder) =>
  folder.$id === "blocks";

export const getRegistryItemNameFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  const name = parts.at(-1) ?? "";

  return parts.at(-2) === "shadcn-registry" ? `shadcn-registry-${name}` : name;
};

const TITLE_OVERRIDES: Record<string, string> = {
  json: "JSON",
  "qr-code": "QR Code",
};

export const formatTitleFromSlug = (slug: string): string =>
  TITLE_OVERRIDES[slug] ?? formatLabelFromSlug(slug);

export const homeContentRoute = `${ROUTES.LLMS_MD}/content.md`;
export const docsContentRoute = `${ROUTES.LLMS_MD}${ROUTES.DOCS}`;

export const PAGES_NEW: string[] = [
  ROUTES.DOCS_CHANGELOG,
  `${ROUTES.DOCS_COMPONENTS}/avatar`,
  `${ROUTES.DOCS_COMPONENTS}/badge`,
  `${ROUTES.DOCS_COMPONENTS}/brand-mark`,
  `${ROUTES.DOCS_COMPONENTS}/grid-lines`,
  `${ROUTES.DOCS_BLOCKS}/shadcn-registry/1`,
  `${ROUTES.DOCS_BLOCKS}/shadcn-registry/2`,
  `${ROUTES.DOCS_BLOCKS}/shadcn-registry/3`,
  `${ROUTES.DOCS_BLOCKS}/shadcn-registry/4`,
  `${ROUTES.DOCS_BLOCKS}/shadcn-registry/5`,
  `${ROUTES.DOCS_BLOCKS}/shadcn-registry/6`,
];
