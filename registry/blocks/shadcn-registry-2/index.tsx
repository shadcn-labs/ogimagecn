import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface ShadcnRegistry2Props {
  name: string;
  category: string;
  title: string;
  items?: string[];
  logo?: string;
  accent?: string;
  /** Card theme. Defaults to `light` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#0a0a0a",
    divider: "#3f3f46",
    foreground: "#fafafa",
    glyph: "#ffffff",
    muted: "#a1a1aa",
    subdued: "#71717a",
  },
  light: {
    background: "#ffffff",
    // The pipe separator sits between `name` and `category`.
    divider: "#d4d4d8",
    foreground: "#0a0a0a",
    // The bolt glyph is drawn on the accent tile, so it stays light in both.
    glyph: "#ffffff",
    muted: "#a1a1aa",
    subdued: "#71717a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const ShadcnRegistry2 = ({
  name,
  category,
  title,
  items = [],
  logo = "",
  accent = "#4f46e5",
  variant = "light",
}: ShadcnRegistry2Props) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Header: Logo + Name | Category */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "20px",
          marginBottom: "64px",
        }}
      >
        <BrandMark background={accent} radius={16} size={64} src={logo}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme.glyph}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </BrandMark>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {name}
          </div>
          <div
            style={{
              color: theme.divider,
              fontSize: "36px",
              fontWeight: 500,
            }}
          >
            |
          </div>
          <div
            style={{
              color: theme.muted,
              fontSize: "36px",
              fontWeight: 500,
            }}
          >
            {category}
          </div>
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          fontSize: title.length > 50 ? 64 : 72,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "900px",
          textWrap: "balance" as const,
        }}
      >
        {title}
      </div>

      {/* Items/Badges */}
      {items.length > 0 && (
        <div
          style={{
            alignItems: "center",
            color: theme.subdued,
            display: "flex",
            fontSize: "32px",
            fontWeight: 500,
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item}
              style={{ alignItems: "center", display: "flex", gap: "24px" }}
            >
              <span>{item}</span>
              {i < items.length - 1 && (
                <span style={{ color: theme.divider }}>•</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
