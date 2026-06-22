import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry2Config: ControlConfig = {
  accent: { default: "#4f46e5", label: "Accent", type: "color" },
  category: { default: "Marketing", label: "Category", type: "text" },
  items: {
    default: ["Reusable", "Scalable", "Composable"],
    label: "Tags",
    type: "array",
  },
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "ogimagecn", label: "Name", type: "text" },
  title: {
    default: "Animated components crafted for smooth interaction",
    label: "Title",
    type: "text",
  },
};
