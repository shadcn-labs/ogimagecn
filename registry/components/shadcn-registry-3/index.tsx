export interface ShadcnRegistry3Props {
  title: string;
  credit?: string;
  ghost?: string;
  logo?: string;
}

export const ShadcnRegistry3 = ({
  title,
  credit = "",
  ghost = "",
  logo = "",
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

    {/* Title + Badge */}
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: title.length > 60 ? 52 : 64,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "800px",
          textWrap: "balance",
        }}
      >
        {title}
        {credit ? (
          <div
            style={{
              color: "#52525b",
              fontSize: "24px",
              fontWeight: 400,
              marginTop: "24px",
            }}
          >
            {credit}
          </div>
        ) : null}
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
          overflow: "hidden",
          width: "160px",
        }}
      >
        {logo ? (
          <img
            height={140}
            src={logo}
            width={140}
            style={{ borderRadius: "999px", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              background: "linear-gradient(135deg, #60EFFF, #0061FF)",
              borderRadius: "999px",
              height: "140px",
              width: "140px",
            }}
          />
        )}
      </div>
    </div>
  </div>
);
