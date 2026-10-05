import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface PhotoProps {
  image?: string;
  label: string;
  title: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#0a0a0a",
    badgeBackground: "rgba(255,255,255,0.12)",
    badgeBorder: "rgba(255,255,255,0.4)",
    badgeColor: "#ffffff",
    brand: "rgba(255,255,255,0.85)",
    fallback: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #7c3aed 100%)",
    foreground: "#ffffff",
    mark: "rgba(255,255,255,0.2)",
    // The scrim is what guarantees contrast over an arbitrary photo, so it
    // carries the weight for the text colour rather than the palette.
    scrim:
      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.85) 100%)",
    titleShadow: "0 2px 24px rgba(0,0,0,0.5)",
  },
  light: {
    background: "#f5f5f4",
    badgeBackground: "rgba(9,9,11,0.06)",
    badgeBorder: "rgba(9,9,11,0.2)",
    badgeColor: "#0a0a0a",
    brand: "rgba(9,9,11,0.8)",
    fallback: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 45%, #ddd6fe 100%)",
    foreground: "#0a0a0a",
    mark: "rgba(9,9,11,0.15)",
    // A white scrim lightens the photo so the dark text stays readable. It
    // ramps harder than the dark version because the text sits low on the card.
    scrim:
      "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.94) 100%)",
    titleShadow: "0 2px 24px rgba(255,255,255,0.6)",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Photo = ({
  image,
  label,
  title,
  brand,
  logo = "",
  variant = "dark",
}: PhotoProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        backgroundImage: image ? `url(${image})` : theme.fallback,
        backgroundPosition: "center",
        backgroundSize: "1200px 630px",
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-end",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundImage: theme.scrim,
          bottom: 0,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />

      <Badge
        background={theme.badgeBackground}
        borderColor={theme.badgeBorder}
        color={theme.badgeColor}
        style={{ alignSelf: "flex-start" }}
        uppercase
      >
        {label}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 72 : 88,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          marginTop: "28px",
          maxWidth: "1000px",
          textShadow: theme.titleShadow,
        }}
      >
        {title}
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "12px",
          marginTop: "32px",
        }}
      >
        <BrandMark background={theme.mark} size={36} src={logo} />
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
  );
};
