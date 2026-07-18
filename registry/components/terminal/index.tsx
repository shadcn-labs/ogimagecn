export interface TerminalProps {
  brand: string;
  title: string;
  caption?: string;
  logo?: string;
}

export const Terminal = ({ brand, title, caption, logo }: TerminalProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
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
            backgroundColor: "#22c55e",
            borderRadius: "8px",
            color: "#ffffff",
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            height: "44px",
            justifyContent: "center",
            width: "44px",
          }}
        />
      )}
      <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
        {brand}
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 28 ? 84 : 104,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      {caption ? (
        <div
          style={{
            alignSelf: "flex-start",
            backgroundColor: "rgba(250,250,250,0.06)",
            border: "1px solid rgba(250,250,250,0.12)",
            borderRadius: "10px",
            color: "#22c55e",
            display: "flex",
            fontSize: "30px",
            fontWeight: 600,
            marginTop: "36px",
            padding: "12px 24px",
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  </div>
);
