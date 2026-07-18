import type { ControlConfig } from "@/lib/customizer-config";

export const eventConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  date: {
    default: "Jun 5, 2026 · 10:00 AM PT",
    label: "Date",
    type: "text",
  },
  label: { default: "Live Event", label: "Label", type: "text" },
  location: { default: "Online", label: "Location", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Shipping beautiful OG images at scale",
    label: "Title",
    type: "text",
  },
};
