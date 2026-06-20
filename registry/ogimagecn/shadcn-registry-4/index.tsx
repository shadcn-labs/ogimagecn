export interface ShadcnRegistry4Props {
  name: string;
  title: string;
  url?: string;
  logo?: string;
  accent?: string;
}

export const ShadcnRegistry4 = ({
  name,
  title,
  url = "",
  logo = "",
  accent = "#ffffff",
}: ShadcnRegistry4Props) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
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
          alt=""
          height={56}
          src={logo}
          width={56}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 19h20L12 2z" />
        </svg>
      )}
      <div
        style={{ fontSize: "40px", fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        {name}
      </div>
    </div>

    {/* Title */}
    <div
      style={{
        display: "flex",
        fontSize: title.length > 60 ? 52 : 64,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        maxWidth: "900px",
        textAlign: "center",
        textWrap: "balance" as const,
      }}
    >
      {title}
    </div>

    {/* URL */}
    {url && (
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
    )}
  </div>
);
