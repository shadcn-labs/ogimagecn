export interface ProgressBarProps {
  /** Current value, clamped between 0 and `max`. */
  value: number;
  /** Value that fills the whole track. */
  max?: number;
  /** Text shown above the track, on the left. */
  label?: string;
  /** Shows the rounded percentage above the track, on the right. */
  showPercent?: boolean;
  /** Fill color. */
  color?: string;
  /** Track color behind the fill. */
  trackColor?: string;
  /** Track height in pixels. */
  height?: number;
  /** Space between the label row and the track in pixels. */
  gap?: number;
}

/** A horizontal progress track that fills to `value / max`. */
export const ProgressBar = ({
  value,
  max = 100,
  label,
  showPercent = false,
  color = "#a78bfa",
  trackColor = "rgba(250,250,250,0.12)",
  height = 16,
  gap = 14,
}: ProgressBarProps) => {
  const ratio = max > 0 ? Math.min(Math.max(value / max, 0), 1) : 0;
  const percent = Math.round(ratio * 100);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap, width: "100%" }}
    >
      {(label || showPercent) && (
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            fontWeight: 600,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>{label ?? ""}</div>
          {showPercent && (
            <div style={{ color, display: "flex" }}>{`${percent}%`}</div>
          )}
        </div>
      )}
      <div
        style={{
          backgroundColor: trackColor,
          borderRadius: "999px",
          display: "flex",
          height,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: color,
            borderRadius: "999px",
            display: "flex",
            height: "100%",
            width: `${ratio * 100}%`,
          }}
        />
      </div>
    </div>
  );
};
