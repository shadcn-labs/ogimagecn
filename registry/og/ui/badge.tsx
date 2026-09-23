import type { CSSProperties, ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  color?: string;
  background?: string;
  /** Draws a 1px solid border in this color. */
  borderColor?: string;
  uppercase?: boolean;
  style?: CSSProperties;
}

/**
 * Pill label. Column parents stretch it to full width; pass
 * `style={{ alignSelf: "flex-start" }}` to keep it hugging its content.
 */
export const Badge = ({
  children,
  color,
  background,
  borderColor,
  uppercase = false,
  style,
}: BadgeProps) => (
  <div
    style={{
      alignItems: "center",
      borderRadius: "999px",
      display: "flex",
      fontSize: "26px",
      fontWeight: 600,
      gap: "12px",
      padding: "10px 22px",
      // Satori throws on `undefined` style values, so optional ones are spread in.
      ...(background && { backgroundColor: background }),
      ...(borderColor && { border: `1px solid ${borderColor}` }),
      ...(color && { color }),
      ...(uppercase && { letterSpacing: "0.04em", textTransform: "uppercase" }),
      ...style,
    }}
  >
    {children}
  </div>
);
