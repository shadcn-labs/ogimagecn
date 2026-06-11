/* eslint-disable @next/next/no-img-element */
export interface BlogProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  meta: string;
  avatar?: string;
  brand: string;
  logo?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Blog = ({
  category,
  title,
  excerpt,
  author,
  meta,
  avatar,
  brand,
  logo,
}: BlogProps) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      color: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        alignSelf: "flex-start",
        backgroundColor: "rgba(124,58,237,0.15)",
        borderRadius: "999px",
        color: "#7c3aed",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        letterSpacing: "0.02em",
        padding: "10px 22px",
        textTransform: "uppercase",
      }}
    >
      {category}
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 48 ? 64 : 78,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          maxWidth: "1000px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#52525b",
          display: "flex",
          fontSize: "34px",
          lineHeight: 1.4,
          marginTop: "28px",
          maxWidth: "920px",
        }}
      >
        {excerpt}
      </div>
    </div>

    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      {avatar ? (
        <img
          alt={author}
          src={avatar}
          width={72}
          height={72}
          style={{ borderRadius: "999px" }}
        />
      ) : (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#7c3aed",
            borderRadius: "999px",
            color: "#ffffff",
            display: "flex",
            fontSize: "30px",
            fontWeight: 700,
            height: "72px",
            justifyContent: "center",
            width: "72px",
          }}
        >
          {initials(author)}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: "30px", fontWeight: 600 }}>
          {author}
        </div>
        <div style={{ color: "#71717a", display: "flex", fontSize: "24px" }}>
          {meta}
        </div>
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "12px",
        position: "absolute",
        right: "80px",
        top: "80px",
      }}
    >
      {logo ? (
        <img
          alt=""
          height={40}
          src={logo}
          width={40}
          style={{
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#7c3aed",
            borderRadius: "8px",
            color: "#ffffff",
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            height: "40px",
            justifyContent: "center",
            width: "40px",
          }}
        />
      )}
      <div
        style={{
          fontSize: "32px",
          fontWeight: 700,
        }}
      >
        {brand}
      </div>
    </div>
  </div>
);
