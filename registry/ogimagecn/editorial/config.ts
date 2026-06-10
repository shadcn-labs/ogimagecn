import type { ControlConfig } from "@/lib/customizer-config";

export const editorialConfig: ControlConfig = {
  accent: { default: "#e11d48", label: "Accent Color", type: "color" },
  author: { default: "ogimagecn", label: "Author", type: "text" },
  ghost: { default: "", label: "Ghost Text", type: "text" },
  kicker: { default: "Essay", label: "Kicker", type: "text" },
  meta: { default: "Issue 04", label: "Meta", type: "text" },
  title: {
    default: "Designing at the edge of the canvas",
    label: "Title",
    type: "text",
  },
};
