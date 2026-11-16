import type { ControlConfig } from "@/registry/lib/customizer-config";

export const photoConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  image: { default: "", label: "Background Image", type: "image" },
  label: { default: "Travel", label: "Label", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Chasing light across the northern coast",
    label: "Title",
    type: "text",
  },
  variant: {
    default: "dark",
    label: "Variant",
    options: ["dark", "light"],
    type: "select",
  },
};
