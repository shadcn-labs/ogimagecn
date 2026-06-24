export interface ShadcnRegistry12Props {
  brand: string;
  title: string;
  description?: string;
  techIcons?: string[];
  logo?: string;
  logoColor?: string;
}

export const ShadcnRegistry12 = ({
  brand,
  title,
  description = "",
  techIcons = [],
  logo = "",
  logoColor = "#eab308",
}: ShadcnRegistry12Props) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      color: "#18181b",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    }}
  >
    {/* Content */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        padding: "60px 80px 40px",
      }}
    >
      {/* Logo + Brand */}
      <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
        {logo ? (
          <img
            alt=""
            height={56}
            src={logo}
            width={56}
            style={{ borderRadius: "50%", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: logoColor,
              borderRadius: "50%",
              color: "#ffffff",
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              height: "56px",
              justifyContent: "center",
              width: "56px",
            }}
          />
        )}
        <span
          style={{
            color: "#18181b",
            fontSize: "40px",
            fontWeight: 700,
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
          fontSize: title.length > 50 ? 52 : 60,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description ? (
        <div
          style={{
            color: "#71717a",
            fontSize: "26px",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "700px",
            textAlign: "center",
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
            gap: "24px",
            marginTop: "8px",
          }}
        >
          {techIcons.map((icon) => (
            <div
              key={icon}
              style={{
                alignItems: "center",
                backgroundColor: "#f4f4f5",
                borderRadius: "50%",
                color: "#52525b",
                display: "flex",
                fontSize: "20px",
                fontWeight: 600,
                height: "48px",
                justifyContent: "center",
                width: "48px",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      ) : null}
    </div>

    {/* Bottom: Component preview grid */}
    <div
      style={{
        borderTop: "1px solid #e4e4e7",
        display: "flex",
        flex: 1,
        gap: "1px",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: i % 2 === 0 ? "#fafafa" : "#f4f4f5",
            flex: 1,
          }}
        />
      ))}
    </div>
  </div>
);
