import { StatRow } from "@/components/og/stat-row";
import type { ControlConfig } from "@/registry/lib/customizer-config";

const stats = [
  { label: "Stars", value: "12.4k" },
  { label: "Forks", value: "1.8k" },
  { label: "Contributors", value: "96" },
  { label: "Open issues", value: "38" },
  { label: "Releases", value: "214" },
  { label: "Downloads", value: "1.2M" },
];

export const statRowDemoConfig: ControlConfig = {
  columns: {
    default: 3,
    label: "Columns",
    max: 6,
    min: 1,
    step: 1,
    type: "number",
  },
  divider: {
    default: "On",
    label: "Divider",
    options: ["On", "Off"],
    type: "select",
  },
};

export const StatRowDemo = ({
  columns,
  divider,
}: {
  columns: number;
  divider: string;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      width: "100%",
    }}
  >
    <StatRow columns={columns} divider={divider === "On"} stats={stats} />
  </div>
);
