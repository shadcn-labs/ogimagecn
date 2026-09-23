import type { ControlConfig } from "@/lib/customizer-config";
import { BrandMark } from "@/registry/og/ui/brand-mark";

export const brandMarkDemoConfig: ControlConfig = {
  background: { default: "#7c3aed", label: "Background", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
};

export const BrandMarkDemo = ({
  background,
  brand,
  logo,
}: {
  background: string;
  brand: string;
  logo: string;
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
    <BrandMark
      background={background}
      radius={36}
      size={180}
      src={logo}
      style={{ color: "#ffffff", fontSize: "88px", fontWeight: 800 }}
    >
      {brand.charAt(0).toUpperCase()}
    </BrandMark>
    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      <BrandMark background={background} size={56} radius={12} src={logo} />
      <div style={{ display: "flex", fontSize: "48px", fontWeight: 700 }}>
        {brand}
      </div>
    </div>
  </div>
);
