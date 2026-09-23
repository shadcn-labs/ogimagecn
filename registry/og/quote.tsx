import { Avatar } from "./ui/avatar";

export interface QuoteProps {
  quote: string;
  author: string;
  handle: string;
  avatar?: string;
}

export const Quote = ({ quote, author, handle, avatar }: QuoteProps) => (
  <div
    style={{
      backgroundColor: "#18181b",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "96px",
      width: "100%",
    }}
  >
    <div
      style={{
        color: "#f472b6",
        display: "flex",
        fontSize: "140px",
        fontWeight: 800,
        lineHeight: 0.8,
      }}
    >
      &ldquo;
    </div>

    <div
      style={{
        display: "flex",
        fontSize: quote.length > 90 ? 52 : 64,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
        marginTop: "8px",
        maxWidth: "1000px",
      }}
    >
      {quote}
    </div>

    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "20px",
        marginTop: "56px",
      }}
    >
      <Avatar
        background="#f472b6"
        color="#18181b"
        name={author}
        size={76}
        src={avatar}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: "32px", fontWeight: 600 }}>
          {author}
        </div>
        <div style={{ color: "#a1a1aa", display: "flex", fontSize: "26px" }}>
          {handle}
        </div>
      </div>
    </div>
  </div>
);
