import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry10Config: ControlConfig = {
  badges: {
    default: ["$ 100% Free to use", "Open Source"],
    label: "Badges",
    type: "array",
  },
  brand: { default: "uselayouts", label: "Brand", type: "text" },
  highlight: {
    default: "Micro-interactions",
    label: "Highlight",
    type: "text",
  },
  items: {
    default: [
      "Inline Edit",
      "Folder",
      "Discrete Tabs",
      "Status Button",
      "Day Picker",
      "Smooth Drag",
      "List Items",
      "3D Book",
      "Gallery",
      "Morph",
    ],
    label: "Items",
    type: "array",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Micro-interactions library for people who care.",
    label: "Title",
    type: "text",
  },
};
