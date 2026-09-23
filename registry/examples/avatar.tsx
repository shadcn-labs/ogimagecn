import type { ControlConfig } from "@/lib/customizer-config";
import { Avatar } from "@/registry/og/ui/avatar";

export const avatarDemoConfig: ControlConfig = {
  background: { default: "#7c3aed", label: "Background", type: "color" },
  name: { default: "Ada Lovelace", label: "Name", type: "text" },
  src: { default: "", label: "Image", type: "image" },
};

export const AvatarDemo = ({
  background,
  name,
  src,
}: {
  background: string;
  name: string;
  src: string;
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      gap: "48px",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    }}
  >
    {[240, 160, 96].map((size) => (
      <Avatar
        background={background}
        key={size}
        name={name}
        size={size}
        src={src}
      />
    ))}
  </div>
);
