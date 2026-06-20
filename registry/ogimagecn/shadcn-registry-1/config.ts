import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry1Config: ControlConfig = {
  description: {
    default:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    label: "Description",
    type: "text",
  },
  items: {
    default: ["159+ components", "open source", "accessible"],
    label: "Tags",
    type: "array",
  },
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "shadcn/ui", label: "Name", type: "text" },
  url: { default: "ui.shadcn.com", label: "URL", type: "text" },
};
