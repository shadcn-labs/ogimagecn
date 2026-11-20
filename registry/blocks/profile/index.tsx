import { Avatar } from "@/components/og/avatar";
import { Badge } from "@/components/og/badge";

export interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  website: string;
}

export const Profile = ({ name, role, bio, avatar, website }: ProfileProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#18181b",
      backgroundImage:
        "radial-gradient(circle at 0% 100%, rgba(244,63,94,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      gap: "64px",
      height: "100%",
      padding: "80px",
      width: "100%",
    }}
  >
    <Avatar
      background="#f43f5e"
      name={name}
      size={300}
      src={avatar}
      style={{ border: "4px solid rgba(250,250,250,0.15)", fontSize: "120px" }}
    />

    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <div
        style={{
          display: "block",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineClamp: 1,
          lineHeight: 1.05,
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: "#f43f5e",
          display: "block",
          fontSize: "34px",
          fontWeight: 600,
          lineClamp: 2,
          marginTop: "12px",
          wordBreak: "break-word",
        }}
      >
        {role}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "block",
          fontSize: "28px",
          lineClamp: 4,
          lineHeight: 1.4,
          marginTop: "24px",
          maxWidth: "560px",
          wordBreak: "break-word",
        }}
      >
        {bio}
      </div>
      <Badge
        background="rgba(250,250,250,0.06)"
        borderColor="rgba(250,250,250,0.12)"
        color="#d4d4d8"
        style={{
          alignSelf: "flex-start",
          fontWeight: 500,
          marginTop: "32px",
          padding: "10px 24px",
        }}
      >
        {website}
      </Badge>
    </div>
  </div>
);
