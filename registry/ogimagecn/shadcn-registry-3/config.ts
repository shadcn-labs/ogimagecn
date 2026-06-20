import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry3Config: ControlConfig = {
  accent: { default: "#3b82f6", label: "Accent", type: "color" },
  credit: {
    default: "Design And Devloped By @Gxuri",
    label: "Credit",
    type: "text",
  },
  ghost: { default: "SKIPER", label: "Ghost Text", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default:
      "Brand new uncommon components for your Next.js project. fast-growing freemium (Works with Shadcn CLI 3.0)",
    label: "Title",
    type: "text",
  },
};
