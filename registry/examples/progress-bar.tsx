import { ProgressBar } from "@/components/og/progress-bar";
import type { ControlConfig } from "@/registry/lib/customizer-config";

export const progressBarDemoConfig: ControlConfig = {
  color: { default: "#a78bfa", label: "Color", type: "color" },
  height: {
    default: 16,
    label: "Height",
    max: 48,
    min: 4,
    step: 2,
    type: "number",
  },
  label: { default: "Funding goal", label: "Label", type: "text" },
  max: { default: 100, label: "Max", min: 1, step: 1, type: "number" },
  value: { default: 72, label: "Value", min: 0, step: 1, type: "number" },
};

export const ProgressBarDemo = ({
  color,
  height,
  label,
  max,
  value,
}: {
  color: string;
  height: number;
  label: string;
  max: number;
  value: number;
}) => (
  <div
    style={{
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      gap: "64px",
      height: "100%",
      justifyContent: "center",
      padding: "120px",
      width: "100%",
    }}
  >
    <ProgressBar
      color={color}
      height={height}
      label={label}
      max={max}
      showPercent
      value={value}
    />
    <ProgressBar color={color} height={height} max={max} value={value} />
  </div>
);
