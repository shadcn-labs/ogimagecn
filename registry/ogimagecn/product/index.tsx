export interface ProductProps {
  brand: string;
  title: string;
  description: string;
  price: string;
  image?: string;
  accent?: string;
}

export const Product = ({
  brand,
  title,
  description,
  price,
  image,
  accent,
}: ProductProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      height: "100%",
      padding: "72px",
      width: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: "56px",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
        <div
          style={{
            backgroundColor: accent,
            borderRadius: "10px",
            height: "32px",
            width: "32px",
          }}
        />
        <div style={{ display: "flex", fontSize: "28px", fontWeight: 600 }}>
          {brand}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 64 : 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "560px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: "30px",
            lineHeight: 1.4,
            marginTop: "24px",
            maxWidth: "520px",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          alignSelf: "flex-start",
          backgroundColor: accent,
          borderRadius: "999px",
          color: "#ffffff",
          display: "flex",
          fontSize: "32px",
          fontWeight: 700,
          padding: "14px 32px",
        }}
      >
        {price}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        backgroundColor: "#18181b",
        backgroundImage: image
          ? `url(${image})`
          : "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        backgroundPosition: "center",
        backgroundSize: "486px 486px",
        border: "1px solid rgba(250,250,250,0.1)",
        borderRadius: "28px",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "486px",
      }}
    />
  </div>
);
