import type { ControlConfig } from "@/registry/lib/customizer-config";

export const profileConfig: ControlConfig = {
  avatar: { default: "", label: "Avatar", type: "image" },
  bio: {
    default:
      "Building tools for the open web. Writing about design systems, performance, and shipping fast.",
    label: "Bio",
    type: "textarea",
  },
  name: { default: "Ada Lovelace", label: "Name", type: "text" },
  role: {
    default: "Founder & Engineer",
    label: "Role",
    type: "text",
  },
  variant: {
    default: "dark",
    label: "Variant",
    options: ["dark", "light"],
    type: "select",
  },
  website: { default: "ada.dev", label: "Website", type: "text" },
};
