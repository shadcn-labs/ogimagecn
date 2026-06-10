import type { ControlConfig } from "@/lib/customizer-config";

export const logoConfig: ControlConfig = {
  accent: { default: "#7c3aed", label: "Accent Color", type: "color" },
  background: { default: "#09090b", label: "Background", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  monogram: { default: "", label: "Monogram", type: "text" },
  tagline: {
    default: "Open Graph images, built on Satori",
    label: "Tagline",
    type: "text",
  },
};
