import type { ControlConfig } from "@/lib/customizer-config";

export const ditherReleaseConfig: ControlConfig = {
  accent: { default: "#9f7aea", label: "From", type: "color" },
  accentTo: { default: "#ec8fbd", label: "To", type: "color" },
  brand: { default: "Acme", label: "Brand", type: "text" },
  buttonLabel: {
    default: "Read the changelog →",
    label: "Button",
    type: "text",
  },
  description: {
    default:
      "Faster workflows, clearer feedback, and a calmer path from idea to production.",
    label: "Description",
    type: "text",
  },
  eyebrow: { default: "Product update", label: "Eyebrow", type: "text" },
  title: {
    default: "A faster way to ship.",
    label: "Title",
    type: "text",
  },
  variant: {
    default: "gradient",
    label: "Button style",
    options: ["gradient", "dotted", "hatched", "solid"],
    type: "select",
  },
};
