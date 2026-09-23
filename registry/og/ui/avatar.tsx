import type { CSSProperties } from "react";

export interface AvatarProps {
  /** Person's name. Its initials fill the circle when `src` is empty. */
  name: string;
  /** Image URL or data URI. Satori decodes PNG, JPEG, and GIF only. */
  src?: string;
  size?: number;
  background?: string;
  color?: string;
  style?: CSSProperties;
}

export const Avatar = ({
  name,
  src,
  size = 72,
  background = "#7c3aed",
  color = "#ffffff",
  style,
}: AvatarProps) =>
  src ? (
    // Satori can paint `alt` text onto the image, so it stays empty.
    <img
      alt=""
      height={size}
      src={src}
      width={size}
      style={{
        borderRadius: "999px",
        flexShrink: 0,
        objectFit: "cover",
        ...style,
      }}
    />
  ) : (
    <div
      style={{
        alignItems: "center",
        backgroundColor: background,
        borderRadius: "999px",
        color,
        display: "flex",
        flexShrink: 0,
        fontSize: Math.round(size * 0.42),
        fontWeight: 700,
        height: size,
        justifyContent: "center",
        width: size,
        ...style,
      }}
    >
      {name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase()}
    </div>
  );
