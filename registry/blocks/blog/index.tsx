import { Avatar } from "@/components/og/avatar";
import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface BlogProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  meta: string;
  avatar?: string;
  brand: string;
  logo?: string;
  /** Card theme. Defaults to `light` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#0a0a0a",
    badgeBackground: "rgba(124,58,237,0.2)",
    badgeColor: "#c4b5fd",
    foreground: "#fafafa",
    muted: "#a1a1aa",
    subtle: "#71717a",
  },
  light: {
    background: "#ffffff",
    badgeBackground: "rgba(124,58,237,0.15)",
    badgeColor: "#7c3aed",
    foreground: "#0a0a0a",
    muted: "#52525b",
    subtle: "#71717a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Blog = ({
  category,
  title,
  excerpt,
  author,
  meta,
  avatar,
  brand,
  logo,
  variant = "light",
}: BlogProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}
    >
      <Badge
        background={theme.badgeBackground}
        color={theme.badgeColor}
        style={{ alignSelf: "flex-start", letterSpacing: "0.02em" }}
        uppercase
      >
        {category}
      </Badge>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 48 ? 64 : 78,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: theme.muted,
            display: "flex",
            fontSize: "34px",
            lineHeight: 1.4,
            marginTop: "28px",
            maxWidth: "920px",
          }}
        >
          {excerpt}
        </div>
      </div>

      <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
        <Avatar name={author} src={avatar} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 600 }}>
            {author}
          </div>
          <div
            style={{ color: theme.subtle, display: "flex", fontSize: "24px" }}
          >
            {meta}
          </div>
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "12px",
          position: "absolute",
          right: "80px",
          top: "80px",
        }}
      >
        <BrandMark background="#7c3aed" src={logo} />
        <div
          style={{
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          {brand}
        </div>
      </div>
    </div>
  );
};
