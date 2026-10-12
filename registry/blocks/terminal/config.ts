import type { ControlConfig } from "@/registry/lib/customizer-config";

export const terminalConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  caption: {
    default: "npx shadcn@latest add ogimagecn",
    label: "Caption",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Ship beautiful OG images",
    label: "Title",
    type: "text",
  },
  variant: {
    default: "dark",
    label: "Variant",
    options: ["dark", "light"],
    type: "select",
  },
};
