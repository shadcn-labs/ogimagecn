import type { ControlConfig } from "@/lib/customizer-config";

export const ditherProfileConfig: ControlConfig = {
  accent: { default: "#a885f3", label: "Accent", type: "color" },
  description: {
    default: "Notes on software, systems, and the people who make them.",
    label: "Description",
    type: "text",
  },
  eyebrow: { default: "Author profile", label: "Eyebrow", type: "text" },
  handle: { default: "@ada", label: "Handle", type: "text" },
  name: { default: "Ada Lovelace", label: "Name", type: "text" },
  title: {
    default: "Designing systems that feel human.",
    label: "Title",
    type: "text",
  },
  website: { default: "ada.dev", label: "Website", type: "text" },
};
