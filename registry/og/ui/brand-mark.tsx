import type { CSSProperties, ReactNode } from "react";

export interface BrandMarkProps {
  /** Logo URL or data URI. Satori decodes PNG, JPEG, and GIF only. */
  src?: string;
  size?: number;
  radius?: number | string;
  /** Placeholder tile background when `src` is empty. Accepts colors and gradients. */
  background?: string;
  fit?: "contain" | "cover";
  /** Placeholder tile content when `src` is empty, such as a monogram or icon. */
  children?: ReactNode;
  style?: CSSProperties;
}

export const BrandMark = ({
  src,
  size = 40,
  radius = 8,
  background,
  fit = "contain",
  children,
  style,
}: BrandMarkProps) =>
  src ? (
    // Satori can paint `alt` text onto the image, so it stays empty.
    <img
      alt=""
      height={size}
      src={src}
      width={size}
      style={{ borderRadius: radius, flexShrink: 0, objectFit: fit, ...style }}
    />
  ) : (
    <div
      style={{
        alignItems: "center",
        // Satori throws on `undefined` style values.
        ...(background && { background }),
        borderRadius: radius,
        display: "flex",
        flexShrink: 0,
        height: size,
        justifyContent: "center",
        width: size,
        ...style,
      }}
    >
      {children}
    </div>
  );
