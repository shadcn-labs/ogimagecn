export interface ShadcnRegistry10Props {
  brand: string;
  title: string;
  highlight?: string;
  badges?: string[];
  items?: string[];
  logo?: string;
}

export const ShadcnRegistry10 = ({
  brand,
  title,
  highlight = "",
  badges = [],
  items = [],
  logo = "",
}: ShadcnRegistry10Props) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div
      style={{
        backgroundColor: "#111318",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Dot pattern background */}
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      />

      {/* Top: Logo + Brand */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "14px",
          position: "relative",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={44}
            src={logo}
            width={44}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              color: "#000000",
              display: "flex",
              fontSize: "20px",
              fontWeight: 700,
              height: "44px",
              justifyContent: "center",
              width: "44px",
            }}
          >
            U
          </div>
        )}
        <span
          style={{
            color: "#ffffff",
            fontSize: "30px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {brand}
        </span>
      </div>

      {/* Middle: Title + Badges */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: title.length > 40 ? 64 : 76,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "700px",
          }}
        >
          {highlight ? (
            <>
              <span style={{ color: "#2563eb" }}>{parts[0]}</span>
              <span>{highlight}</span>
              {parts[1] ? <span>{parts[1]}</span> : null}
            </>
          ) : (
            <span>{title}</span>
          )}
        </div>

        {badges.length > 0 ? (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "20px",
            }}
          >
            {badges.map((badge) => (
              <div
                key={badge}
                style={{
                  alignItems: "center",
                  color: "rgba(255,255,255,0.6)",
                  display: "flex",
                  fontSize: "22px",
                  fontWeight: 500,
                  gap: "8px",
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Bottom-right: Floating items */}
      {items.length > 0 ? (
        <div
          style={{
            bottom: "60px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            position: "absolute",
            right: "72px",
            width: "480px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item}
              style={{
                backgroundColor: "#1c1c1e",
                border: "1px solid #2c2c2e",
                borderRadius: "8px",
                color: "#a1a1aa",
                display: "flex",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                padding: "8px 16px",
                textTransform: "uppercase",
                transform: `rotate(${((i % 3) - 1) * 3}deg)`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
