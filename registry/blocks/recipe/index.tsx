import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

export interface RecipeProps {
  title: string;
  description: string;
  duration: string;
  servings: string;
  brand: string;
  logo?: string;
}

export const Recipe = ({
  title,
  description,
  duration,
  servings,
  brand,
  logo,
}: RecipeProps) => (
  <div
    style={{
      backgroundColor: "#fffbf5",
      color: "#1c1917",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
      <BrandMark background="#ea580c" src={logo} />
      <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
        {brand}
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? 68 : 84,
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
          color: "#57534e",
          display: "flex",
          fontSize: "34px",
          lineHeight: 1.4,
          marginTop: "28px",
          maxWidth: "920px",
        }}
      >
        {description}
      </div>
    </div>

    <div style={{ display: "flex", gap: "16px" }}>
      <Badge background="rgba(234,88,12,0.12)" color="#c2410c">
        {duration}
      </Badge>
      <Badge background="rgba(234,88,12,0.12)" color="#c2410c">
        {servings}
      </Badge>
    </div>
  </div>
);
