import {
  getDitherAvatar,
  getDitherGradient,
} from "@/registry/lib/dither-bitmap";

const AvatarArt = ({
  accent,
  name,
  size,
}: {
  accent: string;
  name: string;
  size: number;
}) => {
  const avatar = getDitherAvatar(name, accent);

  return (
    <div
      style={{
        display: "flex",
        height: `${size}px`,
        position: "relative",
        width: `${size}px`,
      }}
    >
      <img
        height={size}
        src={avatar}
        width={size}
        style={{ filter: "blur(10px)", opacity: 0.3, position: "absolute" }}
      />
      <img
        height={size}
        src={avatar}
        width={size}
        style={{ position: "absolute" }}
      />
    </div>
  );
};

export interface DitherProfileProps {
  accent?: string;
  description?: string;
  eyebrow?: string;
  handle?: string;
  name?: string;
  title?: string;
  website?: string;
}

export const DitherProfile = ({
  accent = "#a885f3",
  description = "Notes on software, systems, and the people who make them.",
  eyebrow = "Author profile",
  handle = "@ada",
  name = "Ada Lovelace",
  title = "Designing systems that feel human.",
  website = "ada.dev",
}: DitherProfileProps) => {
  const wash = getDitherGradient({
    cacheKey: "profile-accent",
    from: accent,
    height: 630,
    to: "#ef8bbd",
    width: 520,
  });

  return (
    <div
      style={{
        backgroundColor: "#080808",
        color: "#ffffff",
        display: "flex",
        fontFamily: "Geist Pixel",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <img
        height={630}
        src={wash}
        width={520}
        style={{
          filter: "blur(18px)",
          opacity: 0.25,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <img
        height={630}
        src={wash}
        width={520}
        style={{ opacity: 0.38, position: "absolute", right: 0, top: 0 }}
      />

      <div
        style={{
          border: "1px solid #292929",
          borderRadius: "22px",
          bottom: "28px",
          display: "flex",
          left: "28px",
          position: "absolute",
          right: "28px",
          top: "28px",
        }}
      />

      <div
        style={{
          alignItems: "center",
          display: "flex",
          left: "62px",
          position: "absolute",
          top: "58px",
        }}
      >
        <div
          style={{
            backgroundColor: accent,
            borderRadius: "999px",
            display: "flex",
            height: "9px",
            marginRight: "12px",
            width: "9px",
          }}
        />
        <span
          style={{
            color: "#8a8a8a",
            fontSize: "14px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          left: "62px",
          position: "absolute",
          top: "154px",
          width: "670px",
        }}
      >
        <span
          style={{
            fontSize: title.length > 38 ? "58px" : "67px",
            letterSpacing: "-0.055em",
            lineHeight: 1.04,
            textWrap: "balance",
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: "#969696",
            fontSize: "20px",
            lineHeight: 1.4,
            marginTop: "24px",
            width: "580px",
          }}
        >
          {description}
        </span>
      </div>

      <div
        style={{
          alignItems: "center",
          bottom: "63px",
          display: "flex",
          gap: "14px",
          left: "62px",
          position: "absolute",
        }}
      >
        <div
          style={{
            border: "1px solid #343434",
            borderRadius: "12px",
            display: "flex",
            height: "54px",
            overflow: "hidden",
            width: "54px",
          }}
        >
          <AvatarArt accent={accent} name={name} size={54} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "17px" }}>{name}</span>
          <span style={{ color: accent, fontSize: "12px", marginTop: "4px" }}>
            {handle} · {website}
          </span>
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgba(11,11,11,0.9)",
          border: "1px solid #343434",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          height: "410px",
          left: "820px",
          padding: "24px",
          position: "absolute",
          top: "110px",
          transform: "rotate(2deg)",
          width: "300px",
        }}
      >
        <AvatarArt accent={accent} name={name} size={252} />
        <div
          style={{
            borderTop: "1px solid #2d2d2d",
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
            paddingTop: "16px",
            width: "250px",
          }}
        >
          <span style={{ fontSize: "20px" }}>{name}</span>
          <span
            style={{ color: "#777777", fontSize: "12px", marginTop: "5px" }}
          >
            Writer · Engineer
          </span>
        </div>
      </div>
    </div>
  );
};
