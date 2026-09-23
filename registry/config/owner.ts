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
  logo: {
    default:
      "https://cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69df6b6abf59b8c2317f7635_favicon-dark.png",
    label: "Logo",
    type: "image",
  },
  title: {
    default: "We make online growth easy for restaurants.",
    label: "Title",
    type: "text",
  },
};
