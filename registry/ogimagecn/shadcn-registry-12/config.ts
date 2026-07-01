import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry12Config: ControlConfig = {
  brand: { default: "shadcnspace.", label: "Brand", type: "text" },
  description: {
    default:
      "Speed up your build process with production-ready, fully customizable Shadcn UI components, blocks, kits and templates.",
    label: "Description",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  logoColor: {
    default: "#eab308",
    label: "Logo Color",
    type: "color",
  },
  techIcons: {
    default: ["S", "N", "T", "R", "P", "B"],
    label: "Tech Icons",
    type: "array",
  },
  title: {
    default: "Extraordinary Shadcn UI blocks, components, and templates",
    label: "Title",
    type: "text",
  },
};
