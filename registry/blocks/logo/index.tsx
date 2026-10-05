import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface LogoProps {
  brand: string;
  tagline?: string;
  monogram?: string;
  /** Overrides the `variant` surface. A `#`-prefixed value is a solid colour
   *  with a glow behind it; anything else is treated as a gradient. */
  background?: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    foreground: "#fafafa",
    glow: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.2), transparent 60%)",
    muted: "#a1a1aa",
    surface: "#09090b",
  },
  light: {
    foreground: "#0a0a0a",
    glow: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.12), transparent 60%)",
    muted: "#52525b",
    surface: "#fafafa",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Logo = ({
  brand,
  tagline,
  monogram,
  background,
  logo = "",
  variant = "dark",
}: LogoProps) => {
  const theme = themes[variant];
  const surface = background ?? theme.surface;
  const isColor = surface.startsWith("#");

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: isColor ? surface : theme.surface,
        backgroundImage: isColor ? theme.glow : surface,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <BrandMark
        background="#7c3aed"
        radius={28}
        size={140}
        src={logo}
        style={
          logo
            ? undefined
            : {
                boxShadow: "0 24px 80px rgba(124,58,237,0.33)",
                color: "#ffffff",
                fontSize: "72px",
                fontWeight: 800,
              }
        }
      >
        {monogram}
      </BrandMark>

      <div
        style={{
          display: "flex",
          fontSize: "96px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          marginTop: "44px",
        }}
      >
        {brand}
      </div>

      {tagline ? (
        <div
          style={{
            color: theme.muted,
            display: "flex",
            fontSize: "32px",
            marginTop: "16px",
          }}
        >
          {tagline}
        </div>
      ) : null}
    </div>
  );
};
