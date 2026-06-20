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

      <div
        style={{
          alignSelf: "flex-start",
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "999px",
          display: "flex",
          fontSize: "26px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          padding: "10px 22px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>

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
        {logo ? (
          <img
            alt=""
            height={36}
            src={logo}
            width={36}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "#ffffff",
              display: "flex",
              fontSize: "16px",
              fontWeight: 700,
              height: "36px",
              justifyContent: "center",
              width: "36px",
            }}
          />
        )}
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
