import { Checklist } from "@/components/og/checklist";
import type { ControlConfig } from "@/registry/lib/customizer-config";

export const checklistDemoConfig: ControlConfig = {
  color: { default: "#34d399", label: "Color", type: "color" },
  gap: {
    default: 28,
    label: "Gap",
    max: 64,
    min: 0,
    step: 1,
    type: "number",
  },
  items: {
    default: [
      "Unlimited OG images",
      "Custom fonts and colors",
      "One-line shadcn install",
    ],
    label: "Items",
    type: "array",
  },
  size: {
    default: 48,
    label: "Size",
    max: 72,
    min: 16,
    step: 1,
    type: "number",
  },
};

export const ChecklistDemo = ({
  color,
  gap,
  items,
  size,
}: {
  color: string;
  gap: number;
  items: string[];
  size: number;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      width: "100%",
    }}
  >
    <Checklist color={color} gap={gap} items={items} size={size} />
  </div>
);
