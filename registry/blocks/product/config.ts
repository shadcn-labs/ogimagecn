import type { ControlConfig } from "@/registry/lib/customizer-config";

export const productConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default: "Copy-paste social cards rendered with next/og.",
    label: "Description",
    type: "textarea",
  },
  image: { default: "", label: "Product Image", type: "image" },
  logo: { default: "", label: "Logo", type: "image" },
  price: { default: "$49", label: "Price", type: "text" },
  title: {
    default: "The OG image toolkit",
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
