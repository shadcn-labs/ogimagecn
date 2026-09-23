import { Badge } from "./ui/badge";
import { BrandMark } from "./ui/brand-mark";

export interface TerminalProps {
  brand: string;
  title: string;
  caption?: string;
  logo?: string;
}

export const Terminal = ({ brand, title, caption, logo }: TerminalProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
      <BrandMark background="#22c55e" size={44} src={logo} />
      <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
        {brand}
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 28 ? 84 : 104,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      {caption ? (
        <Badge
          background="rgba(250,250,250,0.06)"
          borderColor="rgba(250,250,250,0.12)"
          color="#22c55e"
          style={{
            alignSelf: "flex-start",
            borderRadius: "10px",
            fontSize: "30px",
            marginTop: "36px",
            padding: "12px 24px",
          }}
        >
          {caption}
        </Badge>
      ) : null}
    </div>
  </div>
);
