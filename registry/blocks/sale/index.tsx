import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface SaleProps {
  brand: string;
  title: string;
  discount: string;
  event: string;
  dates: string;
  coupon: string;
  logo?: string;
}

export const Sale = ({
  brand,
  title,
  discount,
  event,
  dates,
  coupon,
  logo,
}: SaleProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "72px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
      <BrandMark background="#6366f1" radius={10} size={32} src={logo} />
      <div style={{ display: "flex", fontSize: "28px", fontWeight: 600 }}>
        {brand}
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          color: "#a5b4fc",
          display: "flex",
          fontSize: "180px",
          fontWeight: 800,
          letterSpacing: "-0.06em",
          lineHeight: 1,
        }}
      >
        {discount}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "52px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginTop: "12px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "28px",
          lineHeight: 1.4,
          marginTop: "12px",
        }}
      >
        {event}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "24px",
        justifyContent: "space-between",
      }}
    >
      <Badge background="#18181b" borderColor="#3f3f46" color="#fafafa">
        {dates}
      </Badge>
      <Badge
        background="#6366f1"
        color="#ffffff"
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: "0.08em",
          padding: "12px 28px",
        }}
      >
        {coupon}
      </Badge>
    </div>
  </div>
);
