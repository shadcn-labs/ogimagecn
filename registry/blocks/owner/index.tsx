import { BrandMark } from "@/components/og/brand-mark";

export type Variant = "light" | "dark";

export interface OwnerProps {
  eyebrow: string;
  title: string;
  brand: string;
  images: string[];
  logo?: string;
  /** Card theme. Defaults to `light` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    card: "#18181b",
    eyebrow: "#52525b",
    foreground: "#fafafa",
    frame: "#09090b",
    mark: "#fafafa",
  },
  light: {
    // The block paints a full-bleed frame around an inset card.
    card: "#ffffff",
    eyebrow: "#a3a3a3",
    foreground: "#1a1a1a",
    frame: "#f5f5f5",
    mark: "#1a1a1a",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Owner = ({
  eyebrow,
  title,
  brand,
  images,
  logo,
  variant = "light",
}: OwnerProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        backgroundColor: theme.frame,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "8px",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: theme.card,
          borderRadius: "56px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          padding: "48px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            color: theme.eyebrow,
            display: "flex",
            fontSize: "64px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "800px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            alignItems: "flex-end",
            bottom: "0px",
            display: "flex",
            gap: "16px",
            left: "48px",
            position: "absolute",
            right: "48px",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                borderRadius: "24px 24px 0 0",
                display: "flex",
                flex: 1,
                height: i === 1 ? "300px" : "260px",
                overflow: "hidden",
              }}
            >
              <img
                alt=""
                src={src}
                style={{
                  borderRadius: "24px 24px 0 0",
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "8px",
            position: "absolute",
            right: "36px",
            top: "36px",
          }}
        >
          <BrandMark background={theme.mark} size={32} src={logo} />
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            {brand}
          </div>
        </div>
      </div>
    </div>
  );
};
