import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { BrandMark } from "./ui/brand-mark";

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
    <Badge
      background="rgba(124,58,237,0.15)"
      color="#7c3aed"
      style={{ alignSelf: "flex-start", letterSpacing: "0.02em" }}
      uppercase
    >
      {category}
    </Badge>

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
      <Avatar name={author} src={avatar} />
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
      <BrandMark background="#7c3aed" src={logo} />
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
