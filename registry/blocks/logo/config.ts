import type { ControlConfig } from "@/registry/lib/customizer-config";

export const logoConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  monogram: { default: "", label: "Monogram", type: "text" },
  tagline: {
    default: "Open Graph images, built on Satori",
    label: "Tagline",
    type: "textarea",
  },
  variant: {
    default: "dark",
    label: "Variant",
    options: ["dark", "light"],
    type: "select",
  },
};
