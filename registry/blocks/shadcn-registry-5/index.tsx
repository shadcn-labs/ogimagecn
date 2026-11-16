import { BrandMark } from "@/components/og/brand-mark";
import { GridLines } from "@/components/og/grid-lines";

export type Variant = "light" | "dark";

export interface ShadcnRegistry5Props {
  name: string;
  title: string;
  description?: string;
  logo?: string;
  /** Card theme. Defaults to `light` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#0a0a0a",
    foreground: "#fafafa",
    // The guide lines are mid-grey; on dark they need lifting to stay visible.
    gridLines: "#52525b",
    mark: "rgba(255,255,255,0.3)",
    muted: "#a1a1aa",
  },
  light: {
    background: "#fafafa",
    foreground: "#18181b",
    gridLines: "#44403c",
    mark: "rgba(0,0,0,0.3)",
    muted: "#71717a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const ShadcnRegistry5 = ({
  name,
  title,
  description = "",
  logo = "",
  variant = "light",
}: ShadcnRegistry5Props) => {
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
      {/* Grid lines — matching grid/index.tsx */}
      <GridLines color={theme.gridLines} />

      {/* Main content — absolutely positioned in center */}
      <div
        style={{
          alignItems: "center",
          bottom: "128px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          left: "128px",
          position: "absolute",
          right: "128px",
          textAlign: "center",
          top: "128px",
          width: "896px",
        }}
      >
        {/* Logo + Name */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <BrandMark background={theme.mark} radius={12} src={logo} />
          <div
            style={{
              color: theme.foreground,
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            {name}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 30 ? 72 : 88,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            textWrap: "balance",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description ? (
          <div
            style={{
              color: theme.muted,
              display: "flex",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 1.5,
              marginTop: "32px",
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
