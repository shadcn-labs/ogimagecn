import type { ControlConfig } from "@/lib/customizer-config";

export const logoConfig: ControlConfig = {
  background: { default: "#09090b", label: "Background", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  monogram: { default: "", label: "Monogram", type: "text" },
  tagline: {
    default: "Open Graph images, built on Satori",
    label: "Tagline",
    type: "text",
  },
};
