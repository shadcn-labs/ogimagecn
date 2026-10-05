import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface ProductProps {
  brand: string;
  title: string;
  description: string;
  price: string;
  image?: string;
  logo?: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    background: "#09090b",
    foreground: "#fafafa",
    mediaBackground: "#18181b",
    mediaBorder: "1px solid rgba(250,250,250,0.1)",
    mediaFallback: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    muted: "#a1a1aa",
    priceBackground: "#6366f1",
    priceColor: "#ffffff",
  },
  light: {
    background: "#fafafa",
    foreground: "#09090b",
    mediaBackground: "#e4e4e7",
    mediaBorder: "1px solid rgba(9,9,11,0.08)",
    mediaFallback: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
    muted: "#52525b",
    priceBackground: "#4f46e5",
    priceColor: "#ffffff",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Product = ({
  brand,
  title,
  description,
  price,
  image,
  logo,
  variant = "dark",
}: ProductProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        height: "100%",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          paddingRight: "56px",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
          <BrandMark background="#6366f1" radius={10} size={32} src={logo} />
          <div style={{ display: "flex", fontSize: "28px", fontWeight: 600 }}>
            {brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 28 ? 64 : 76,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "560px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: theme.muted,
              display: "flex",
              fontSize: "30px",
              lineHeight: 1.4,
              marginTop: "24px",
              maxWidth: "520px",
            }}
          >
            {description}
          </div>
        </div>

        <Badge
          background={theme.priceBackground}
          color={theme.priceColor}
          style={{
            alignSelf: "flex-start",
            fontSize: "32px",
            fontWeight: 700,
            padding: "14px 32px",
          }}
        >
          {price}
        </Badge>
      </div>

      <div
        style={{
          alignItems: "center",
          backgroundColor: theme.mediaBackground,
          backgroundImage: image ? `url(${image})` : theme.mediaFallback,
          backgroundPosition: "center",
          backgroundSize: "486px 486px",
          border: theme.mediaBorder,
          borderRadius: "28px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "486px",
        }}
      />
    </div>
  );
};
