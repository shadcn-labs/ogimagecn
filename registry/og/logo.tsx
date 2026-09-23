import { BrandMark } from "./ui/brand-mark";

export interface LogoProps {
  brand: string;
  tagline?: string;
  monogram?: string;
  background: string;
  logo?: string;
}

export const Logo = ({
  brand,
  tagline,
  monogram,
  background,
  logo = "",
}: LogoProps) => {
  const isColor = background.startsWith("#");

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: isColor ? background : "#09090b",
        backgroundImage: isColor
          ? `radial-gradient(circle at 50% 50%, rgba(124,58,237,0.2), transparent 60%)`
          : background,
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <BrandMark
        background="#7c3aed"
        radius={28}
        size={140}
        src={logo}
        style={
          logo
            ? undefined
            : {
                boxShadow: "0 24px 80px rgba(124,58,237,0.33)",
                color: "#ffffff",
                fontSize: "72px",
                fontWeight: 800,
              }
        }
      >
        {monogram}
      </BrandMark>

      <div
        style={{
          display: "flex",
          fontSize: "96px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          marginTop: "44px",
        }}
      >
        {brand}
      </div>

      {tagline ? (
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: "32px",
            marginTop: "16px",
          }}
        >
          {tagline}
        </div>
      ) : null}
    </div>
  );
};
