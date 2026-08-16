import { createMDX } from "fumadocs-mdx/next";
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

const { LINK } = await jiti.import("./constants/links");
const { ROUTES } = await jiti.import("./constants/routes");

const legacyComponentRoutes = {
  blog: "content/blog",
  "blog/blog": "content/blog",
  "blog/editorial": "content/editorial",
  "blog/photo": "content/photo",
  "blog/quote": "content/quote",
  "brand/logo": "product/logo",
  "brand/profile": "content/profile",
  changelog: "product/changelog",
  editorial: "content/editorial",
  event: "product/event",
  general: "shadcn-registry",
  "general/simple": "product/simple",
  grid: "content/grid",
  logo: "product/logo",
  misc: "content",
  "misc/grid": "content/grid",
  "misc/stat": "content/stat",
  "misc/terminal": "content/terminal",
  owner: "brand/owner",
  photo: "content/photo",
  profile: "content/profile",
  quote: "content/quote",
  "shadcn-registry-1": "shadcn-registry/1",
  "shadcn-registry-2": "shadcn-registry/2",
  "shadcn-registry-3": "shadcn-registry/3",
  "shadcn-registry-4": "shadcn-registry/4",
  "shadcn-registry-5": "shadcn-registry/5",
  "shadcn-registry-6": "shadcn-registry/6",
  "shadcn-registry/shadcn-registry-1": "shadcn-registry/1",
  "shadcn-registry/shadcn-registry-2": "shadcn-registry/2",
  "shadcn-registry/shadcn-registry-3": "shadcn-registry/3",
  "shadcn-registry/shadcn-registry-4": "shadcn-registry/4",
  "shadcn-registry/shadcn-registry-5": "shadcn-registry/5",
  "shadcn-registry/shadcn-registry-6": "shadcn-registry/6",
  "shadcn-registry/simple": "product/simple",
  shiori: "brand/shiori",
  showcase: "product/showcase",
  simple: "product/simple",
  stat: "content/stat",
  technical: "content",
  "technical/grid": "content/grid",
  "technical/stat": "content/stat",
  "technical/terminal": "content/terminal",
  terminal: "content/terminal",
};

const redirect = (source, destination) => ({
  destination,
  permanent: true,
  source,
});

const componentRedirects = Object.entries(legacyComponentRoutes).flatMap(
  ([from, to]) => [
    redirect(
      `${ROUTES.DOCS_COMPONENTS}/${from}`,
      `${ROUTES.DOCS_COMPONENTS}/${to}`
    ),
    redirect(
      `${ROUTES.DOCS_COMPONENTS}/${from}.md`,
      `${ROUTES.DOCS_COMPONENTS}/${to}.md`
    ),
    redirect(
      `${ROUTES.DOCS_COMPONENTS}/${from}.mdx`,
      `${ROUTES.DOCS_COMPONENTS}/${to}.md`
    ),
  ]
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  headers() {
    const link = [
      `<${ROUTES.API_CATALOG}>; rel="api-catalog"`,
      `<${ROUTES.OPENAPI}>; rel="service-desc"`,
      `<${ROUTES.DOCS}>; rel="service-doc"`,
      `<${LINK.SHADCN_MCP_DOCS}>; rel="service-doc"; title="shadcn MCP server"`,
      `<${ROUTES.AGENT_SKILLS_INDEX}>; rel="describedby"`,
    ].join(", ");

    return [{ headers: [{ key: "Link", value: link }], source: ROUTES.HOME }];
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*"],
  },
  redirects() {
    return [
      ...componentRedirects,
      redirect(`${ROUTES.DOCS}.mdx`, `${ROUTES.DOCS}.md`),
      redirect(`${ROUTES.DOCS}/:path*.mdx`, `${ROUTES.DOCS}/:path*.md`),
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
