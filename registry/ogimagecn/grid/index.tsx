/* eslint-disable @next/next/no-img-element */
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
    <div
      style={{
        borderLeft: "1px dashed #292929",
        bottom: 0,
        left: "64px",
        position: "absolute",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderLeft: "1px dashed #292929",
        bottom: 0,
        position: "absolute",
        right: "64px",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderTop: "1px dashed #292929",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
        top: "64px",
      }}
    />
    <div
      style={{
        borderTop: "1px dashed #292929",
        bottom: "64px",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
      }}
    />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        left: "128px",
        position: "absolute",
        right: "128px",
        top: "128px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 68 : 84,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          maxWidth: "880px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#a3a3a3",
          display: "flex",
          fontSize: "34px",
          lineHeight: 1.4,
          marginTop: "32px",
          maxWidth: "780px",
        }}
      >
        {description}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "104px",
        display: "flex",
        fontSize: "30px",
        fontWeight: 600,
        gap: "14px",
        position: "absolute",
        right: "104px",
      }}
    >
      {logo ? (
        <img
          alt=""
          height={44}
          src={logo}
          width={44}
          style={{
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#22d3ee",
            borderRadius: "12px",
            color: "#0a0a0a",
            display: "flex",
            fontSize: "26px",
            fontWeight: 800,
            height: "44px",
            justifyContent: "center",
            width: "44px",
          }}
        />
      )}
      {brand}
    </div>
  </div>
);
