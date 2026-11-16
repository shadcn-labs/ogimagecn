import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface LivestreamProps {
  brand: string;
  title: string;
  tagline: string;
  platforms: string[];
  logo?: string;
}

export const Livestream = ({
  brand,
  title,
  tagline,
  platforms,
  logo,
}: LivestreamProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 88% 52%, rgba(244,63,94,0.22), transparent 42%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "72px",
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
        background="#e11d48"
        color="#ffffff"
        style={{ fontSize: "25px", fontWeight: 800, letterSpacing: "0.08em" }}
        uppercase
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "999px",
            height: "11px",
            width: "11px",
          }}
        />
        Live
      </Badge>

      <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
        <BrandMark background="#e11d48" size={36} src={logo} />
        <div style={{ display: "flex", fontSize: "27px", fontWeight: 700 }}>
          {brand}
        </div>
      </div>
    </div>

    <div style={{ alignItems: "center", display: "flex", gap: "48px" }}>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 36 ? 64 : 76,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.04,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: "29px",
            lineHeight: 1.35,
            marginTop: "25px",
          }}
        >
          {tagline}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          backgroundColor: "#18181b",
          border: "2px solid #f43f5e",
          borderRadius: "36px",
          display: "flex",
          flexShrink: 0,
          height: "230px",
          justifyContent: "center",
          width: "230px",
        }}
      >
        <svg fill="none" height="100" viewBox="0 0 100 100" width="100">
          <path d="M27 15L82 50L27 85V15Z" fill="#fb7185" />
        </svg>
      </div>
    </div>

    <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
      <div
        style={{
          color: "#71717a",
          display: "flex",
          fontSize: "23px",
          fontWeight: 600,
          marginRight: "8px",
        }}
      >
        Watch on
      </div>
      {platforms.map((platform) => (
        <Badge
          background="#27272a"
          color="#fafafa"
          key={platform}
          style={{ fontSize: "23px", padding: "10px 20px" }}
        >
          {platform}
        </Badge>
      ))}
    </div>
  </div>
);
