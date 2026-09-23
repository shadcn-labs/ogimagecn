import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry3Config: ControlConfig = {
  credit: {
    default: "Developed By @alaymanguy",
    label: "Credit",
    type: "text",
  },
  ghost: { default: "LOREM", label: "Ghost Text", type: "text" },
  logo: {
    default: "",
    label: "Logo",
    type: "image",
  },
  title: {
    default:
      "Beautifully designed open source components built with Radix UI and Tailwind CSS for your next project",
    label: "Title",
    type: "text",
  },
};
