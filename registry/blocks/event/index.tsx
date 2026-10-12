import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface EventProps {
  label: string;
  brand: string;
  title: string;
  date: string;
  location: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    accent: "#f59e0b",
    accentBackground: "rgba(245,158,11,0.15)",
    accentBorder: "rgba(245,158,11,0.4)",
    background: "#0a0a0a",
    brand: "#a1a1aa",
    foreground: "#fafafa",
    glow: "radial-gradient(circle at 100% 0%, rgba(245,158,11,0.2), transparent 55%)",
    location: "#a1a1aa",
    separator: "#52525b",
  },
  light: {
    accent: "#b45309",
    accentBackground: "rgba(180,83,9,0.12)",
    accentBorder: "rgba(180,83,9,0.35)",
    background: "#fafafa",
    brand: "#52525b",
    foreground: "#0a0a0a",
    glow: "radial-gradient(circle at 100% 0%, rgba(245,158,11,0.16), transparent 55%)",
    location: "#52525b",
    separator: "#d4d4d8",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Event = ({
  label,
  brand,
  title,
  date,
  location,
  logo = "",
  variant = "dark",
}: EventProps) => {
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
        <Badge
          background={theme.accentBackground}
          borderColor={theme.accentBorder}
          color={theme.accent}
          uppercase
        >
          <div
            style={{
              backgroundColor: theme.accent,
              borderRadius: "999px",
              height: "12px",
              width: "12px",
            }}
          />
          {label}
        </Badge>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "12px",
          }}
        >
          <BrandMark background={theme.accent} src={logo} />
          <div
            style={{
              color: theme.brand,
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
            stroke={theme.accent}
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
        <div
          style={{ color: theme.separator, display: "flex", fontSize: "30px" }}
        >
          ·
        </div>
        <div
          style={{ color: theme.location, display: "flex", fontSize: "30px" }}
        >
          {location}
        </div>
      </div>
    </div>
  );
};
