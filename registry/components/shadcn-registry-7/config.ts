import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry7Config: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default: "Composable OG image components built with Satori.",
    label: "Description",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Build your own OG images",
    label: "Title",
    type: "text",
  },
  url: { default: "ogimagecn.vercel.app", label: "URL", type: "text" },
};
