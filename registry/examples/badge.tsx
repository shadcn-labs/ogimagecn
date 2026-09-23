import type { ControlConfig } from "@/lib/customizer-config";
import { Badge } from "@/registry/og/ui/badge";

export const badgeDemoConfig: ControlConfig = {
  color: { default: "#34d399", label: "Color", type: "color" },
  label: { default: "Changelog", label: "Label", type: "text" },
};

export const BadgeDemo = ({
  color,
  label,
}: {
  color: string;
  label: string;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <Badge
      background={`${color}26`}
      color={color}
      style={{ fontSize: "40px", padding: "14px 32px" }}
      uppercase
    >
      {label}
    </Badge>
    <Badge
      background="rgba(250,250,250,0.04)"
      borderColor="rgba(250,250,250,0.12)"
      color="#d4d4d8"
      style={{ fontSize: "40px", padding: "14px 32px" }}
    >
      <div
        style={{
          backgroundColor: color,
          borderRadius: "999px",
          height: "14px",
          width: "14px",
        }}
      />
      {label}
    </Badge>
    <Badge
      background={color}
      color="#09090b"
      style={{ fontSize: "40px", fontWeight: 700, padding: "14px 32px" }}
    >
      {label}
    </Badge>
  </div>
);
