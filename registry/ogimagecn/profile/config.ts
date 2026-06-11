import type { ControlConfig } from "@/lib/customizer-config";

export const profileConfig: ControlConfig = {
  avatar: { default: "", label: "Avatar", type: "image" },
  bio: {
    default:
      "Building tools for the open web. Writing about design systems, performance, and shipping fast.",
    label: "Bio",
    type: "text",
  },
  name: { default: "Ada Lovelace", label: "Name", type: "text" },
  role: {
    default: "Founder & Engineer",
    label: "Role",
    type: "text",
  },
  website: { default: "ada.dev", label: "Website", type: "text" },
};
