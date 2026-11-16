import type { ControlConfig } from "@/registry/lib/customizer-config";

export const recipeConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default:
      "Blistered tomatoes, garlic, and basil tossed with bucatini in one pan.",
    label: "Description",
    type: "textarea",
  },
  duration: { default: "25 min", label: "Duration", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  servings: { default: "Serves 4", label: "Servings", type: "text" },
  title: {
    default: "One-pot tomato basil pasta",
    label: "Title",
    type: "text",
  },
};
