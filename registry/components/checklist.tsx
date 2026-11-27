export interface ChecklistProps {
  /** Lines of the list, in order. Each one gets its own checkmark. */
  items: string[];
  /** Color of the checkmarks. The text inherits its color from the parent. */
  color?: string;
  /** Space between items in pixels. */
  gap?: number;
  /** Checkmark and text size in pixels. */
  size?: number;
}

/** A vertical list of checkmarked lines, such as features or shipped changes. */
export const Checklist = ({
  items,
  color = "#34d399",
  gap = 20,
  size = 34,
}: ChecklistProps) => {
  const lineHeight = Math.round(size * 1.3);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // With `maxWidth`, keeps the list inside its parent so long items wrap.
        flexShrink: 1,
        gap,
        maxWidth: "100%",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", gap: Math.round(size * 0.5) }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexShrink: 0,
              // One line tall, so the mark stays on the first line of a wrapped item.
              height: lineHeight,
            }}
          >
            <svg
              fill="none"
              height={size}
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              width={size}
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              // Satori only breaks lines at the width left beside the mark when
              // the text box can wrap.
              flexWrap: "wrap",
              fontSize: size,
              lineHeight: `${lineHeight}px`,
              wordBreak: "break-word",
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
