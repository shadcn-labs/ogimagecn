import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface EditorialProps {
  kicker: string;
  title: string;
  meta: string;
  ghost?: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `light` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#12100e",
    badgeBackground: "rgba(225,29,72,0.22)",
    badgeColor: "#fda4af",
    foreground: "#faf7f2",
    // The ghost word is a low-contrast wash behind the title.
    ghost: "rgba(250,247,242,0.06)",
    muted: "#a8a29e",
    rule: "rgba(250,247,242,0.16)",
  },
  light: {
    background: "#f5f1e9",
    badgeBackground: "rgba(225,29,72,0.15)",
    badgeColor: "#e11d48",
    foreground: "#0a0a0a",
    ghost: "rgba(10,10,10,0.05)",
    muted: "#52525b",
    rule: "rgba(10,10,10,0.15)",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Editorial = ({
  kicker,
  title,
  meta,
  ghost,
  brand,
  logo,
  variant = "light",
}: EditorialProps) => {
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
        overflow: "hidden",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          bottom: "-60px",
          color: theme.ghost,
          display: "flex",
          fontSize: "420px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          position: "absolute",
          right: "-20px",
        }}
      >
        {ghost ?? title.split(" ")[0]}
      </div>

      <Badge
        background={theme.badgeBackground}
        color={theme.badgeColor}
        style={{
          alignSelf: "flex-start",
          fontWeight: 700,
          padding: "10px 24px",
        }}
        uppercase
      >
        {kicker}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 96 : 120,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 0.98,
          maxWidth: "1000px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          alignItems: "center",
          borderTop: `2px solid ${theme.rule}`,
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "28px",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
          <BrandMark background="#e11d48" radius={6} size={32} src={logo} />
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
            {brand}
          </div>
        </div>
        <div style={{ color: theme.muted, display: "flex", fontSize: "30px" }}>
          {meta}
        </div>
      </div>
    </div>
  );
};
