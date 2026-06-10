import type { ControlConfig } from "@/lib/customizer-config";

export const photoConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  image: { default: "", label: "Background Image", type: "image" },
  label: { default: "Travel", label: "Label", type: "text" },
  title: {
    default: "Chasing light across the northern coast",
    label: "Title",
    type: "text",
  },
};
