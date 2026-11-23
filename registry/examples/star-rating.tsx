import { StarRating } from "@/components/og/star-rating";
import type { ControlConfig } from "@/registry/lib/customizer-config";

export const starRatingDemoConfig: ControlConfig = {
  color: { default: "#facc15", label: "Color", type: "color" },
  score: { default: "4.5", label: "Score", type: "text" },
  size: {
    default: 64,
    label: "Size",
    max: 120,
    min: 16,
    step: 4,
    type: "number",
  },
  value: {
    default: 4.5,
    label: "Value",
    max: 5,
    min: 0,
    step: 0.5,
    type: "number",
  },
};

export const StarRatingDemo = ({
  color,
  score,
  size,
  value,
}: {
  color: string;
  score: string;
  size: number;
  value: number;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      gap: "56px",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <StarRating color={color} score={score} size={size} value={value} />
    <StarRating color={color} size={size} value={value} />
  </div>
);
