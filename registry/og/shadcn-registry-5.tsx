import { BrandMark } from "./ui/brand-mark";
import { GridLines } from "./ui/grid-lines";

export interface ShadcnRegistry5Props {
  name: string;
  title: string;
  description?: string;
  logo?: string;
}

export const ShadcnRegistry5 = ({
  name,
  title,
  description = "",
  logo = "",
}: ShadcnRegistry5Props) => (
  <div
    style={{
      backgroundColor: "#fafafa",
      color: "#0a0a0a",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Grid lines — matching grid/index.tsx */}
    <GridLines />

    {/* Main content — absolutely positioned in center */}
    <div
      style={{
        alignItems: "center",
        bottom: "128px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        left: "128px",
        position: "absolute",
        right: "128px",
        textAlign: "center",
        top: "128px",
        width: "896px",
      }}
    >
      {/* Logo + Name */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <BrandMark background="rgba(0,0,0,0.3)" radius={12} src={logo} />
        <div style={{ color: "#18181b", fontSize: "28px", fontWeight: 600 }}>
          {name}
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          fontSize: title.length > 30 ? 72 : 88,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          textWrap: "balance",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description ? (
        <div
          style={{
            color: "#71717a",
            display: "flex",
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: 1.5,
            marginTop: "32px",
            textWrap: "balance",
          }}
        >
          {description}
        </div>
      ) : null}
    </div>
  </div>
);
