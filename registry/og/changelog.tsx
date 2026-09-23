import { Badge } from "./ui/badge";
import { BrandMark } from "./ui/brand-mark";

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
      <Badge
        background="rgba(52,211,153,0.15)"
        color="#34d399"
        style={{ fontSize: "28px", fontWeight: 700, gap: "8px" }}
      >
        {logo ? <BrandMark radius={4} size={20} src={logo} /> : null}
        {version}
      </Badge>
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
      <BrandMark background="#34d399" src={logo} />
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
