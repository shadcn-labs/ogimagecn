export interface ShadcnRegistry6Props {
  title: string;
  description: string;
  brand: string;
  logo?: string;
}

export const ShadcnRegistry6 = ({
  title,
  description,
  brand,
  logo = "",
}: ShadcnRegistry6Props) => (
  <div
    style={{
      backgroundColor: "#000000",
      color: "#f4f4f5",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Border frame */}
    <div
      style={{
        borderLeft: "1px solid #27272a",
        bottom: 0,
        display: "flex",
        left: "48px",
        position: "absolute",
        top: 0,
      }}
    />
    <div
      style={{
        borderLeft: "1px solid #27272a",
        bottom: 0,
        display: "flex",
        position: "absolute",
        right: "48px",
        top: 0,
      }}
    />
    <div
      style={{
        borderTop: "1px solid #27272a",
        display: "flex",
        left: 0,
        position: "absolute",
        right: 0,
        top: "48px",
      }}
    />
    <div
      style={{
        borderTop: "1px solid #27272a",
        bottom: "48px",
        display: "flex",
        left: 0,
        position: "absolute",
        right: 0,
      }}
    />

    {/* Logo + Brand */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "16px",
        left: "72px",
        position: "absolute",
        top: "72px",
      }}
    >
      {logo ? (
        <img
          height={64}
          src={logo}
          width={64}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            height: "64px",
            width: "64px",
          }}
        />
      )}
      <span
        style={{
          fontSize: "32px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {brand}
      </span>
    </div>

    {/* Title + Description */}
    <div
      style={{
        borderTop: "2px solid #27272a",
        bottom: "96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        left: 0,
        position: "absolute",
        right: 0,
        top: "160px",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid #27272a",
          borderTop: "2px solid #27272a",
          display: "flex",
          fontSize: title.length > 60 ? 52 : 64,
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1,
          padding: "0px 72px",
          textWrap: "balance",
        }}
      >
        {title}
      </div>
      {description ? (
        <div
          style={{
            borderBottom: "2px solid #27272a",
            color: "#a1a1aa",
            display: "flex",
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: 1.25,
            padding: "32px 72px",
            textWrap: "balance",
          }}
        >
          {description}
        </div>
      ) : null}
    </div>
  </div>
);
