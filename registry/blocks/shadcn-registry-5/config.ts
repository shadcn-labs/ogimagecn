import type { ControlConfig } from "@/registry/lib/customizer-config";

export const shadcnRegistry5Config: ControlConfig = {
  description: {
    default:
      "Built with React, Typescript, shadcn/ui, Tailwind CSS, and Motion.",
    label: "Description",
    type: "textarea",
  },
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "ogimagecn", label: "Name", type: "text" },
  title: {
    default: "Modern Next.js Templates",
    label: "Title",
    type: "text",
  },
  variant: {
    default: "light",
    label: "Variant",
    options: ["light", "dark"],
    type: "select",
  },
};
