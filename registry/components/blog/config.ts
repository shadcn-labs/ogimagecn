import type { ControlConfig } from "@/lib/customizer-config";

export const blogConfig: ControlConfig = {
  author: { default: "Ada Lovelace", label: "Author", type: "text" },
  avatar: { default: "", label: "Avatar", type: "image" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  category: { default: "Engineering", label: "Category", type: "text" },
  excerpt: {
    default:
      "A deep dive into Satori, the next/og runtime, and shipping fast cards.",
    label: "Excerpt",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  meta: {
    default: "Jun 5, 2026 · 6 min read",
    label: "Meta",
    type: "text",
  },
  title: {
    default: "How we generate social images at the edge",
    label: "Title",
    type: "text",
  },
};
