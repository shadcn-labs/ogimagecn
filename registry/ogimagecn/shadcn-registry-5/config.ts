import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry5Config: ControlConfig = {
  accent: { default: "#0ea5e9", label: "Accent", type: "color" },
  description: {
    default:
      "Built with React, Typescript, shadcn/ui, Tailwind CSS, and Motion.",
    label: "Description",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "Eldora UI", label: "Name", type: "text" },
  title: {
    default: "Modern Next.js Templates",
    label: "Title",
    type: "text",
  },
};
