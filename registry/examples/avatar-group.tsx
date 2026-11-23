import { AvatarGroup } from "@/components/og/avatar-group";
import type { ControlConfig } from "@/registry/lib/customizer-config";

export const avatarGroupDemoConfig: ControlConfig = {
  max: { default: "4", label: "Max", options: ["3", "4"], type: "select" },
  names: {
    default: [
      "Ada Lovelace",
      "Grace Hopper",
      "Alan Turing",
      "Katherine Johnson",
      "Margaret Hamilton",
      "Linus Torvalds",
    ],
    label: "Names",
    type: "array",
  },
  size: {
    default: 160,
    label: "Size",
    max: 240,
    min: 32,
    step: 1,
    type: "number",
  },
};

export const AvatarGroupDemo = ({
  max,
  names,
  size,
}: {
  max: string;
  names: string[];
  size: number;
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
    <AvatarGroup
      max={max === "3" ? 3 : 4}
      names={names}
      ringColor="#09090b"
      size={size}
    />
  </div>
);
