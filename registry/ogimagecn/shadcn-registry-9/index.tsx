export interface ShadcnRegistry9Props {
  brand: string;
  title: string;
  tabs?: string[];
  activeTab?: number;
  logo?: string;
  brandColor?: string;
}

export const ShadcnRegistry9 = ({
  brand,
  title,
  tabs = [],
  activeTab = 0,
  logo = "",
  brandColor = "#2563eb",
}: ShadcnRegistry9Props) => (
  <div
    style={{
      backgroundColor: "#1a1a1a",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    }}
  >
    {/* Background grid */}
    <div style={{ display: "flex", flex: 1, position: "relative" }}>
      {/* Grid of cells */}
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: "2px",
          padding: "2px",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", flex: 1, gap: "2px" }}>
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
        </div>

        {/* Middle row with brand + tabs */}
        <div style={{ display: "flex", flex: 1, gap: "2px" }}>
          {/* Blue brand icon */}
          <div
            style={{
              alignItems: "center",
              backgroundColor: brandColor,
              borderRadius: "4px",
              display: "flex",
              flexShrink: 0,
              justifyContent: "center",
              width: "140px",
            }}
          >
            {logo ? (
              <img
                alt=""
                height={60}
                src={logo}
                width={60}
                style={{ borderRadius: "8px", objectFit: "contain" }}
              />
            ) : (
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="20" r="6" fill="white" />
                <path
                  d="M15 38 C15 28, 45 28, 45 38"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            )}
          </div>

          {/* Tabs */}
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#2a2a2a",
              borderRadius: "4px",
              display: "flex",
              flex: 1,
              gap: "0",
            }}
          >
            {tabs.map((tab, i) => (
              <div
                key={tab}
                style={{
                  alignItems: "center",
                  borderBottom:
                    i === activeTab
                      ? "2px solid #ffffff"
                      : "2px solid transparent",
                  color: i === activeTab ? "#ffffff" : "#737373",
                  display: "flex",
                  fontSize: "24px",
                  fontWeight: 600,
                  gap: "10px",
                  height: "100%",
                  letterSpacing: "0.05em",
                  padding: "0 32px",
                  textTransform: "uppercase",
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Empty cell */}
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", flex: 1, gap: "2px" }}>
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
          <div
            style={{
              backgroundColor: "#222222",
              borderRadius: "4px",
              display: "flex",
              flex: 2,
              flexDirection: "column",
              justifyContent: "center",
              padding: "24px 40px",
            }}
          >
            <div
              style={{
                color: "#737373",
                fontFamily: "monospace",
                fontSize: "32px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                lineHeight: 1.4,
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
          </div>
          <div
            style={{ backgroundColor: "#222222", borderRadius: "4px", flex: 1 }}
          />
        </div>
      </div>
    </div>

    {/* Brand name */}
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 40px",
      }}
    >
      <span
        style={{
          color: "#525252",
          fontSize: "20px",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        {brand}
      </span>
    </div>
  </div>
);
