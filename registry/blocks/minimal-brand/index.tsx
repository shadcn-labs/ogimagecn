import { BrandMark } from "@/components/og/brand-mark";

export interface MinimalBrandProps {
  brand: string;
  tagline: string;
  logo?: string;
}

export const MinimalBrand = ({ brand, tagline, logo }: MinimalBrandProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#fafafa",
      color: "#18181b",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      width: "100%",
    }}
  >
    <BrandMark
      background="#18181b"
      radius={20}
      size={88}
      src={logo}
      style={
        logo
          ? undefined
          : { color: "#fafafa", fontSize: "44px", fontWeight: 600 }
      }
    >
      {([...brand][0] ?? "").toUpperCase()}
    </BrandMark>

    <div
      style={{
        display: "flex",
        fontSize: "88px",
        fontWeight: 600,
        letterSpacing: "-0.04em",
        marginTop: "40px",
      }}
    >
      {brand}
    </div>

    <div
      style={{
        color: "#71717a",
        display: "flex",
        fontSize: "32px",
        lineHeight: 1.4,
        marginTop: "16px",
        maxWidth: "860px",
        textAlign: "center",
      }}
    >
      {tagline}
    </div>
  </div>
);
