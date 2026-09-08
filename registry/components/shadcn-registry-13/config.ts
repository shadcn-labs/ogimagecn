import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry13Config: ControlConfig = {
  brand: { default: "shadcn/studio", label: "Brand", type: "text" },
  description: {
    default:
      "Accelerate your project development with ready-to-use, and fully customizable shadcn Components, Blocks, UI Kits, Boilerplates, Templates and Themes with AI Tools ✨",
    label: "Description",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  techIcons: {
    default: ["T", "S", "W", "N", "M", "R"],
    label: "Tech Icons",
    type: "array",
  },
  title: {
    default: "Build Futuristic UIs with shadcn/ui at Warp Speed ⚡",
    label: "Title",
    type: "text",
  },
};
