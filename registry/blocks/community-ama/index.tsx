import { Avatar } from "@/components/og/avatar";
import { Badge } from "@/components/og/badge";

export interface CommunityAmaProps {
  label: string;
  title: string;
  guest: string;
  role: string;
  date: string;
  brand: string;
  avatar?: string;
}

export const CommunityAma = ({
  label,
  title,
  guest,
  role,
  date,
  brand,
  avatar = "",
}: CommunityAmaProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 0% 100%, rgba(52,211,153,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Badge
        background="rgba(52,211,153,0.15)"
        borderColor="rgba(52,211,153,0.4)"
        color="#34d399"
        uppercase
      >
        {label}
      </Badge>
      <div style={{ color: "#a1a1aa", display: "flex", fontSize: "28px" }}>
        {brand}
      </div>
    </div>

    <div style={{ alignItems: "center", display: "flex", gap: "56px" }}>
      <Avatar
        background="#34d399"
        color="#0a0a0a"
        name={guest}
        size={200}
        src={avatar}
        style={{ border: "4px solid rgba(52,211,153,0.5)" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexShrink: 1,
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 64 : 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: "32px", gap: "14px" }}>
          <div style={{ display: "flex", fontWeight: 600 }}>{guest}</div>
          <div style={{ color: "#52525b", display: "flex" }}>·</div>
          <div style={{ color: "#a1a1aa", display: "flex" }}>{role}</div>
        </div>
      </div>
    </div>

    <Badge
      borderColor="#27272a"
      color="#e4e4e7"
      style={{ alignSelf: "flex-start" }}
    >
      <svg
        fill="none"
        height="26"
        stroke="#34d399"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="26"
      >
        <rect height="18" rx="2" width="18" x="3" y="4" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      {date}
    </Badge>
  </div>
);
