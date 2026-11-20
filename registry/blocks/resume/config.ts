import type { ControlConfig } from "@/registry/lib/customizer-config";

export const resumeConfig: ControlConfig = {
  name: { default: "Ada Rivera", label: "Name", type: "text" },
  role: {
    default: "Senior Frontend Engineer",
    label: "Role",
    type: "text",
  },
  skills: {
    default: ["React", "TypeScript", "Next.js", "Design systems", "Satori"],
    label: "Skills",
    type: "array",
  },
  url: { default: "adarivera.dev", label: "URL", type: "text" },
};
