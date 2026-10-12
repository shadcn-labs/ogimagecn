import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface ChangelogProps {
  version: string;
  date: string;
  title: string;
  items: string[];
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    accent: "#34d399",
    accentBackground: "rgba(52,211,153,0.15)",
    background: "#0a0a0a",
    brand: "#71717a",
    date: "#a1a1aa",
    foreground: "#fafafa",
    glow: "radial-gradient(circle at 100% 0%, rgba(52,211,153,0.16), transparent 50%)",
    item: "#e4e4e7",
  },
  light: {
    accent: "#059669",
    accentBackground: "rgba(5,150,105,0.12)",
    background: "#fafafa",
    brand: "#71717a",
    date: "#52525b",
    foreground: "#0a0a0a",
    glow: "radial-gradient(circle at 100% 0%, rgba(52,211,153,0.12), transparent 50%)",
    item: "#3f3f46",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Changelog = ({
  version,
  date,
  title,
  items,
  brand,
  logo = "",
  variant = "dark",
}: ChangelogProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        backgroundImage: theme.glow,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
        <Badge
          background={theme.accentBackground}
          color={theme.accent}
          style={{ fontSize: "28px", fontWeight: 700, gap: "8px" }}
        >
          {logo ? <BrandMark radius={4} size={20} src={logo} /> : null}
          {version}
        </Badge>
        <div style={{ color: theme.date, display: "flex", fontSize: "28px" }}>
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
                backgroundColor: theme.accentBackground,
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
                stroke={theme.accent}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="22"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div
              style={{ color: theme.item, display: "flex", fontSize: "34px" }}
            >
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
        <BrandMark background={theme.accent} src={logo} />
        <div
          style={{
            color: theme.brand,
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          {brand}
        </div>
      </div>
    </div>
  );
};
