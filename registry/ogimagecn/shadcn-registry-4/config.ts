import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry4Config: ControlConfig = {
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "ogimagecn", label: "Name", type: "text" },
  title: {
    default:
      "Discover animated primitives, components, and icons for building expressive, modern UIs",
    label: "Title",
    type: "text",
  },
  url: { default: "ogimagecn.com", label: "URL", type: "text" },
};
