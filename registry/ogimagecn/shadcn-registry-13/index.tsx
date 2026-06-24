export interface ShadcnRegistry13Props {
  brand: string;
  title: string;
  description?: string;
  techIcons?: string[];
  logo?: string;
}

export const ShadcnRegistry13 = ({
  brand,
  title,
  description = "",
  techIcons = [],
  logo = "",
}: ShadcnRegistry13Props) => (
  <div
    style={{
      backgroundColor: "#fafafa",
      color: "#18181b",
      display: "flex",
      height: "100%",
      width: "100%",
    }}
  >
    {/* Left content */}
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "32px",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Logo + Brand */}
      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        {logo ? (
          <img
            height={64}
            src={logo}
            width={64}
            style={{ borderRadius: "50%", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#18181b",
              borderRadius: "50%",
              color: "#ffffff",
              display: "flex",
              fontSize: "28px",
              fontWeight: 700,
              height: "64px",
              justifyContent: "center",
              width: "64px",
            }}
          />
        )}
        <span
          style={{
            color: "#18181b",
            fontSize: "40px",
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
          display: "flex",
          flexDirection: "column",
          fontSize: title.length > 40 ? 48 : 56,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          maxWidth: "580px",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description ? (
        <div
          style={{
            color: "#71717a",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "540px",
          }}
        >
          {description}
        </div>
      ) : null}

      {/* Tech icons in pill */}
      {techIcons.length > 0 ? (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#ffffff",
            border: "1px solid #e4e4e7",
            borderRadius: "999px",
            display: "flex",
            gap: "20px",
            marginTop: "16px",
            padding: "14px 32px",
            width: "fit-content",
          }}
        >
          {techIcons.map((icon) => (
            <div
              key={icon}
              style={{
                alignItems: "center",
                color: "#52525b",
                display: "flex",
                fontSize: "24px",
                fontWeight: 600,
                justifyContent: "center",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      ) : null}
    </div>

    {/* Right side: Tilted preview grid (using flex + skew instead of grid + 3D) */}
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          position: "absolute",
          right: "-20px",
          top: "40px",
          transform: "skew(-4deg, 2deg)",
          width: "500px",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e4e4e7",
              borderRadius: "12px",
              height: "120px",
              width: "150px",
            }}
          />
        ))}
      </div>
    </div>
  </div>
);
