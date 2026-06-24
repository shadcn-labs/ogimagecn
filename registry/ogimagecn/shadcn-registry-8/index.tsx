export interface ShadcnRegistry8Props {
  brand: string;
  title: string;
  subtitle?: string;
  badges?: string[];
  features?: string[];
  logo?: string;
}

export const ShadcnRegistry8 = ({
  brand,
  title,
  subtitle = "",
  badges = [],
  features = [],
  logo = "",
}: ShadcnRegistry8Props) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Background grid of dimmed preview cards */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        inset: 0,
        opacity: 0.12,
        padding: "24px",
        position: "absolute",
      }}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid #262626",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            height: "130px",
            padding: "10px",
            width: "190px",
          }}
        >
          <div
            style={{
              backgroundColor: "#262626",
              borderRadius: "6px",
              flex: 1,
              width: "100%",
            }}
          />
          <div
            style={{
              backgroundColor: "#262626",
              borderRadius: "4px",
              height: "10px",
              width: "60%",
            }}
          />
          <div
            style={{
              backgroundColor: "#262626",
              borderRadius: "4px",
              height: "8px",
              width: "40%",
            }}
          />
        </div>
      ))}
    </div>

    {/* Content */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Badge pills */}
      {badges.length > 0 ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "12px",
          }}
        >
          {badges.map((badge) => (
            <div
              key={badge}
              style={{
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                color: "#ffffff",
                display: "flex",
                fontSize: "22px",
                fontWeight: 500,
                gap: "8px",
                padding: "10px 24px",
              }}
            >
              <span style={{ color: "#22c55e" }}>✓</span>
              {badge}
            </div>
          ))}
        </div>
      ) : null}

      {/* Title: two lines, second italic */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: title.length > 30 ? 76 : 88,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          textAlign: "center",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <span>AI</span>
          <span
            style={{
              backgroundColor: "#84cc16",
              borderRadius: "4px",
              display: "inline-block",
              height: "28px",
              transform: "rotate(45deg)",
              width: "28px",
            }}
          />
          <span>Native Components,</span>
        </div>
        {subtitle ? (
          <span
            style={{
              color: "#d4d4d8",
              fontSize: title.length > 30 ? 68 : 80,
              fontStyle: "italic",
              letterSpacing: "-0.03em",
            }}
          >
            {subtitle}
          </span>
        ) : null}
      </div>

      {/* Feature pills */}
      {features.length > 0 ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          {features.map((feature, i) => (
            <div
              key={feature}
              style={{
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                color: "rgba(255,255,255,0.7)",
                display: "flex",
                fontSize: "20px",
                fontWeight: 500,
                gap: "8px",
                padding: "10px 24px",
              }}
            >
              <span style={{ fontSize: "16px", opacity: 0.6 }}>
                {["⌘", "📦", "☰"][i] || "☰"}
              </span>
              {feature}
            </div>
          ))}
        </div>
      ) : null}

      {/* Brand + Logo at bottom */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "10px",
          marginTop: "auto",
          paddingBottom: "40px",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={32}
            src={logo}
            width={32}
            style={{
              borderRadius: "6px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#84cc16",
              borderRadius: "50%",
              color: "#000000",
              display: "flex",
              fontSize: "16px",
              fontWeight: 700,
              height: "32px",
              justifyContent: "center",
              width: "32px",
            }}
          />
        )}
        <span
          style={{
            color: "#a1a1aa",
            fontSize: "26px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {brand}
        </span>
      </div>
    </div>
  </div>
);
