import type { ControlConfig } from "@/registry/lib/customizer-config";

export const hackathonConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  dates: { default: "Mar 14 – 16, 2026", label: "Dates", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  prize: { default: "$50,000", label: "Prize", type: "text" },
  prizeLabel: { default: "in prizes", label: "Prize label", type: "text" },
  title: {
    default: "Build the future of open source in 48 hours",
    label: "Title",
    type: "text",
  },
};
