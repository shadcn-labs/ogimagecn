import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface HackathonProps {
  dates: string;
  title: string;
  prize: string;
  prizeLabel: string;
  brand: string;
  logo?: string;
}

export const Hackathon = ({
  dates,
  title,
  prize,
  prizeLabel,
  brand,
  logo = "",
}: HackathonProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 0% 100%, rgba(34,197,94,0.22), transparent 55%)",
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
      <Badge
        background="rgba(34,197,94,0.12)"
        borderColor="rgba(34,197,94,0.4)"
        color="#4ade80"
      >
        <svg
          fill="none"
          height="26"
          stroke="#4ade80"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="26"
        >
          <rect height="18" rx="2" width="18" x="3" y="4" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {dates}
      </Badge>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "12px",
        }}
      >
        <BrandMark background="#22c55e" src={logo} />
        <div
          style={{
            color: "#a1a1aa",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {brand}
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 32 ? 76 : 92,
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        maxWidth: "1000px",
      }}
    >
      {title}
    </div>

    <div
      style={{
        alignItems: "flex-end",
        display: "flex",
        gap: "20px",
      }}
    >
      <div
        style={{
          color: "#4ade80",
          display: "flex",
          fontSize: "72px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {prize}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "30px",
          fontWeight: 600,
          paddingBottom: "8px",
        }}
      >
        {prizeLabel}
      </div>
    </div>
  </div>
);
