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
      backgroundColor: "#fafafa",
      color: "#0a0a0a",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Grid lines — matching grid/index.tsx */}
    <div
      style={{
        borderLeft: "1px dashed #44403c",
        bottom: 0,
        left: "64px",
        position: "absolute",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderLeft: "1px dashed #44403c",
        bottom: 0,
        position: "absolute",
        right: "64px",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderTop: "1px dashed #44403c",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
        top: "64px",
      }}
    />
    <div
      style={{
        borderTop: "1px dashed #44403c",
        bottom: "64px",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
      }}
    />

    {/* Main content — absolutely positioned in center */}
    <div
      style={{
        alignItems: "center",
        bottom: "128px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        left: "128px",
        position: "absolute",
        right: "128px",
        textAlign: "center",
        top: "128px",
        width: "896px",
      }}
    >
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
          textWrap: "balance",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description ? (
        <div
          style={{
            color: "#71717a",
            display: "flex",
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: 1.5,
            marginTop: "32px",
            textWrap: "balance",
          }}
        >
          {description}
        </div>
      ) : null}
    </div>
  </div>
);
