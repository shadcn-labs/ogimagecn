import { Badge } from "./ui/badge";
import { BrandMark } from "./ui/brand-mark";

export interface PhotoProps {
  image?: string;
  label: string;
  title: string;
  brand: string;
  logo?: string;
}

export const Photo = ({
  image,
  label,
  title,
  brand,
  logo = "",
}: PhotoProps) => {
  const fallback =
    "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #7c3aed 100%)";

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: image ? `url(${image})` : fallback,
        backgroundPosition: "center",
        backgroundSize: "1200px 630px",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-end",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.85) 100%)",
          bottom: 0,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />

      <Badge
        background="rgba(255,255,255,0.12)"
        borderColor="rgba(255,255,255,0.4)"
        style={{ alignSelf: "flex-start" }}
        uppercase
      >
        {label}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 72 : 88,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          marginTop: "28px",
          maxWidth: "1000px",
          textShadow: "0 2px 24px rgba(0,0,0,0.5)",
        }}
      >
        {title}
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "12px",
          marginTop: "32px",
        }}
      >
        <BrandMark background="rgba(255,255,255,0.2)" size={36} src={logo} />
        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {brand}
        </div>
      </div>
    </div>
  );
};
