export interface StatRowProps {
  /** Stats rendered left to right. Each entry shows its value above its label. */
  stats: { label: string; value: string }[];
  /** Draws a 1px vertical rule to the left of every column except the first. */
  divider?: boolean;
  /** Columns per row before wrapping. Omit to keep every stat in one row. */
  columns?: number;
}

/**
 * A row of label/value stats sized for Satori OG images. Columns share the
 * row equally and wrap onto a new line when `columns` is set.
 */
export const StatRow = ({ stats, divider = false, columns }: StatRowProps) => {
  const perRow =
    columns !== undefined && Number.isFinite(columns) && columns >= 1
      ? Math.floor(columns)
      : undefined;
  // Kept just under 100 / perRow so a full row never rounds past the container.
  const basis = perRow ? `${Math.floor(10_000 / perRow) / 100}%` : 0;

  return (
    <div
      style={{
        alignItems: "stretch",
        display: "flex",
        flexDirection: "row",
        flexWrap: perRow ? "wrap" : "nowrap",
        width: "100%",
      }}
    >
      {stats.map((stat, index) => {
        const firstInRow = perRow ? index % perRow === 0 : index === 0;
        const rule = divider && !firstInRow;

        return (
          <div
            key={index}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexBasis: basis,
              flexDirection: "column",
              flexGrow: 1,
              flexShrink: 1,
              gap: "8px",
              padding: "32px",
              // Satori throws on `undefined` style values, so the rule is spread in.
              ...(rule && { borderLeft: "1px solid rgba(161,161,170,0.4)" }),
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "56px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 500,
                opacity: 0.7,
              }}
            >
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
