import type { ControlConfig } from "@/lib/customizer-config";

export const gridConfig: ControlConfig = {
  accent: { default: "#22d3ee", label: "Accent Color", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default: "Composable components powered by Satori and the next/og runtime.",
    label: "Description",
    type: "text",
  },
  title: {
    default: "Build your own OG images",
    label: "Title",
    type: "text",
  },
};
