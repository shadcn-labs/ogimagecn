export interface ShadcnRegistry3Props {
  title: string;
  credit?: string;
  ghost?: string;
  logo?: string;
  accent?: string;
}

export const ShadcnRegistry3 = ({
  title,
  credit = "",
  ghost = "",
  logo = "",
  accent = "#3b82f6",
}: ShadcnRegistry3Props) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "hidden",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Ghost Watermark */}
    <div
      style={{
        bottom: "-80px",
        color: "rgba(255,255,255,0.04)",
        display: "flex",
        fontSize: "320px",
        fontWeight: 800,
        left: "40px",
        letterSpacing: "-0.04em",
        lineHeight: 0.85,
        position: "absolute",
        userSelect: "none",
      }}
    >
      {ghost || title.split(" ")[0]}
    </div>

    {/* Top Section - Title + Badge */}
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Title */}
      <div
        style={{
          display: "flex",
          fontSize: title.length > 60 ? 52 : 64,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "800px",
          textWrap: "balance" as const,
        }}
      >
        {title}
      </div>

      {/* Badge/Logo */}
      <div
        style={{
          alignItems: "center",
          border: "3px solid rgba(255,255,255,0.2)",
          borderRadius: "999px",
          display: "flex",
          flexShrink: 0,
          height: "160px",
          justifyContent: "center",
          marginLeft: "40px",
          width: "160px",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={120}
            src={logo}
            width={120}
            style={{ borderRadius: "999px", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              background: `linear-gradient(135deg, ${accent}, ${accent}66)`,
              borderRadius: "999px",
              display: "flex",
              height: "120px",
              justifyContent: "center",
              width: "120px",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
        )}
      </div>
    </div>

    {/* Spacer */}
    <div style={{ flex: 1 }} />

    {/* Credit - Below ghost text */}
    {credit && (
      <div
        style={{
          color: "#52525b",
          fontSize: "24px",
          fontWeight: 400,
          position: "relative",
          zIndex: 1,
        }}
      >
        {credit}
      </div>
    )}
  </div>
);
