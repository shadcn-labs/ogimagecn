import type { ControlConfig } from "@/lib/customizer-config";

export const statConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  caption: {
    default: "Open Graph images generated with next/og this year.",
    label: "Caption",
    type: "text",
  },
  label: { default: "Images rendered", label: "Label", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  trend: { default: "+24%", label: "Trend", type: "text" },
  value: { default: "10M+", label: "Value", type: "text" },
};
