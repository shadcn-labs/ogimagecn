import {
  BAYER_4X4,
  clamp,
  createBitmap,
  getDitherDataUri,
  hexToRgb,
  paintCell,
} from "@/registry/lib/dither-bitmap";
import type { RgbaBitmap } from "@/registry/lib/dither-bitmap";

const BITMAP_WIDTH = 1200;
const BITMAP_HEIGHT = 330;
const CELL_SIZE = 6;
const COLUMNS = BITMAP_WIDTH / CELL_SIZE;
const ROWS = BITMAP_HEIGHT / CELL_SIZE;
const OFF_TIER = 0.28;

const VALUES = [0.19, 0.26, 0.2, 0.42, 0.34, 0.56, 0.48, 0.72, 0.67, 0.93];

const sampleCurve = (values: number[], position: number) => {
  const at = (index: number) =>
    values[Math.min(values.length - 1, Math.max(0, index))] ?? 0;
  const index = Math.floor(position);
  const t = position - index;
  const [p0, p1, p2, p3] = [
    at(index - 1),
    at(index),
    at(index + 1),
    at(index + 2),
  ];

  return (
    0.5 *
    (2 * p1 +
      (p2 - p0) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t +
      (3 * p1 - p0 - 3 * p2 + p3) * t ** 3)
  );
};

const paintRegistryChart = (accent: string): RgbaBitmap => {
  const bitmap = createBitmap(BITMAP_WIDTH, BITMAP_HEIGHT);
  const color = hexToRgb(accent, { b: 110, g: 210, r: 40 });
  const tops = Array.from({ length: COLUMNS }, (_, column) => {
    const position = (column / (COLUMNS - 1)) * (VALUES.length - 1);
    const value = clamp(sampleCurve(VALUES, position));
    return Math.min(
      ROWS - 2,
      Math.max(0, Math.round((1 - value) * (ROWS - 4)) + 2)
    );
  });

  for (let column = 0; column < COLUMNS; column += 1) {
    const top = tops[column] ?? 0;
    const depth = Math.max(1, ROWS - top);

    for (let row = top; row < ROWS; row += 1) {
      const density = (row - top) / depth;
      const threshold = BAYER_4X4[row % 4]?.[column % 4] ?? 0;
      const strength = 0.32 + density * 0.68;
      const alpha = density > threshold ? strength : strength * OFF_TIER;
      paintCell(bitmap, column, row, CELL_SIZE, color, alpha);
    }

    paintCell(bitmap, column, top, CELL_SIZE, color, 0.82);
    paintCell(bitmap, column, top + 1, CELL_SIZE, color, 0.42);
  }

  for (let index = 0; index < 12; index += 1) {
    const column = (index * 37 + 19) % COLUMNS;
    const top = tops[column] ?? 0;
    const row = Math.min(
      ROWS - 2,
      top + 4 + ((index * 17) % Math.max(5, ROWS - top - 5))
    );
    const alpha = 0.55 + ((index * 13) % 35) / 100;

    paintCell(bitmap, column, row, CELL_SIZE, color, alpha);
    if (index % 3 === 0) {
      paintCell(bitmap, column - 1, row, CELL_SIZE, color, alpha * 0.38);
      paintCell(bitmap, column + 1, row, CELL_SIZE, color, alpha * 0.38);
      paintCell(bitmap, column, row - 1, CELL_SIZE, color, alpha * 0.38);
      paintCell(bitmap, column, row + 1, CELL_SIZE, color, alpha * 0.38);
    }
  }

  return bitmap;
};

export interface DitherRegistryProps {
  registry: string;
  title: string;
  description: string;
  command: string;
  accent?: string;
}

export const DitherRegistry = ({
  registry,
  title,
  description,
  command,
  accent = "#28d26e",
}: DitherRegistryProps) => {
  const chart = getDitherDataUri(
    `dither-registry:${accent.toLowerCase()}`,
    () => paintRegistryChart(accent)
  );

  const layer = {
    bottom: 0,
    height: `${BITMAP_HEIGHT}px`,
    left: 0,
    position: "absolute" as const,
    width: `${BITMAP_WIDTH}px`,
  };

  return (
    <div
      style={{
        backgroundColor: "#09090b",
        color: "#fafafa",
        display: "flex",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <img
        height={BITMAP_HEIGHT}
        src={chart}
        width={BITMAP_WIDTH}
        style={{ ...layer, filter: "blur(10px)", opacity: 0.55 }}
      />
      <img
        height={BITMAP_HEIGHT}
        src={chart}
        width={BITMAP_WIDTH}
        style={layer}
      />

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "16px",
          left: "64px",
          position: "absolute",
          top: "56px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            backgroundColor: accent,
            borderRadius: "12px",
            color: "#09090b",
            display: "flex",
            fontSize: "25px",
            fontWeight: 800,
            height: "48px",
            justifyContent: "center",
            width: "48px",
          }}
        >
          {registry.slice(0, 1).toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <span style={{ fontSize: "25px", fontWeight: 700 }}>{registry}</span>
          <span style={{ color: "#a1a1aa", fontSize: "18px", fontWeight: 500 }}>
            shadcn registry
          </span>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #3f3f46",
          borderRadius: "999px",
          color: "#d4d4d8",
          display: "flex",
          fontSize: "17px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          padding: "9px 16px",
          position: "absolute",
          right: "64px",
          textTransform: "uppercase",
          top: "60px",
        }}
      >
        copy · paste · own
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          left: "64px",
          position: "absolute",
          top: "144px",
          width: "980px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: title.length > 54 ? "57px" : "68px",
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 1.02,
            textWrap: "balance",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#b4b4bc",
            display: "flex",
            fontSize: "25px",
            lineHeight: 1.35,
            marginTop: "18px",
            maxWidth: "780px",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgba(9,9,11,0.86)",
          border: "1px solid #3f3f46",
          borderRadius: "14px",
          bottom: "52px",
          display: "flex",
          fontSize: "22px",
          gap: "14px",
          left: "64px",
          padding: "15px 20px",
          position: "absolute",
        }}
      >
        <span style={{ color: accent, fontWeight: 800 }}>$</span>
        <span style={{ color: "#e4e4e7", fontWeight: 600 }}>{command}</span>
      </div>
    </div>
  );
};
