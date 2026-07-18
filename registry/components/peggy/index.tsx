export interface PeggyProps {
  title: string;
  subtitle: string;
  images?: string[];
  logo?: string;
}

export const Peggy = ({ title, subtitle, images = [], logo }: PeggyProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      position: "relative",
      width: "100%",
    }}
  >
    {images.length > 0 && (
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          position: "absolute",
          top: "40px",
          width: "100%",
        }}
      >
        {images.slice(0, 5).map((img, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              height: "120px",
              overflow: "hidden",
              width: "150px",
            }}
          >
            <img
              alt=""
              height={120}
              src={img}
              style={{ objectFit: "cover", width: "100%" }}
              width={150}
            />
          </div>
        ))}
      </div>
    )}

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "780px",
        padding: "0 40px",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: "32px",
        }}
      >
        {logo ? (
          <img
            alt="Peggy logo"
            height={64}
            src={logo}
            style={{ objectFit: "contain" }}
            width={64}
          />
        ) : (
          <svg
            fill="none"
            height={64}
            stroke="currentColor"
            strokeWidth={1.5}
            style={{ color: "#1a1a1a" }}
            viewBox="0 0 24 24"
            width={64}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 14c-2.76 0-5.17-1.73-6.08-4.14.02-2.62 4.08-4.07 6.08-4.07s6.06 1.45 6.08 4.07C17.17 17.77 14.76 19.5 12 19.5z"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        )}
      </div>

      <div
        style={{
          color: "#1a1a1a",
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: title.length > 60 ? 52 : 62,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#666666",
          fontSize: "26px",
          fontWeight: 400,
          lineHeight: 1.5,
          marginBottom: "40px",
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#1a1a1a",
          borderRadius: "4px",
          color: "#ffffff",
          display: "flex",
          fontSize: "28px",
          fontWeight: 500,
          gap: "12px",
          padding: "20px 60px",
        }}
      >
        Sign up
        <span style={{ fontSize: "24px" }}>{">"}</span>
      </div>
    </div>

    {images.length > 5 && (
      <div
        style={{
          bottom: "40px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
        }}
      >
        {images.slice(5, 10).map((img, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              height: "120px",
              overflow: "hidden",
              width: "150px",
            }}
          >
            <img
              alt=""
              height={120}
              src={img}
              style={{ objectFit: "cover", width: "100%" }}
              width={150}
            />
          </div>
        ))}
      </div>
    )}
  </div>
);
