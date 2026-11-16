import type { ControlConfig } from "@/registry/lib/customizer-config";

export const livestreamConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  platforms: {
    default: ["YouTube", "Twitch"],
    label: "Platforms",
    type: "array",
  },
  tagline: {
    default: "Join us for a live session on building better social images.",
    label: "Tagline",
    type: "textarea",
  },
  title: {
    default: "Building in public, live",
    label: "Title",
    type: "text",
  },
};
