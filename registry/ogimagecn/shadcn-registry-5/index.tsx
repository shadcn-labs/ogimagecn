export interface ShadcnRegistry5Props {
  name: string;
  title: string;
  description?: string;
  logo?: string;
  accent?: string;
}

export const ShadcnRegistry5 = ({
  name,
  title,
  description = "",
  logo = "",
  accent = "#0ea5e9",
}: ShadcnRegistry5Props) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#fafafa",
      color: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Top border line */}
    <div
      style={{
        borderTop: "1px solid #e5e7eb",
        left: "80px",
        position: "absolute",
        right: "80px",
        top: "80px",
      }}
    />

    {/* Bottom border line */}
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        bottom: "80px",
        left: "80px",
        position: "absolute",
        right: "80px",
      }}
    />

    {/* Left border line */}
    <div
      style={{
        borderLeft: "1px solid #e5e7eb",
        bottom: "80px",
        left: "80px",
        position: "absolute",
        top: "80px",
      }}
    />

    {/* Right border line */}
    <div
      style={{
        borderRight: "1px solid #e5e7eb",
        bottom: "80px",
        position: "absolute",
        right: "80px",
        top: "80px",
      }}
    />

    {/* Logo + Name */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "12px",
        marginBottom: "32px",
      }}
    >
      {logo ? (
        <img
          alt=""
          height={40}
          src={logo}
          width={40}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            width: "40px",
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: i === 4 ? accent : `${accent}66`,
                borderRadius: "999px",
                height: "8px",
                width: "8px",
              }}
            />
          ))}
        </div>
      )}
      <div style={{ color: "#18181b", fontSize: "28px", fontWeight: 600 }}>
        {name}
      </div>
    </div>

    {/* Title */}
    <div
      style={{
        display: "flex",
        fontSize: title.length > 30 ? 72 : 88,
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        maxWidth: "900px",
        textAlign: "center",
        textWrap: "balance" as const,
      }}
    >
      {title}
    </div>

    {/* Description */}
    {description && (
      <div
        style={{
          color: "#71717a",
          display: "flex",
          fontSize: "28px",
          fontWeight: 400,
          lineHeight: 1.5,
          marginTop: "32px",
          maxWidth: "700px",
          textAlign: "center",
          textWrap: "balance" as const,
        }}
      >
        {description}
      </div>
    )}
  </div>
);
