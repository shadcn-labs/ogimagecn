import type { ControlConfig } from "@/lib/customizer-config";

export const ownerConfig: ControlConfig = {
  brand: { default: "Owner", label: "Brand", type: "text" },
  eyebrow: { default: "Meet Owner.", label: "Eyebrow", type: "text" },
  images: {
    default: [
      "https://picsum.photos/id/1005/400/400",
      "https://picsum.photos/id/1012/400/400",
      "https://picsum.photos/id/1025/400/400",
    ],
    label: "Images",
    type: "array",
  },
  title: {
    default: "We make online growth easy for restaurants.",
    label: "Title",
    type: "text",
  },
};
