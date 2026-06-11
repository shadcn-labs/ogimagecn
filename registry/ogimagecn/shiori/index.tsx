/* eslint-disable @next/next/no-img-element */
export interface ShioriProps {
  title: string;
  description: string;
  background: string;
  titleColor: string;
  descriptionColor: string;
  logo: string;
}

export const Shiori = ({
  title,
  description,
  background,
  titleColor,
  descriptionColor,
  logo,
}: ShioriProps) => (
  <div
    style={{
      backgroundColor: background,
      color: titleColor,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "60px",
      position: "relative",
      width: "100%",
    }}
  >
    <img
      alt=""
      height={96}
      src={logo}
      width={96}
      style={{
        borderRadius: "50%",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        bottom: "60px",
        display: "flex",
        justifyContent: "space-between",
        left: "60px",
        position: "absolute",
        right: "60px",
      }}
    >
      <div
        style={{
          color: titleColor,
          flex: 0.25,
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: descriptionColor,
          flex: 0.6,
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.3,
        }}
      >
        {description}
      </div>

      <div style={{ flex: 0.25 }} />
    </div>
  </div>
);
