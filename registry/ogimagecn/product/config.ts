import type { ControlConfig } from "@/lib/customizer-config";

export const productConfig: ControlConfig = {
  accent: { default: "#6366f1", label: "Accent Color", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default: "Copy-paste social cards rendered with next/og.",
    label: "Description",
    type: "text",
  },
  image: { default: "", label: "Product Image", type: "image" },
  price: { default: "$49", label: "Price", type: "text" },
  title: {
    default: "The OG image toolkit",
    label: "Title",
    type: "text",
  },
};
