import type { ControlConfig } from "@/lib/customizer-config";
import { GridLines } from "@/registry/og/ui/grid-lines";

export const gridLinesDemoConfig: ControlConfig = {
  color: { default: "#78716c", label: "Color", type: "color" },
  inset: {
    default: "64",
    label: "Inset",
    options: ["32", "48", "64", "96"],
    type: "select",
  },
  variant: {
    default: "dashed",
    label: "Variant",
    options: ["dashed", "solid"],
    type: "select",
  },
};

export const GridLinesDemo = ({
  color,
  inset,
  variant,
}: {
  color: string;
  inset: string;
  variant: "dashed" | "solid";
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#0a0a0a",
      color: "#fafafa",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      position: "relative",
      width: "100%",
    }}
  >
    <GridLines color={color} inset={Number(inset)} variant={variant} />
    <div
      style={{
        display: "flex",
        fontSize: "80px",
        fontWeight: 600,
        letterSpacing: "-0.04em",
      }}
    >
      Frame your canvas
    </div>
  </div>
);
