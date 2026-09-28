import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface ComingSoonProps {
  brand: string;
  title: string;
  date: string;
  logo?: string;
}

export const ComingSoon = ({ brand, title, date, logo }: ComingSoonProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "72px 96px",
      width: "100%",
    }}
  >
    <BrandMark
      background="#7c3aed"
      radius={24}
      size={96}
      src={logo}
      style={{ color: "#fafafa", fontSize: "48px", fontWeight: 700 }}
    >
      {brand.slice(0, 1).toUpperCase()}
    </BrandMark>

    <div
      style={{
        color: "#a1a1aa",
        display: "flex",
        fontSize: "28px",
        fontWeight: 600,
        marginTop: "24px",
        maxWidth: "960px",
        textAlign: "center",
      }}
    >
      {brand}
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 48 ? 64 : 80,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        marginTop: "32px",
        maxWidth: "960px",
        textAlign: "center",
      }}
    >
      {title}
    </div>

    <Badge
      background="#18181b"
      borderColor="#3f3f46"
      color="#d4d4d8"
      style={{ fontSize: "24px", marginTop: "32px", padding: "12px 24px" }}
    >
      {date}
    </Badge>
  </div>
);
