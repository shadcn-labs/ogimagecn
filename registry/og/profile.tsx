import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";

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

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: "#f43f5e",
          display: "flex",
          fontSize: "34px",
          fontWeight: 600,
          marginTop: "12px",
        }}
      >
        {role}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "28px",
          lineHeight: 1.4,
          marginTop: "24px",
          maxWidth: "560px",
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
