export interface SparklineProps {
  /** Values to plot from left to right. Non-finite values are skipped. */
  points: number[];
  /** Width of the chart in pixels. */
  width?: number;
  /** Height of the chart in pixels. */
  height?: number;
  /** Color of the line and of the area under it. */
  color?: string;
  /** Fill the area under the line at 20% opacity. */
  area?: boolean;
  /** Thickness of the line in pixels. */
  strokeWidth?: number;
}

/** A small line chart drawn as inline SVG for Satori OG images. */
export const Sparkline = ({
  points,
  width = 240,
  height = 64,
  color = "#22c55e",
  area = false,
  strokeWidth = 3,
}: SparklineProps) => {
  const values = points.filter((value) => Number.isFinite(value));
  // A single value is drawn as a flat line across the chart.
  const series = values.length === 1 ? [values[0], values[0]] : values;
  const min = Math.min(...series);
  const range = Math.max(...series) - min;
  // Keep the whole stroke inside the box.
  const inset = strokeWidth / 2;
  const coords = series.map((value, index) => [
    inset + (index / (series.length - 1)) * (width - strokeWidth),
    range === 0
      ? height / 2
      : inset + (1 - (value - min) / range) * (height - strokeWidth),
  ]);
  const line = coords
    .map(
      ([x, y], index) =>
        `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`
    )
    .join(" ");

  return (
    <svg height={height} viewBox={`0 0 ${width} ${height}`} width={width}>
      {coords.length > 0 && area ? (
        <path
          d={`${line} L${(width - inset).toFixed(2)} ${height} L${inset.toFixed(2)} ${height} Z`}
          fill={color}
          fillOpacity={0.2}
        />
      ) : null}
      {coords.length > 0 ? (
        <path
          d={line}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      ) : null}
    </svg>
  );
};
