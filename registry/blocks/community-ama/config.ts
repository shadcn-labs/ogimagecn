import type { ControlConfig } from "@/registry/lib/customizer-config";

export const communityAmaConfig: ControlConfig = {
  avatar: { default: "", label: "Avatar", type: "image" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  date: {
    default: "Thu, Jul 9 · 5:00 PM UTC",
    label: "Date",
    type: "text",
  },
  guest: { default: "Ada Lovelace", label: "Guest", type: "text" },
  label: { default: "Community AMA", label: "Label", type: "text" },
  role: { default: "Maintainer of ogimagecn", label: "Role", type: "text" },
  title: {
    default: "Ask me anything about open source",
    label: "Title",
    type: "text",
  },
};
