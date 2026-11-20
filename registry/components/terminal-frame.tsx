import type { CSSProperties, ReactNode } from "react";

export interface TerminalFrameProps {
  /** Output lines. Each child renders on its own row. */
  children?: ReactNode;
  /** Text centered in the title bar. */
  title?: string;
  /** Prompt for the last row, followed by a cursor. Pass `""` to hide the row. */
  prompt?: string;
  /** Font family of the body. Load a monospace font in Satori for it to apply. */
  fontFamily?: string;
  /** Body font size in pixels. */
  fontSize?: number;
  style?: CSSProperties;
}

const DOTS = ["#ff5f57", "#febc2e", "#28c840"];

/** Terminal window chrome with traffic light dots, a title bar and monospace rows. */
export const TerminalFrame = ({
  children,
  title,
  prompt = "$",
  fontFamily = "monospace",
  fontSize = 28,
  style,
}: TerminalFrameProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      border: "1px solid rgba(250,250,250,0.12)",
      borderRadius: "16px",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      width: "100%",
      ...style,
    }}
  >
    <div
      style={{
        alignItems: "center",
        backgroundColor: "rgba(250,250,250,0.06)",
        borderBottom: "1px solid rgba(250,250,250,0.1)",
        display: "flex",
        height: "52px",
        padding: "0px 20px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        {DOTS.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              borderRadius: "999px",
              display: "flex",
              height: "14px",
              width: "14px",
            }}
          />
        ))}
      </div>
      {title && (
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: "20px",
            justifyContent: "center",
            left: 0,
            position: "absolute",
            right: 0,
          }}
        >
          {title}
        </div>
      )}
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily,
        fontSize,
        gap: Math.round(fontSize * 0.4),
        lineHeight: 1.4,
        padding: "28px 32px",
      }}
    >
      {children}
      {prompt && (
        <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
          <div style={{ color: "#22c55e", display: "flex" }}>{prompt}</div>
          <div
            style={{
              backgroundColor: "#fafafa",
              display: "flex",
              height: Math.round(fontSize * 1.1),
              width: Math.round(fontSize * 0.55),
            }}
          />
        </div>
      )}
    </div>
  </div>
);
