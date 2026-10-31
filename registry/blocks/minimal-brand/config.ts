import type { ControlConfig } from "@/registry/lib/customizer-config";

export const minimalBrandConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  tagline: {
    default: "Open Graph images, built on Satori",
    label: "Tagline",
    type: "textarea",
  },
};
