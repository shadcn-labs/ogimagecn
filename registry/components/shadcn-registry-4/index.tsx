export interface ShadcnRegistry4Props {
  name: string;
  title: string;
  url?: string;
  logo?: string;
}

export const ShadcnRegistry4 = ({
  name,
  title,
  url = "",
  logo = "",
}: ShadcnRegistry4Props) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.1), transparent 70%)",
      backgroundSize: "100% 100%",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Logo + Name */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "16px",
        marginBottom: "48px",
      }}
    >
      {logo ? (
        <img
          height={56}
          src={logo}
          width={56}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: "12px",
            height: "56px",
            width: "56px",
          }}
        />
      )}
      <div
        style={{ fontSize: "40px", fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        {name}
      </div>
    </div>

    {/* Title with alternating word colors */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        fontSize: title.length > 60 ? 52 : 64,
        fontWeight: 700,
        justifyContent: "center",
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        maxWidth: "900px",
        textAlign: "center",
        textWrap: "balance",
      }}
    >
      {title.split(" ").map((word, i) => (
        <span
          key={i}
          style={{
            color: i % 2 === 0 ? "#71717a" : "#fafafa",
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </div>

    {/* URL */}
    {url ? (
      <div
        style={{
          color: "#52525b",
          fontSize: "24px",
          fontWeight: 500,
          letterSpacing: "0.02em",
          marginTop: "48px",
        }}
      >
        {url}
      </div>
    ) : null}
  </div>
);
