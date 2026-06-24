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
      width: "100%",
    }}
  >
    {/* Background grid of blurred cards */}
    <div
      style={{
        display: "flex",
        filter: "blur(2px)",
        flexWrap: "wrap",
        gap: "16px",
        inset: 0,
        opacity: 0.08,
        padding: "40px",
        position: "absolute",
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            height: "120px",
            width: "180px",
          }}
        />
      ))}
    </div>

    {/* Content */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        height: "100%",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Badge pills */}
      {badges.length > 0 ? (
        <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
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

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: title.length > 40 ? 80 : 96,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <span>{title.split("◆")[0]}</span>
          <span
            style={{
              backgroundColor: "#eab308",
              borderRadius: "4px",
              display: "inline-block",
              height: "24px",
              transform: "rotate(45deg)",
              width: "24px",
            }}
          />
          {title.split("◆")[1] || ""}
        </div>
        {subtitle ? (
          <span
            style={{
              color: "#d4d4d8",
              fontSize: title.length > 40 ? 72 : 88,
              fontStyle: "italic",
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
            marginTop: "16px",
          }}
        >
          {features.map((feature) => (
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
              {feature}
            </div>
          ))}
        </div>
      ) : null}

      {/* Brand + Logo */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "10px",
          marginTop: "40px",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={36}
            src={logo}
            width={36}
            style={{ borderRadius: "6px", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              backgroundColor: "#eab308",
              borderRadius: "6px",
              height: "36px",
              transform: "rotate(45deg)",
              width: "36px",
            }}
          />
        )}
        <span
          style={{
            color: "#a1a1aa",
            fontSize: "28px",
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
