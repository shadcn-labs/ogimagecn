import { Avatar } from "@/components/og/avatar";
import { Badge } from "@/components/og/badge";

export type Variant = "light" | "dark";

export interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  website: string;
  /** Card theme. Defaults to `dark` to match the original design. */
  variant?: Variant;
}

const themes = {
  dark: {
    accent: "#f43f5e",
    avatarRing: "rgba(250,250,250,0.15)",
    background: "#18181b",
    badgeBackground: "rgba(250,250,250,0.06)",
    badgeBorder: "rgba(250,250,250,0.12)",
    badgeColor: "#d4d4d8",
    bio: "#a1a1aa",
    foreground: "#fafafa",
    glow: "radial-gradient(circle at 0% 100%, rgba(244,63,94,0.18), transparent 55%)",
  },
  light: {
    accent: "#e11d48",
    avatarRing: "rgba(9,9,11,0.12)",
    background: "#ffffff",
    badgeBackground: "rgba(9,9,11,0.04)",
    badgeBorder: "rgba(9,9,11,0.1)",
    badgeColor: "#3f3f46",
    bio: "#52525b",
    foreground: "#18181b",
    glow: "radial-gradient(circle at 0% 100%, rgba(244,63,94,0.12), transparent 55%)",
  },
} as const satisfies Record<Variant, Record<string, string>>;

export const Profile = ({
  name,
  role,
  bio,
  avatar,
  website,
  variant = "dark",
}: ProfileProps) => {
  const theme = themes[variant];

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme.background,
        backgroundImage: theme.glow,
        color: theme.foreground,
        display: "flex",
        gap: "64px",
        height: "100%",
        padding: "80px",
        width: "100%",
      }}
    >
      <Avatar
        background={theme.accent}
        name={name}
        size={300}
        src={avatar}
        style={{ border: `4px solid ${theme.avatarRing}`, fontSize: "120px" }}
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
            color: theme.accent,
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
            color: theme.bio,
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
          background={theme.badgeBackground}
          borderColor={theme.badgeBorder}
          color={theme.badgeColor}
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
};
