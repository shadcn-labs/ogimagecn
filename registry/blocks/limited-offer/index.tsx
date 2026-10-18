import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface LimitedOfferProps {
  brand: string;
  title: string;
  description: string;
  discount: string;
  endsIn: string;
  code?: string;
  logo?: string;
}

export const LimitedOffer = ({
  brand,
  title,
  description,
  discount,
  endsIn,
  code,
  logo = "",
}: LimitedOfferProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 100% 0%, rgba(244,63,94,0.18), transparent 50%), radial-gradient(circle at 0% 100%, rgba(234,88,12,0.14), transparent 50%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
        <BrandMark background="#f43f5e" radius={10} size={36} src={logo} />
        <div style={{ display: "flex", fontSize: "28px", fontWeight: 600 }}>
          {brand}
        </div>
      </div>

      <Badge
        background="rgba(244,63,94,0.15)"
        borderColor="rgba(244,63,94,0.4)"
        color="#fb7185"
        uppercase
      >
        <div
          style={{
            backgroundColor: "#f43f5e",
            borderRadius: "999px",
            height: "10px",
            width: "10px",
          }}
        />
        {endsIn}
      </Badge>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Badge
        background="#f43f5e"
        color="#ffffff"
        style={{
          alignSelf: "flex-start",
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "0.02em",
          padding: "12px 28px",
        }}
      >
        {discount}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 30 ? 68 : 80,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          maxWidth: "960px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "30px",
          lineHeight: 1.4,
          maxWidth: "840px",
        }}
      >
        {description}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "16px",
      }}
    >
      {code ? (
        <Badge
          background="rgba(255,255,255,0.06)"
          borderColor="rgba(255,255,255,0.15)"
          color="#e4e4e7"
          style={{
            fontSize: "26px",
            gap: "10px",
            padding: "10px 24px",
          }}
        >
          <div style={{ color: "#71717a", display: "flex" }}>Code:</div>
          <div style={{ color: "#ffffff", display: "flex", fontWeight: 700 }}>
            {code}
          </div>
        </Badge>
      ) : null}
    </div>
  </div>
);
