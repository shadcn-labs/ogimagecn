import { Sparkline } from "@/components/og/sparkline";
import type { ControlConfig } from "@/registry/lib/customizer-config";

export const sparklineDemoConfig: ControlConfig = {
  color: { default: "#22c55e", label: "Color", type: "color" },
  height: {
    default: 240,
    label: "Height",
    max: 400,
    min: 24,
    step: 1,
    type: "number",
  },
  points: {
    default: [
      "12",
      "18",
      "15",
      "24",
      "21",
      "30",
      "27",
      "38",
      "34",
      "46",
      "52",
      "49",
    ],
    label: "Points",
    type: "array",
  },
  style: {
    default: "area",
    label: "Style",
    options: ["area", "line"],
    type: "select",
  },
};

export const SparklineDemo = ({
  color,
  height,
  points,
  style,
}: {
  color: string;
  height: number;
  points: string[];
  style: string;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <Sparkline
      area={style === "area"}
      color={color}
      height={height}
      points={points.map(Number)}
      strokeWidth={6}
      width={960}
    />
  </div>
);
