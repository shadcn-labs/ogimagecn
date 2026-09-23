import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry5Config: ControlConfig = {
  description: {
    default:
      "Built with React, Typescript, shadcn/ui, Tailwind CSS, and Motion.",
    label: "Description",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "ogimagecn", label: "Name", type: "text" },
  title: {
    default: "Modern Next.js Templates",
    label: "Title",
    type: "text",
  },
};
