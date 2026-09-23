import type { ControlConfig } from "@/lib/customizer-config";

export const editorialConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  ghost: { default: "", label: "Ghost Text", type: "text" },
  kicker: { default: "Essay", label: "Kicker", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  meta: { default: "Issue 04", label: "Meta", type: "text" },
  title: {
    default: "Designing at the edge of the canvas",
    label: "Title",
    type: "text",
  },
};
