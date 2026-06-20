export interface ShadcnRegistry1Props {
  name: string;
  url: string;
  description: string;
  logo?: string;
  items?: string[];
}

export const ShadcnRegistry1 = ({
  name,
  url,
  description,
  logo = "",
  items = [],
}: ShadcnRegistry1Props) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(ellipse at 70% 80%, rgba(120,50,60,0.15), transparent 60%), radial-gradient(ellipse at 20% 20%, rgba(60,60,80,0.1), transparent 50%)",
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
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        {logo ? (
          <img
            alt=""
            height={48}
            src={logo}
            width={48}
            style={{
              borderRadius: "12px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor: "#22d3ee",
              borderRadius: "999px",
              display: "flex",
              height: "48px",
              width: "48px",
            }}
          />
        )}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          color: "#71717a",
          fontSize: "28px",
          fontWeight: 500,
        }}
      >
        {url}
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginTop: "-40px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: url.length > 20 ? 96 : 120,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          textWrap: "balance" as const,
        }}
      >
        {url}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "36px",
          fontWeight: 400,
          lineHeight: 1.3,
          maxWidth: "800px",
          textWrap: "balance" as const,
        }}
      >
        {description}
      </div>
    </div>

    {items.length > 0 && (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "16px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#d4d4d8",
              display: "flex",
              fontSize: "24px",
              fontWeight: 500,
              padding: "12px 20px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);
