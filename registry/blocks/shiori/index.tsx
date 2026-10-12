import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface ShioriProps {
  /** Defaults to the `variant` surface. */
  background?: string;
  brand: string;
  /** Defaults to the `variant` foreground. */
  brandColor?: string;
  logo: string;
  title: string;
  /** Defaults to the `variant` muted tone. */
  titleColor?: string;
  /** Card theme. Defaults to `light` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#12100e",
    foreground: "#faf7f2",
    muted: "#a8a29e",
  },
  light: {
    background: "#faf6f1",
    foreground: "#1a1a1a",
    muted: "#8b7e74",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Shiori = ({
  title,
  background,
  titleColor,
  logo,
  brand,
  brandColor,
  variant = "light",
}: ShioriProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: background ?? theme.background,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "60px",
        position: "relative",
        width: "100%",
      }}
    >
      <BrandMark radius="50%" size={96} src={logo} />

      <div
        style={{
          bottom: "60px",
          display: "flex",
          justifyContent: "space-between",
          left: "60px",
          position: "absolute",
          right: "60px",
        }}
      >
        <div
          style={{
            color: brandColor ?? theme.foreground,
            flex: 0.25,
            fontSize: "64px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
          }}
        >
          {brand}
        </div>

        <div
          style={{
            color: titleColor ?? theme.muted,
            flex: 0.6,
            fontSize: "64px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>

        <div style={{ flex: 0.25 }} />
      </div>
    </div>
  );
};
