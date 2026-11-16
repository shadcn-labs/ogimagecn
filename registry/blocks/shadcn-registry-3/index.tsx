import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface ShadcnRegistry3Props {
  title: string;
  credit?: string;
  ghost?: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#0a0a0a",
    badgeBorder: "rgba(255,255,255,0.2)",
    credit: "#52525b",
    foreground: "#fafafa",
    ghost: "rgba(255,255,255,0.04)",
  },
  light: {
    background: "#fafafa",
    badgeBorder: "rgba(9,9,11,0.15)",
    credit: "#71717a",
    foreground: "#0a0a0a",
    ghost: "rgba(9,9,11,0.05)",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const ShadcnRegistry3 = ({
  title,
  credit = "",
  ghost = "",
  logo = "",
  variant = "dark",
}: ShadcnRegistry3Props) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Ghost Watermark */}
      <div
        style={{
          bottom: "-80px",
          color: theme.ghost,
          display: "flex",
          fontSize: "320px",
          fontWeight: 800,
          left: "40px",
          letterSpacing: "-0.04em",
          lineHeight: 0.85,
          position: "absolute",
          userSelect: "none",
        }}
      >
        {ghost || title.split(" ")[0]}
      </div>

      {/* Title + Badge */}
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: title.length > 60 ? 52 : 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "800px",
            textWrap: "balance",
          }}
        >
          {title}
          {credit ? (
            <div
              style={{
                color: theme.credit,
                fontSize: "24px",
                fontWeight: 400,
                marginTop: "24px",
              }}
            >
              {credit}
            </div>
          ) : null}
        </div>

        {/* Badge/Logo */}
        <div
          style={{
            alignItems: "center",
            border: `3px solid ${theme.badgeBorder}`,
            borderRadius: "999px",
            display: "flex",
            flexShrink: 0,
            height: "160px",
            justifyContent: "center",
            marginLeft: "40px",
            overflow: "hidden",
            width: "160px",
          }}
        >
          <BrandMark
            background="linear-gradient(135deg, #60EFFF, #0061FF)"
            fit="cover"
            radius={999}
            size={140}
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};
