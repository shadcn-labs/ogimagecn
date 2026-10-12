import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface StatProps {
  label: string;
  value: string;
  caption: string;
  trend?: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    accent: "#22c55e",
    background: "#09090b",
    brand: "#71717a",
    caption: "#d4d4d8",
    foreground: "#fafafa",
    glow: "radial-gradient(circle at 50% 120%, rgba(34,197,94,0.18), transparent 55%)",
    label: "#a1a1aa",
    trendBackground: "rgba(34,197,94,0.15)",
  },
  light: {
    // The trend badge carries text and an arrow, so it darkens on light.
    accent: "#16a34a",
    background: "#fafafa",
    brand: "#71717a",
    caption: "#3f3f46",
    foreground: "#09090b",
    glow: "radial-gradient(circle at 50% 120%, rgba(34,197,94,0.12), transparent 55%)",
    label: "#52525b",
    trendBackground: "rgba(34,197,94,0.15)",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Stat = ({
  label,
  value,
  caption,
  trend,
  brand,
  logo,
  variant = "dark",
}: StatProps) => {
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
        justifyContent: "center",
        padding: "96px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          color: theme.label,
          display: "flex",
          fontSize: "30px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>

      <div
        style={{
          alignItems: "flex-end",
          display: "flex",
          gap: "28px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "200px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {value}
        </div>
        {trend ? (
          <Badge
            background={theme.trendBackground}
            color={theme.accent}
            style={{
              fontSize: "34px",
              fontWeight: 700,
              gap: "10px",
              marginBottom: "36px",
            }}
          >
            <svg
              fill="none"
              height="26"
              stroke={theme.accent}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              width="26"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
            {trend}
          </Badge>
        ) : null}
      </div>

      <div
        style={{
          color: theme.caption,
          display: "flex",
          fontSize: "34px",
          lineHeight: 1.4,
          marginTop: "28px",
          maxWidth: "820px",
        }}
      >
        {caption}
      </div>

      <div
        style={{
          alignItems: "center",
          bottom: "56px",
          color: theme.brand,
          display: "flex",
          fontSize: "26px",
          fontWeight: 600,
          gap: "12px",
          position: "absolute",
        }}
      >
        <BrandMark background={theme.accent} size={24} src={logo} />
        {brand}
      </div>
    </div>
  );
};
