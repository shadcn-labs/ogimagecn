import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry3Config: ControlConfig = {
  credit: {
    default: "Design And Developed By @alaymanguy",
    label: "Credit",
    type: "text",
  },
  ghost: { default: "SKIPER", label: "Ghost Text", type: "text" },
  logo: {
    default: "",
    label: "Logo",
    type: "image",
  },
  title: {
    default:
      "Brand new uncommon components for your Next.js project. fast-growing freemium (Works with Shadcn CLI 3.0)",
    label: "Title",
    type: "text",
  },
};
