import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry11Config: ControlConfig = {
  brand: { default: "Launch UI", label: "Brand", type: "text" },
  description: {
    default: "",
    label: "Description",
    type: "text",
  },
  gradientFrom: {
    default: "#f59e0b",
    label: "Gradient Start",
    type: "color",
  },
  gradientTo: {
    default: "#92400e",
    label: "Gradient End",
    type: "color",
  },
  logo: { default: "", label: "Logo", type: "image" },
  techIcons: {
    default: ["React", "Shadcn", "Tailwind", "Figma", "TypeScript"],
    label: "Tech Icons",
    type: "array",
  },
  title: {
    default:
      "Landing page components built with React, Shadcn/ui and Tailwind that you can copy/paste into your project.",
    label: "Title",
    type: "text",
  },
};
