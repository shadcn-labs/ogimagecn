import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface LaunchDayProps {
  title: string;
  tagline: string;
  upvotes: string;
  brand: string;
  logo?: string;
}

export const LaunchDay = ({
  title,
  tagline,
  upvotes,
  brand,
  logo = "",
}: LaunchDayProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 0% 100%, rgba(99,102,241,0.22), transparent 55%), radial-gradient(circle at 100% 0%, rgba(244,63,94,0.16), transparent 50%)",
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
      <div
        style={{
          alignItems: "center",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "16px",
          display: "flex",
          gap: "14px",
          padding: "12px 22px",
        }}
      >
        <svg
          fill="none"
          height="28"
          stroke="#f4f4f5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="28"
        >
          <path d="M12 4v16M5 10l7-6 7 6" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          {upvotes}
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
            height: "12px",
            width: "12px",
          }}
        />
        Live
      </Badge>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? 72 : 88,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          maxWidth: "1000px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "34px",
          fontWeight: 500,
          maxWidth: "900px",
        }}
      >
        {tagline}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "12px",
      }}
    >
      <BrandMark background="#6366f1" src={logo}>
        <div
          style={{
            color: "#e0e7ff",
            display: "flex",
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          {brand.charAt(0).toUpperCase()}
        </div>
      </BrandMark>
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
);
