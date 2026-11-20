import { TerminalFrame } from "@/components/og/terminal-frame";
import type { ControlConfig } from "@/registry/lib/customizer-config";

export const terminalFrameDemoConfig: ControlConfig = {
  lines: {
    default: [
      "$ npx shadcn@latest add @ogimagecn/blog",
      "Checking registry.",
      "Created components/og/blog.tsx",
    ],
    label: "Lines",
    type: "array",
  },
  prompt: { default: "$", label: "Prompt", type: "text" },
  title: { default: "~/my-app", label: "Title", type: "text" },
};

export const TerminalFrameDemo = ({
  lines,
  prompt,
  title,
}: {
  lines: string[];
  prompt: string;
  title: string;
}) => (
  <div
    style={{
      backgroundColor: "#18181b",
      display: "flex",
      height: "100%",
      padding: "80px",
      width: "100%",
    }}
  >
    <TerminalFrame prompt={prompt} title={title}>
      {lines.map((line) => (
        <div key={line} style={{ display: "flex" }}>
          {line}
        </div>
      ))}
    </TerminalFrame>
  </div>
);
