import type { ControlConfig } from "@/registry/lib/customizer-config";

export const shioriConfig: ControlConfig = {
  brand: { default: "Shiori", label: "Brand", type: "text" },
  logo: {
    default: "https://www.shiori.sh/logo.png",
    label: "Logo",
    type: "image",
  },
  title: {
    default: "A beautifully simple read-it-later app",
    label: "Title",
    type: "text",
  },
  variant: {
    default: "light",
    label: "Variant",
    options: ["light", "dark"],
    type: "select",
  },
};
