import { BrandMark } from "./ui/brand-mark";
import { GridLines } from "./ui/grid-lines";

export interface GridProps {
  title: string;
  description: string;
  brand: string;
  logo?: string;
}

export const Grid = ({ title, description, brand, logo = "" }: GridProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    <GridLines />

    <div
      style={{
        bottom: "128px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        left: "128px",
        position: "absolute",
        right: "128px",
        top: "128px",
        width: "896px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          fontSize: title && title.length > 20 ? 64 : 80,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          textWrap: "balance",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#a8a29e",
          display: "flex",
          flexGrow: 1,
          fontSize: "40px",
          fontWeight: 500,
          lineHeight: 1.5,
          marginTop: "24px",
          textWrap: "balance",
        }}
      >
        {description}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "96px",
        display: "flex",
        gap: "14px",
        position: "absolute",
        right: "96px",
      }}
    >
      <BrandMark background="#ffffff" radius={12} size={48} src={logo} />
      <span
        style={{
          fontSize: "30px",
          fontWeight: 600,
        }}
      >
        {brand}
      </span>
    </div>
  </div>
);
