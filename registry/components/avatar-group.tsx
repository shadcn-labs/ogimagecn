import { Avatar } from "@/components/og/avatar";

export interface AvatarGroupProps {
  /** Names of the people in display order. An avatar without an image shows the initials. */
  names: string[];
  /** Image URLs or data URIs, matched to `names` by index. Satori decodes PNG, JPEG, and GIF only. */
  srcs?: string[];
  /** Most avatars to show. The rest are counted in a `+N` tile. */
  max?: 3 | 4;
  /** Diameter of each avatar in pixels. */
  size?: number;
  /** How far each avatar overlaps the previous one, in pixels. */
  overlap?: number;
  /** Color of the ring around each avatar. Match it to the background behind the group. */
  ringColor?: string;
}

/** A row of overlapping avatars with a `+N` tile for the people that don't fit. */
export const AvatarGroup = ({
  names,
  srcs = [],
  max = 4,
  size = 72,
  overlap = Math.round(size / 6),
  ringColor = "#ffffff",
}: AvatarGroupProps) => {
  const shown = names.slice(0, max);
  const hidden = names.length - shown.length;
  const ring = `${Math.max(2, Math.round(size / 18))}px solid ${ringColor}`;

  return (
    <div style={{ display: "flex" }}>
      {shown.map((name, index) => (
        <Avatar
          key={index}
          name={name}
          size={size}
          src={srcs[index]}
          style={{ border: ring, marginLeft: index === 0 ? 0 : -overlap }}
        />
      ))}
      {hidden > 0 ? (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#27272a",
            border: ring,
            borderRadius: "999px",
            color: "#fafafa",
            display: "flex",
            flexShrink: 0,
            fontSize: Math.round(size * 0.36),
            fontWeight: 700,
            height: size,
            justifyContent: "center",
            marginLeft: -overlap,
            width: size,
          }}
        >
          {`+${hidden}`}
        </div>
      ) : null}
    </div>
  );
};
