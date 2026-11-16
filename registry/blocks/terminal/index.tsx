import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface TerminalProps {
  brand: string;
  title: string;
  caption?: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    accent: "#22c55e",
    background: "#0a0a0a",
    badgeBackground: "rgba(250,250,250,0.06)",
    badgeBorder: "rgba(250,250,250,0.12)",
    foreground: "#fafafa",
  },
  light: {
    // The terminal green is too light to read as text on white.
    accent: "#16a34a",
    background: "#fafafa",
    badgeBackground: "rgba(9,9,11,0.04)",
    badgeBorder: "rgba(9,9,11,0.1)",
    foreground: "#0a0a0a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Terminal = ({
  brand,
  title,
  caption,
  logo,
  variant = "dark",
}: TerminalProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        <BrandMark background={theme.accent} size={44} src={logo} />
        <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
          {brand}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 84 : 104,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        {caption ? (
          <Badge
            background={theme.badgeBackground}
            borderColor={theme.badgeBorder}
            color={theme.accent}
            style={{
              alignSelf: "flex-start",
              borderRadius: "10px",
              fontSize: "30px",
              marginTop: "36px",
              padding: "12px 24px",
            }}
          >
            {caption}
          </Badge>
        ) : null}
      </div>
    </div>
  );
};
