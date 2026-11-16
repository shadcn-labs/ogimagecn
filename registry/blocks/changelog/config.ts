import type { ControlConfig } from "@/registry/lib/customizer-config";

export const changelogConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  date: { default: "June 2026", label: "Date", type: "text" },
  items: {
    default: [
      "Seven new OG image components",
      "Live in-browser previews",
      "One-line shadcn install",
    ],
    label: "Items",
    type: "array",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: { default: "What's new", label: "Title", type: "text" },
  variant: {
    default: "dark",
    label: "Variant",
    options: ["dark", "light"],
    type: "select",
  },
  version: { default: "v2.0", label: "Version", type: "text" },
};
