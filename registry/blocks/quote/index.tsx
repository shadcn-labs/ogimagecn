import { Avatar } from "@/components/og/avatar";

export type Variant = "light" | "dark";

export interface QuoteProps {
  quote: string;
  author: string;
  handle: string;
  avatar?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    // The quote glyph and avatar tile share the accent.
    accent: "#f472b6",
    background: "#18181b",
    foreground: "#fafafa",
    muted: "#a1a1aa",
    // The initials sit on the accent tile, so they need the card colour.
    onAccent: "#18181b",
  },
  light: {
    // A deeper pink keeps the glyph legible on white.
    accent: "#db2777",
    background: "#ffffff",
    foreground: "#18181b",
    muted: "#57534e",
    onAccent: "#ffffff",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Quote = ({
  quote,
  author,
  handle,
  avatar,
  variant = "dark",
}: QuoteProps) => {
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
        padding: "96px",
        width: "100%",
      }}
    >
      <div
        style={{
          color: theme.accent,
          display: "flex",
          fontSize: "140px",
          fontWeight: 800,
          lineHeight: 0.8,
        }}
      >
        &ldquo;
      </div>

      <div
        style={{
          display: "flex",
          fontSize: quote.length > 90 ? 52 : 64,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          marginTop: "8px",
          maxWidth: "1000px",
        }}
      >
        {quote}
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "20px",
          marginTop: "56px",
        }}
      >
        <Avatar
          background={theme.accent}
          color={theme.onAccent}
          name={author}
          size={76}
          src={avatar}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 600 }}>
            {author}
          </div>
          <div
            style={{ color: theme.muted, display: "flex", fontSize: "26px" }}
          >
            {handle}
          </div>
        </div>
      </div>
    </div>
  );
};
