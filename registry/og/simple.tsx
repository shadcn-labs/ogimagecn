import { Badge } from "./ui/badge";
import { BrandMark } from "./ui/brand-mark";

export interface SimpleProps {
  label: string;
  title: string;
  description: string;
  brand: string;
  logo?: string;
}

export const Simple = ({
  label,
  title,
  description,
  brand,
  logo,
}: SimpleProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "96px",
      width: "100%",
    }}
  >
    <Badge
      background="rgba(250,250,250,0.04)"
      borderColor="rgba(250,250,250,0.12)"
      color="#d4d4d8"
      style={{ fontSize: "24px", fontWeight: 500, padding: "8px 18px" }}
      uppercase
    >
      <div
        style={{
          backgroundColor: "#7c3aed",
          borderRadius: "999px",
          height: "10px",
          width: "10px",
        }}
      />
      {label}
    </Badge>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 40 ? 64 : 76,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        marginTop: "40px",
        maxWidth: "900px",
        textAlign: "center",
      }}
    >
      {title}
    </div>

    <div
      style={{
        color: "#a1a1aa",
        display: "flex",
        fontSize: "32px",
        lineHeight: 1.4,
        marginTop: "28px",
        maxWidth: "760px",
        textAlign: "center",
      }}
    >
      {description}
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "56px",
        color: "#fafafa",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        gap: "12px",
        position: "absolute",
      }}
    >
      <BrandMark background="#7c3aed" size={28} src={logo} />
      {brand}
    </div>
  </div>
);
