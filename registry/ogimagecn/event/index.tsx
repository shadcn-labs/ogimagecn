/* eslint-disable @next/next/no-img-element */
export interface EventProps {
  label: string;
  brand: string;
  title: string;
  date: string;
  location: string;
  logo?: string;
}

export const Event = ({
  label,
  brand,
  title,
  date,
  location,
  logo = "",
}: EventProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 100% 0%, rgba(245,158,11,0.2), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgba(245,158,11,0.15)",
          border: "1px solid rgba(245,158,11,0.4)",
          borderRadius: "999px",
          color: "#f59e0b",
          display: "flex",
          fontSize: "26px",
          fontWeight: 600,
          gap: "12px",
          letterSpacing: "0.04em",
          padding: "10px 22px",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            backgroundColor: "#f59e0b",
            borderRadius: "999px",
            height: "12px",
            width: "12px",
          }}
        />
        {label}
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "12px",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={40}
            src={logo}
            width={40}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#f59e0b",
              borderRadius: "8px",
              color: "#0a0a0a",
              display: "flex",
              fontSize: "20px",
              fontWeight: 700,
              height: "40px",
              justifyContent: "center",
              width: "40px",
            }}
          />
        )}
        <div
          style={{
            color: "#a1a1aa",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {brand}
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 40 ? 72 : 88,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.02,
        maxWidth: "1000px",
      }}
    >
      {title}
    </div>

    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: "30px",
          fontWeight: 600,
          gap: "14px",
        }}
      >
        <svg
          fill="none"
          height="30"
          stroke="#f59e0b"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="30"
        >
          <rect height="18" rx="2" width="18" x="3" y="4" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {date}
      </div>
      <div style={{ color: "#52525b", display: "flex", fontSize: "30px" }}>
        ·
      </div>
      <div style={{ color: "#a1a1aa", display: "flex", fontSize: "30px" }}>
        {location}
      </div>
    </div>
  </div>
);
