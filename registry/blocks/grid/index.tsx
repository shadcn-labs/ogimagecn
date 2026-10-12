import { BrandMark } from "@/components/og/brand-mark";
import { GridLines } from "@/components/og/grid-lines";

export type Variant = "light" | "dark";

export interface GridProps {
  title: string;
  description: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#0a0a0a",
    foreground: "#ffffff",
    gridLines: "#44403c",
    mark: "#ffffff",
    muted: "#a8a29e",
  },
  light: {
    background: "#fafafa",
    foreground: "#0a0a0a",
    // The guide lines are mid-grey and vanish on white without help.
    gridLines: "#d6d3d1",
    mark: "#0a0a0a",
    muted: "#57534e",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Grid = ({
  title,
  description,
  brand,
  logo = "",
  variant = "dark",
}: GridProps) => {
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
      <GridLines color={theme.gridLines} />

      <div
        style={{
          bottom: "128px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          left: "128px",
          position: "absolute",
          right: "128px",
          top: "128px",
          width: "896px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            fontSize: title && title.length > 20 ? 64 : 80,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            textWrap: "balance",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: theme.muted,
            display: "flex",
            flexGrow: 1,
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: 1.5,
            marginTop: "24px",
            textWrap: "balance",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          bottom: "96px",
          display: "flex",
          gap: "14px",
          position: "absolute",
          right: "96px",
        }}
      >
        <BrandMark background={theme.mark} radius={12} size={48} src={logo} />
        <span
          style={{
            fontSize: "30px",
            fontWeight: 600,
          }}
        >
          {brand}
        </span>
      </div>
    </div>
  );
};
