import type { ControlConfig } from "@/registry/lib/customizer-config";

export const comingSoonConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  date: {
    default: "Launching October 20, 2026",
    label: "Launch date",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Something new is coming.",
    label: "Title",
    type: "text",
  },
};
