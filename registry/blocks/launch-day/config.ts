import type { ControlConfig } from "@/registry/lib/customizer-config";

export const launchDayConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  tagline: {
    default: "The fastest way to ship beautiful, on-brand Open Graph images.",
    label: "Tagline",
    type: "textarea",
  },
  title: {
    default: "Introducing our new product",
    label: "Title",
    type: "text",
  },
  upvotes: {
    default: "1,204",
    label: "Upvotes",
    type: "text",
  },
};
