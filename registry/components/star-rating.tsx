export interface StarRatingProps {
  /** Rating from 0 to `max`. Fractions fill part of a star, e.g. 3.5. */
  value: number;
  /** Number of stars drawn. */
  max?: number;
  /** Star width and height in pixels. */
  size?: number;
  /** Fill color of the rated part. */
  color?: string;
  /** Fill color of the unrated part. */
  emptyColor?: string;
  /** Score shown in a pill beside the stars, e.g. 4.5 or "4.5/5". */
  score?: number | string;
}

const STAR_PATH =
  "M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.27l-6.18 3.24L7 13.63 2 8.76l6.91-1L12 1.5z";

const Star = ({ color, size }: { color: string; size: number }) => (
  <svg height={size} viewBox="0 0 24 24" width={size}>
    <path d={STAR_PATH} fill={color} />
  </svg>
);

/** A row of stars filled up to `value`, with an optional score pill. */
export const StarRating = ({
  value,
  max = 5,
  size = 48,
  color = "#facc15",
  emptyColor = "rgba(250,250,250,0.18)",
  score,
}: StarRatingProps) => {
  const rating = Math.min(Math.max(value, 0), max);
  const stars = Array.from({ length: max }, (_, i) =>
    Math.min(Math.max(rating - i, 0), 1)
  );

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: Math.round(size / 3),
      }}
    >
      <div style={{ display: "flex", gap: Math.round(size / 8) }}>
        {stars.map((fill, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              height: size,
              position: "relative",
              width: size,
            }}
          >
            <Star color={emptyColor} size={size} />
            {fill > 0 && (
              // The filled star is clipped to the rated fraction of its width.
              <div
                style={{
                  display: "flex",
                  height: size,
                  left: 0,
                  overflow: "hidden",
                  position: "absolute",
                  top: 0,
                  width: size * fill,
                }}
              >
                <Star color={color} size={size} />
              </div>
            )}
          </div>
        ))}
      </div>
      {score !== undefined && score !== "" && (
        <div
          style={{
            backgroundColor: color,
            borderRadius: "999px",
            color: "#0a0a0a",
            display: "flex",
            fontSize: Math.round(size * 0.6),
            fontWeight: 700,
            padding: `${Math.round(size / 8)}px ${Math.round(size / 3)}px`,
          }}
        >
          {String(score)}
        </div>
      )}
    </div>
  );
};
