import type { ControlConfig } from "@/lib/customizer-config";

export const shioriConfig: ControlConfig = {
  background: {
    default: "#faf6f1",
    label: "Background Color",
    type: "color",
  },
  brand: { default: "Shiori", label: "Brand", type: "text" },
  brandColor: { default: "#1a1a1a", label: "Brand Color", type: "color" },
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
  titleColor: {
    default: "#8b7e74",
    label: "Title Color",
    type: "color",
  },
};
