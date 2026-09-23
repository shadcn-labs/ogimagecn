export interface GridLinesProps {
  /** Distance of each line from its edge of the canvas, in px. */
  inset?: number;
  color?: string;
  variant?: "solid" | "dashed";
}

/**
 * Four edge-to-edge guide lines framing the canvas. Place it first inside a
 * `position: "relative"` parent so later siblings paint above it.
 */
export const GridLines = ({
  inset = 64,
  color = "#44403c",
  variant = "dashed",
}: GridLinesProps) => {
  const border = `1px ${variant} ${color}`;

  return (
    // Satori lays out fragments as a zero-size box, so the lines need a real
    // wrapper that covers the parent.
    <div
      style={{
        bottom: 0,
        display: "flex",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
      }}
    >
      <div
        style={{
          borderLeft: border,
          bottom: 0,
          left: inset,
          position: "absolute",
          top: 0,
          width: "1px",
        }}
      />
      <div
        style={{
          borderLeft: border,
          bottom: 0,
          position: "absolute",
          right: inset,
          top: 0,
          width: "1px",
        }}
      />
      <div
        style={{
          borderTop: border,
          height: "1px",
          left: 0,
          position: "absolute",
          right: 0,
          top: inset,
        }}
      />
      <div
        style={{
          borderTop: border,
          bottom: inset,
          height: "1px",
          left: 0,
          position: "absolute",
          right: 0,
        }}
      />
    </div>
  );
};
