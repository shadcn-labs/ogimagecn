import type { ControlConfig } from "@/registry/lib/customizer-config";

export const videoSeriesConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  episodeCount: {
    default: "12 episodes",
    label: "Episode count",
    type: "text",
  },
  episodes: {
    default: [
      "Getting started with Satori",
      "Composing a card from registry components",
      "Shipping to the edge",
    ],
    label: "Episodes",
    type: "array",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Building Open Graph images",
    label: "Title",
    type: "text",
  },
};
