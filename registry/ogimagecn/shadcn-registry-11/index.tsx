export interface ShadcnRegistry11Props {
  brand: string;
  title: string;
  description?: string;
  techIcons?: string[];
  logo?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const ShadcnRegistry11 = ({
  brand,
  title,
  description = "",
  techIcons = [],
  logo = "",
  gradientFrom = "#f59e0b",
  gradientTo = "#92400e",
}: ShadcnRegistry11Props) => (
  <div
    style={{
      backgroundColor: "#0c0a09",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Warm gradient glow */}
    <div
      style={{
        background: `radial-gradient(ellipse at 30% 80%, ${gradientFrom}22 0%, ${gradientTo}11 40%, transparent 70%)`,
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    />

    {/* Content */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Top: Logo + Brand */}
      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        {logo ? (
          <img
            height={52}
            src={logo}
            width={52}
            style={{ borderRadius: "10px", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "10px",
              color: "#fafafa",
              display: "flex",
              fontSize: "22px",
              fontWeight: 700,
              height: "52px",
              justifyContent: "center",
              width: "52px",
            }}
          >
            L
          </div>
        )}
        <span
          style={{
            color: "#ffffff",
            fontSize: "38px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {brand}
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          color: "rgba(255,255,255,0.7)",
          display: "flex",
          flexDirection: "column",
          fontSize: title.length > 50 ? 52 : 60,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          maxWidth: "700px",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description ? (
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "600px",
          }}
        >
          {description}
        </div>
      ) : null}

      {/* Tech icons row */}
      {techIcons.length > 0 ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "28px",
            marginTop: "16px",
          }}
        >
          {techIcons.map((icon) => (
            <div
              key={icon}
              style={{
                alignItems: "center",
                color: "rgba(255,255,255,0.5)",
                display: "flex",
                fontSize: "28px",
                fontWeight: 600,
                gap: "8px",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);
