import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface ShadcnRegistry1Props {
  name: string;
  url: string;
  description: string;
  logo?: string;
  items?: string[];
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    accent: "#22d3ee",
    background: "#09090b",
    badgeBackground: "rgba(255,255,255,0.06)",
    badgeBorder: "rgba(255,255,255,0.1)",
    badgeColor: "#d4d4d8",
    description: "#a1a1aa",
    foreground: "#fafafa",
    glow: "radial-gradient(ellipse at 70% 80%, rgba(120,50,60,0.15), transparent 60%), radial-gradient(ellipse at 20% 20%, rgba(60,60,80,0.1), transparent 50%)",
    url: "#71717a",
  },
  light: {
    accent: "#0891b2",
    background: "#fafafa",
    badgeBackground: "rgba(9,9,11,0.04)",
    badgeBorder: "rgba(9,9,11,0.1)",
    badgeColor: "#3f3f46",
    description: "#52525b",
    foreground: "#0a0a0a",
    glow: "radial-gradient(ellipse at 70% 80%, rgba(120,50,60,0.1), transparent 60%), radial-gradient(ellipse at 20% 20%, rgba(60,60,80,0.08), transparent 50%)",
    url: "#71717a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const ShadcnRegistry1 = ({
  name,
  url,
  description,
  logo = "",
  items = [],
  variant = "dark",
}: ShadcnRegistry1Props) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        backgroundImage: theme.glow,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
          <BrandMark
            background={theme.accent}
            radius={logo ? 12 : 999}
            size={48}
            src={logo}
          />
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </div>
        </div>
        <div
          style={{
            color: theme.url,
            fontSize: "28px",
            fontWeight: 500,
          }}
        >
          {url}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "-40px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: url.length > 20 ? 96 : 120,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            textWrap: "balance" as const,
          }}
        >
          {url}
        </div>
        <div
          style={{
            color: theme.description,
            display: "flex",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: 1.3,
            maxWidth: "800px",
            textWrap: "balance" as const,
          }}
        >
          {description}
        </div>
      </div>

      {items.length > 0 && (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "16px",
          }}
        >
          {items.map((item) => (
            <Badge
              background={theme.badgeBackground}
              borderColor={theme.badgeBorder}
              color={theme.badgeColor}
              key={item}
              style={{
                borderRadius: "8px",
                fontSize: "24px",
                fontWeight: 500,
                padding: "12px 20px",
              }}
            >
              {item}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
