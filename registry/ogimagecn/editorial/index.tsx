/* eslint-disable @next/next/no-img-element */
export interface EditorialProps {
  kicker: string;
  title: string;
  meta: string;
  ghost?: string;
  brand: string;
  logo?: string;
}

export const Editorial = ({
  kicker,
  title,
  meta,
  ghost,
  brand,
  logo,
}: EditorialProps) => (
  <div
    style={{
      backgroundColor: "#f5f1e9",
      color: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      overflow: "hidden",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        bottom: "-60px",
        color: "rgba(10,10,10,0.05)",
        display: "flex",
        fontSize: "420px",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        position: "absolute",
        right: "-20px",
      }}
    >
      {ghost ?? title.split(" ")[0]}
    </div>

    <div
      style={{
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: "rgba(225,29,72,0.15)",
        borderRadius: "999px",
        color: "#e11d48",
        display: "flex",
        fontSize: "26px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        padding: "10px 24px",
        textTransform: "uppercase",
      }}
    >
      {kicker}
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 36 ? 96 : 120,
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 0.98,
        maxWidth: "1000px",
      }}
    >
      {title}
    </div>

    <div
      style={{
        alignItems: "center",
        borderTop: "2px solid rgba(10,10,10,0.15)",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "28px",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
        {logo ? (
          <img
            alt=""
            height={32}
            src={logo}
            width={32}
            style={{
              borderRadius: "6px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#e11d48",
              borderRadius: "6px",
              color: "#ffffff",
              display: "flex",
              fontSize: "16px",
              fontWeight: 700,
              height: "32px",
              justifyContent: "center",
              width: "32px",
            }}
          />
        )}
        <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
          {brand}
        </div>
      </div>
      <div style={{ color: "#52525b", display: "flex", fontSize: "30px" }}>
        {meta}
      </div>
    </div>
  </div>
);
