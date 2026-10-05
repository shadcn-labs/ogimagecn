import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface SimpleProps {
  label: string;
  title: string;
  description: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#09090b",
    badgeBackground: "rgba(250,250,250,0.04)",
    badgeBorder: "rgba(250,250,250,0.12)",
    badgeColor: "#d4d4d8",
    foreground: "#fafafa",
    glow: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18), transparent 55%)",
    muted: "#a1a1aa",
  },
  light: {
    background: "#fafafa",
    badgeBackground: "rgba(9,9,11,0.03)",
    badgeBorder: "rgba(9,9,11,0.1)",
    badgeColor: "#52525b",
    foreground: "#09090b",
    glow: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.12), transparent 55%)",
    muted: "#52525b",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Simple = ({
  label,
  title,
  description,
  brand,
  logo,
  variant = "dark",
}: SimpleProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme.background,
        backgroundImage: theme.glow,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "96px",
        width: "100%",
      }}
    >
      <Badge
        background={theme.badgeBackground}
        borderColor={theme.badgeBorder}
        color={theme.badgeColor}
        style={{ fontSize: "24px", fontWeight: 500, padding: "8px 18px" }}
        uppercase
      >
        <div
          style={{
            backgroundColor: "#7c3aed",
            borderRadius: "999px",
            height: "10px",
            width: "10px",
          }}
        />
        {label}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? 64 : 76,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginTop: "40px",
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: theme.muted,
          display: "flex",
          fontSize: "32px",
          lineHeight: 1.4,
          marginTop: "28px",
          maxWidth: "760px",
          textAlign: "center",
        }}
      >
        {description}
      </div>

      <div
        style={{
          alignItems: "center",
          bottom: "56px",
          color: theme.foreground,
          display: "flex",
          fontSize: "26px",
          fontWeight: 600,
          gap: "12px",
          position: "absolute",
        }}
      >
        <BrandMark background="#7c3aed" size={28} src={logo} />
        {brand}
      </div>
    </div>
  );
};
