import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface VideoSeriesProps {
  title: string;
  episodes: string[];
  episodeCount: string;
  brand: string;
  logo?: string;
}

export const VideoSeries = ({
  title,
  episodes,
  episodeCount,
  brand,
  logo = "",
}: VideoSeriesProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgba(99,102,241,0.20), transparent 50%)",
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    />
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 100%, rgba(16,185,129,0.14), transparent 50%)",
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    />
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "42px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>

      <Badge
        background="rgba(99,102,241,0.15)"
        borderColor="rgba(99,102,241,0.4)"
        color="#a5b4fc"
        uppercase
      >
        {episodeCount}
      </Badge>
    </div>

    <div
      style={{
        display: "flex",
        gap: "28px",
        position: "relative",
      }}
    >
      {episodes.map((episode, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "20px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "20px",
            padding: "32px",
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
                backgroundColor: "rgba(99,102,241,0.20)",
                borderRadius: "999px",
                display: "flex",
                height: "44px",
                justifyContent: "center",
                width: "44px",
              }}
            >
              <svg fill="#c7d2fe" height="20" viewBox="0 0 24 24" width="20">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div
              style={{
                color: "#a1a1aa",
                display: "flex",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          <div
            style={{
              color: "#e4e4e7",
              display: "flex",
              fontSize: "26px",
              fontWeight: 600,
              lineHeight: 1.35,
            }}
          >
            {episode}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "12px",
        position: "relative",
      }}
    >
      <BrandMark background="#6366f1" src={logo} />
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
