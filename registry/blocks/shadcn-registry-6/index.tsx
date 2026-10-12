import { BrandMark } from "@/components/og/brand-mark";
import { GridLines } from "@/components/og/grid-lines";

export type Variant = "light" | "dark";

export interface ShadcnRegistry6Props {
  title: string;
  description: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#000000",
    description: "#a1a1aa",
    foreground: "#f4f4f5",
    frame: "#27272a",
    mark: "#ffffff",
  },
  light: {
    background: "#fafafa",
    description: "#52525b",
    foreground: "#0a0a0a",
    frame: "#d4d4d8",
    mark: "#0a0a0a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const ShadcnRegistry6 = ({
  title,
  description,
  brand,
  logo = "",
  variant = "dark",
}: ShadcnRegistry6Props) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        height: "100%",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Border frame */}
      <GridLines color={theme.frame} inset={48} variant="solid" />

      {/* Logo + Brand */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "16px",
          left: "72px",
          position: "absolute",
          top: "72px",
        }}
      >
        <BrandMark background={theme.mark} radius={12} size={64} src={logo} />
        <span
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {brand}
        </span>
      </div>

      {/* Title + Description */}
      <div
        style={{
          borderTop: `2px solid ${theme.frame}`,
          bottom: "96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          left: 0,
          position: "absolute",
          right: 0,
          top: "160px",
        }}
      >
        <div
          style={{
            borderBottom: `2px solid ${theme.frame}`,
            borderTop: `2px solid ${theme.frame}`,
            display: "flex",
            fontSize: title.length > 60 ? 52 : 64,
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            padding: "0px 72px",
            textWrap: "balance",
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              borderBottom: `2px solid ${theme.frame}`,
              color: theme.description,
              display: "flex",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 1.25,
              padding: "32px 72px",
              textWrap: "balance",
            }}
          >
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
};
