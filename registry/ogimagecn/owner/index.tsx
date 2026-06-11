/* eslint-disable @next/next/no-img-element */
export interface OwnerProps {
  eyebrow: string;
  title: string;
  brand: string;
  images: string[];
  logo?: string;
}

export const Owner = ({ eyebrow, title, brand, images, logo }: OwnerProps) => (
  <div
    style={{
      backgroundColor: "#f5f5f5",
      color: "#1a1a1a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "8px",
      width: "100%",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "56px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        padding: "48px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#a3a3a3",
          display: "flex",
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        {eyebrow}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          maxWidth: "800px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          alignItems: "flex-end",
          bottom: "0px",
          display: "flex",
          gap: "16px",
          left: "48px",
          position: "absolute",
          right: "48px",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: "24px 24px 0 0",
              display: "flex",
              flex: 1,
              height: i === 1 ? "300px" : "260px",
              overflow: "hidden",
            }}
          >
            <img
              alt=""
              src={src}
              style={{
                borderRadius: "24px 24px 0 0",
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "8px",
          position: "absolute",
          right: "36px",
          top: "36px",
        }}
      >
        {logo ? (
          <img
            alt=""
            height={32}
            src={logo}
            width={32}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "8px",
              height: "32px",
              width: "32px",
            }}
          />
        )}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
        >
          {brand}
        </div>
      </div>
    </div>
  </div>
);
