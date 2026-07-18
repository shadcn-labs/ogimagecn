export interface ShadcnRegistry2Props {
  name: string;
  category: string;
  title: string;
  items?: string[];
  logo?: string;
  accent?: string;
}

export const ShadcnRegistry2 = ({
  name,
  category,
  title,
  items = [],
  logo = "",
  accent = "#4f46e5",
}: ShadcnRegistry2Props) => (
  <div
    style={{
      backgroundColor: "#ffffff",
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
    {/* Header: Logo + Name | Category */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "20px",
        marginBottom: "64px",
      }}
    >
      {logo ? (
        <img
          alt=""
          height={64}
          src={logo}
          width={64}
          style={{
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            alignItems: "center",
            backgroundColor: accent,
            borderRadius: "16px",
            display: "flex",
            height: "64px",
            justifyContent: "center",
            width: "64px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      )}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {name}
        </div>
        <div
          style={{
            color: "#d4d4d8",
            fontSize: "36px",
            fontWeight: 500,
          }}
        >
          |
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: "36px",
            fontWeight: 500,
          }}
        >
          {category}
        </div>
      </div>
    </div>

    {/* Title */}
    <div
      style={{
        display: "flex",
        fontSize: title.length > 50 ? 64 : 72,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        maxWidth: "900px",
        textWrap: "balance" as const,
      }}
    >
      {title}
    </div>

    {/* Items/Badges */}
    {items.length > 0 && (
      <div
        style={{
          alignItems: "center",
          color: "#71717a",
          display: "flex",
          fontSize: "32px",
          fontWeight: 500,
          gap: "24px",
          marginTop: "48px",
        }}
      >
        {items.map((item, i) => (
          <div
            key={item}
            style={{ alignItems: "center", display: "flex", gap: "24px" }}
          >
            <span>{item}</span>
            {i < items.length - 1 && (
              <span style={{ color: "#d4d4d8" }}>•</span>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);
