import { Waveform } from "@/components/og/waveform";
import type { ControlConfig } from "@/registry/lib/customizer-config";

const amplitudes = [
  0.16, 0.29, 0.2, 0.42, 0.35, 0.56, 0.71, 0.49, 0.38, 0.64, 0.88, 0.76, 0.55,
  0.31, 0.47, 0.69, 0.94, 0.79, 0.58, 0.36, 0.22, 0.44, 0.63, 0.82, 0.97, 0.73,
  0.52, 0.34, 0.59, 0.81, 0.67, 0.45, 0.28, 0.41, 0.62, 0.85, 0.7, 0.5, 0.32,
  0.18,
];

export const waveformDemoConfig: ControlConfig = {
  color: { default: "#a78bfa", label: "Color", type: "color" },
  gap: {
    default: 5,
    label: "Bar gap",
    max: 20,
    min: 0,
    step: 1,
    type: "number",
  },
  height: {
    default: 180,
    label: "Height",
    max: 320,
    min: 24,
    step: 1,
    type: "number",
  },
};

export const WaveformDemo = ({
  color,
  gap,
  height,
}: {
  color: string;
  gap: number;
  height: number;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      width: "100%",
    }}
  >
    <Waveform amplitudes={amplitudes} color={color} gap={gap} height={height} />
  </div>
);
