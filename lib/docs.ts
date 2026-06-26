import { ROUTES } from "@/constants/routes";
import type { PageTreeFolder } from "@/lib/page-tree";
import { formatLabelFromSlug } from "@/lib/utils";

export const DOCS_DIR = `content${ROUTES.DOCS}`;

export const EXCLUDED_SECTIONS = new Set(["installation", "(root)"]);

export const isComponentsFolder = (folder: PageTreeFolder) =>
  folder.$id === "components" || folder.name === "Components";

const TITLE_OVERRIDES: Record<string, string> = {
  json: "JSON",
  "qr-code": "QR Code",
};

export const formatTitleFromSlug = (slug: string): string =>
  TITLE_OVERRIDES[slug] ?? formatLabelFromSlug(slug);

export const homeContentRoute = `${ROUTES.LLMS_MD}/content.md`;
export const docsContentRoute = `${ROUTES.LLMS_MD}${ROUTES.DOCS}`;
export const docsImageRoute = `${ROUTES.OG}${ROUTES.DOCS}`;

export const PAGES_NEW: string[] = [
  ROUTES.DOCS_CHANGELOG,
  `${ROUTES.DOCS_COMPONENTS}/shadcn-registry-1`,
  `${ROUTES.DOCS_COMPONENTS}/shadcn-registry-2`,
  `${ROUTES.DOCS_COMPONENTS}/shadcn-registry-3`,
  `${ROUTES.DOCS_COMPONENTS}/shadcn-registry-4`,
  `${ROUTES.DOCS_COMPONENTS}/shadcn-registry-5`,
  `${ROUTES.DOCS_COMPONENTS}/shadcn-registry-6`,
];
