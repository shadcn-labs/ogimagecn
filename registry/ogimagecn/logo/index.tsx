export interface LogoProps {
  brand: string;
  tagline?: string;
  monogram?: string;
  accent?: string;
  background: string;
}

export const Logo = ({
  brand,
  tagline,
  monogram,
  accent,
  background,
}: LogoProps) => {
  const isColor = background.startsWith("#");

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: isColor ? background : "#09090b",
        backgroundImage: isColor
          ? `radial-gradient(circle at 50% 50%, ${accent}33, transparent 60%)`
          : background,
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: accent,
          borderRadius: "28px",
          boxShadow: `0 24px 80px ${accent}55`,
          color: "#ffffff",
          display: "flex",
          fontSize: "72px",
          fontWeight: 800,
          height: "140px",
          justifyContent: "center",
          width: "140px",
        }}
      >
        {monogram ?? brand.charAt(0).toUpperCase()}
      </div>

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
