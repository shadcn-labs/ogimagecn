/* eslint-disable @next/next/no-img-element */
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
      {logo ? (
        <img
          alt=""
          height={140}
          src={logo}
          width={140}
          style={{
            borderRadius: "28px",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#7c3aed",
            borderRadius: "28px",
            boxShadow: "0 24px 80px rgba(124,58,237,0.33)",
            color: "#ffffff",
            display: "flex",
            fontSize: "72px",
            fontWeight: 800,
            height: "140px",
            justifyContent: "center",
            width: "140px",
          }}
        >
          {monogram}
        </div>
      )}

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
