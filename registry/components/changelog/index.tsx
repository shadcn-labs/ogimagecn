export interface ChangelogProps {
  version: string;
  date: string;
  title: string;
  items: string[];
  brand: string;
  logo?: string;
}

export const Changelog = ({
  version,
  date,
  title,
  items,
  brand,
  logo = "",
}: ChangelogProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 100% 0%, rgba(52,211,153,0.16), transparent 50%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "80px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgba(52,211,153,0.15)",
          borderRadius: "999px",
          color: "#34d399",
          display: "flex",
          fontSize: "28px",
          fontWeight: 700,
          gap: "8px",
          padding: "10px 22px",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={20}
            src={logo}
            width={20}
            style={{
              borderRadius: "4px",
              objectFit: "contain",
            }}
          />
        ) : null}
        {version}
      </div>
      <div style={{ color: "#a1a1aa", display: "flex", fontSize: "28px" }}>
        {date}
      </div>
    </div>

    <div
      style={{
        display: "flex",
        fontSize: "80px",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        marginTop: "32px",
      }}
    >
      {title}
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        marginTop: "44px",
      }}
    >
      {items.slice(0, 4).map((item) => (
        <div
          key={item}
          style={{ alignItems: "center", display: "flex", gap: "20px" }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(52,211,153,0.15)",
              borderRadius: "999px",
              display: "flex",
              height: "40px",
              justifyContent: "center",
              width: "40px",
            }}
          >
            <svg
              fill="none"
              height="22"
              stroke="#34d399"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              width="22"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div style={{ color: "#e4e4e7", display: "flex", fontSize: "34px" }}>
            {item}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "12px",
        position: "absolute",
        right: "80px",
        top: "80px",
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
            backgroundColor: "#34d399",
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
          color: "#71717a",
          fontSize: "32px",
          fontWeight: 700,
        }}
      >
        {brand}
      </div>
    </div>
  </div>
);
