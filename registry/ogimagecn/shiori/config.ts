import type { ControlConfig } from "@/lib/customizer-config";

export const shioriConfig: ControlConfig = {
  background: {
    default: "#faf6f1",
    label: "Background Color",
    type: "color",
  },
  description: {
    default: "A beautifully simple read-it-later app",
    label: "Description",
    type: "text",
  },
  descriptionColor: {
    default: "#8b7e74",
    label: "Description Color",
    type: "color",
  },
  logo: {
    default: "https://www.shiori.sh/logo.png",
    label: "Logo",
    type: "image",
  },
  title: { default: "Shiori", label: "Title", type: "text" },
  titleColor: {
    default: "#1a1a1a",
    label: "Title Color",
    type: "color",
  },
};
