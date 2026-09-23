import { Badge } from "./ui/badge";
import { BrandMark } from "./ui/brand-mark";

export interface StatProps {
  label: string;
  value: string;
  caption: string;
  trend?: string;
  brand: string;
  logo?: string;
}

export const Stat = ({
  label,
  value,
  caption,
  trend,
  brand,
  logo,
}: StatProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 50% 120%, rgba(34,197,94,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "96px",
      width: "100%",
    }}
  >
    <div
      style={{
        color: "#a1a1aa",
        display: "flex",
        fontSize: "30px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>

    <div
      style={{
        alignItems: "flex-end",
        display: "flex",
        gap: "28px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "200px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      {trend ? (
        <Badge
          background="rgba(34,197,94,0.15)"
          color="#22c55e"
          style={{
            fontSize: "34px",
            fontWeight: 700,
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          <svg
            fill="none"
            height="26"
            stroke="#22c55e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="26"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
          {trend}
        </Badge>
      ) : null}
    </div>

    <div
      style={{
        color: "#d4d4d8",
        display: "flex",
        fontSize: "34px",
        lineHeight: 1.4,
        marginTop: "28px",
        maxWidth: "820px",
      }}
    >
      {caption}
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "56px",
        color: "#71717a",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        gap: "12px",
        position: "absolute",
      }}
    >
      <BrandMark background="#22c55e" size={24} src={logo} />
      {brand}
    </div>
  </div>
);
