import type { ControlConfig } from "@/lib/customizer-config";

export const gridConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default: "Composable components powered by Satori and the next/og runtime.",
    label: "Description",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Build your own OG images",
    label: "Title",
    type: "text",
  },
};
