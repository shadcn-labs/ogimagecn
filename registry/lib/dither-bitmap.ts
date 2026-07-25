import { encode } from "fast-png";

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface RgbaBitmap {
  width: number;
  height: number;
  data: Uint8Array;
}

export const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((value) => (value + 0.5) / 16));

const BITMAP_CACHE_LIMIT = 48;
const bitmapCache = new Map<string, string>();
const DEFAULT_COLOR: RgbColor = { b: 255, g: 255, r: 255 };
const BASE64_ALPHABET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export const createBitmap = (width: number, height: number): RgbaBitmap => {
  if (!(Number.isInteger(width) && Number.isInteger(height))) {
    throw new TypeError("Bitmap dimensions must be integers.");
  }
  if (width <= 0 || height <= 0) {
    throw new RangeError("Bitmap dimensions must be positive.");
  }

  return {
    data: new Uint8Array(width * height * 4),
    height,
    width,
  };
};

export const hexToRgb = (
  value: string,
  fallback: RgbColor = DEFAULT_COLOR
): RgbColor => {
  const hex = value.trim().replace(/^#/, "");
  const normalized =
    hex.length === 3
      ? [...hex].map((character) => `${character}${character}`).join("")
      : hex;

  if (!/^[\da-f]{6}$/i.test(normalized)) {
    return fallback;
  }

  return {
    b: Number.parseInt(normalized.slice(4, 6), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    r: Number.parseInt(normalized.slice(0, 2), 16),
  };
};

export const mixRgb = (
  from: RgbColor,
  to: RgbColor,
  amount: number
): RgbColor => {
  const t = clamp(amount);

  return {
    b: Math.round(from.b + (to.b - from.b) * t),
    g: Math.round(from.g + (to.g - from.g) * t),
    r: Math.round(from.r + (to.r - from.r) * t),
  };
};

/** Paints a solid cell into a premultiplied, row-major RGBA bitmap. */
export const paintCell = (
  bitmap: RgbaBitmap,
  cellX: number,
  cellY: number,
  cellSize: number,
  color: RgbColor,
  alpha: number
) => {
  const startX = cellX * cellSize;
  const startY = cellY * cellSize;
  if (
    startX >= bitmap.width ||
    startY >= bitmap.height ||
    startX + cellSize <= 0 ||
    startY + cellSize <= 0
  ) {
    return;
  }

  const a = Math.round(clamp(alpha) * 255);
  const red = Math.round((clamp(color.r, 0, 255) * a) / 255);
  const green = Math.round((clamp(color.g, 0, 255) * a) / 255);
  const blue = Math.round((clamp(color.b, 0, 255) * a) / 255);
  const maxX = Math.min(bitmap.width, startX + cellSize);
  const maxY = Math.min(bitmap.height, startY + cellSize);

  for (let y = Math.max(0, startY); y < maxY; y += 1) {
    let offset = (y * bitmap.width + Math.max(0, startX)) * 4;

    for (let x = Math.max(0, startX); x < maxX; x += 1) {
      bitmap.data[offset] = red;
      bitmap.data[offset + 1] = green;
      bitmap.data[offset + 2] = blue;
      bitmap.data[offset + 3] = a;
      offset += 4;
    }
  }
};

const unpremultiply = (source: Uint8Array) => {
  const straight = new Uint8Array(source.length);

  for (let offset = 0; offset < source.length; offset += 4) {
    const alpha = source[offset + 3] ?? 0;
    straight[offset + 3] = alpha;

    if (alpha === 0) {
      continue;
    }
    if (alpha === 255) {
      straight[offset] = source[offset] ?? 0;
      straight[offset + 1] = source[offset + 1] ?? 0;
      straight[offset + 2] = source[offset + 2] ?? 0;
      continue;
    }

    straight[offset] = Math.min(
      255,
      Math.floor(((source[offset] ?? 0) * 255) / alpha)
    );
    straight[offset + 1] = Math.min(
      255,
      Math.floor(((source[offset + 1] ?? 0) * 255) / alpha)
    );
    straight[offset + 2] = Math.min(
      255,
      Math.floor(((source[offset + 2] ?? 0) * 255) / alpha)
    );
  }

  return straight;
};

const toBase64 = (bytes: Uint8Array) => {
  let output = "";

  for (let index = 0; index < bytes.length; index += 3) {
    const first = bytes[index] ?? 0;
    const hasSecond = index + 1 < bytes.length;
    const hasThird = index + 2 < bytes.length;
    const second = bytes[index + 1] ?? 0;
    const third = bytes[index + 2] ?? 0;
    const value = first * 65_536 + second * 256 + third;

    output += BASE64_ALPHABET[Math.floor(value / 262_144) % 64];
    output += BASE64_ALPHABET[Math.floor(value / 4096) % 64];
    output += hasSecond ? BASE64_ALPHABET[Math.floor(value / 64) % 64] : "=";
    output += hasThird ? BASE64_ALPHABET[value % 64] : "=";
  }

  return output;
};

export const encodeBitmap = ({ data, height, width }: RgbaBitmap): string => {
  const expectedLength = width * height * 4;
  if (data.length !== expectedLength) {
    throw new RangeError(
      `Bitmap contains ${data.length} bytes; expected ${expectedLength}.`
    );
  }

  const png = encode(
    {
      channels: 4,
      data: unpremultiply(data),
      depth: 8,
      height,
      width,
    },
    { zlib: { level: 3 } }
  );

  return `data:image/png;base64,${toBase64(png)}`;
};

/** Memoizes generated PNGs so React/Satori re-renders do not repaint pixels. */
export const getDitherDataUri = (
  cacheKey: string,
  paint: () => RgbaBitmap
): string => {
  const cached = bitmapCache.get(cacheKey);
  if (cached) {
    bitmapCache.delete(cacheKey);
    bitmapCache.set(cacheKey, cached);
    return cached;
  }

  const encoded = encodeBitmap(paint());
  bitmapCache.set(cacheKey, encoded);

  if (bitmapCache.size > BITMAP_CACHE_LIMIT) {
    const oldest = bitmapCache.keys().next().value;
    if (oldest) {
      bitmapCache.delete(oldest);
    }
  }

  return encoded;
};

const PRIMITIVE_WHITE = { b: 255, g: 255, r: 255 };

const hashString = (value: string) => {
  let hash = 17;
  for (const character of value) {
    hash = (hash * 31 + (character.codePointAt(0) ?? 0)) % 2_147_483_647;
  }
  return hash;
};

const createRandom = (seed: number) => {
  const randomState = { value: seed || 1 };
  return () => {
    randomState.value = (randomState.value * 48_271) % 2_147_483_647;
    return randomState.value / 2_147_483_647;
  };
};

/** Creates a deterministic 8×8 mirrored Dither Kit-style avatar. */
export const getDitherAvatar = (name: string, accent: string) =>
  getDitherDataUri(`dither-avatar:${name}:${accent.toLowerCase()}`, () => {
    const size = 256;
    const bitmap = createBitmap(size, size);
    const color = hexToRgb(accent, { b: 243, g: 133, r: 168 });
    const highlight = mixRgb(color, PRIMITIVE_WHITE, 0.38);
    const random = createRandom(hashString(name));
    const ditherCell = 4;
    const blockSize = 7;
    const offset = 4;

    for (let row = 0; row < 8; row += 1) {
      for (let halfColumn = 0; halfColumn < 4; halfColumn += 1) {
        const active = random() > 0.44;
        const columns = [halfColumn, 7 - halfColumn];

        for (const column of columns) {
          for (let y = 0; y < blockSize; y += 1) {
            for (let x = 0; x < blockSize; x += 1) {
              const cellX = offset + column * blockSize + x;
              const cellY = offset + row * blockSize + y;
              const threshold = BAYER_4X4[cellY % 4]?.[cellX % 4] ?? 0;
              const density = active ? 0.92 - y * 0.035 : 0.1;

              if (density > threshold) {
                paintCell(
                  bitmap,
                  cellX,
                  cellY,
                  ditherCell,
                  (row + column) % 3 === 0 ? highlight : color,
                  active ? 0.94 : 0.22
                );
              }
            }
          }
        }
      }
    }

    return bitmap;
  });

/** Creates a cached ordered-dither gradient wash. */
export const getDitherGradient = ({
  cacheKey,
  from,
  height,
  to,
  width,
}: {
  cacheKey: string;
  from: string;
  height: number;
  to: string;
  width: number;
}) =>
  getDitherDataUri(`dither-gradient:${cacheKey}:${from}:${to}`, () => {
    const bitmap = createBitmap(width, height);
    const fromColor = hexToRgb(from, { b: 225, g: 120, r: 168 });
    const toColor = hexToRgb(to, { b: 246, g: 141, r: 99 });
    const cellSize = 5;
    const columns = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const x = column / Math.max(1, columns - 1);
        const y = row / Math.max(1, rows - 1);
        const progress = clamp(x * 0.72 + y * 0.28);
        const distance = Math.hypot(x - 0.58, y - 0.48);
        const density = clamp(0.94 - distance * 0.92);
        const threshold = BAYER_4X4[row % 4]?.[column % 4] ?? 0;

        if (density > threshold) {
          paintCell(
            bitmap,
            column,
            row,
            cellSize,
            mixRgb(fromColor, toColor, progress),
            0.72
          );
        }
      }
    }

    return bitmap;
  });

export type DitherButtonVariant = "dotted" | "gradient" | "hatched" | "solid";

const shouldPaintButtonCell = (
  variant: DitherButtonVariant,
  column: number,
  row: number
) => {
  const threshold = BAYER_4X4[row % 4]?.[column % 4] ?? 0;
  if (variant === "dotted") {
    return threshold < 0.46;
  }
  if (variant === "hatched") {
    return (column + row) % 7 < 2;
  }
  return true;
};

/** Creates a Dither Kit-style button texture for static Satori output. */
export const getDitherButtonTexture = ({
  accent,
  accentTo,
  height,
  variant,
  width,
}: {
  accent: string;
  accentTo: string;
  height: number;
  variant: DitherButtonVariant;
  width: number;
}) =>
  getDitherDataUri(
    `dither-button:${variant}:${accent}:${accentTo}:${width}:${height}`,
    () => {
      const bitmap = createBitmap(width, height);
      const from = hexToRgb(accent, { b: 225, g: 120, r: 168 });
      const to = hexToRgb(accentTo, { b: 246, g: 141, r: 99 });
      const cellSize = 4;
      const columns = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          if (!shouldPaintButtonCell(variant, column, row)) {
            continue;
          }
          const progress = column / Math.max(1, columns - 1);
          const color =
            variant === "gradient" ? mixRgb(from, to, progress) : from;
          paintCell(
            bitmap,
            column,
            row,
            cellSize,
            color,
            variant === "solid" ? 0.92 : 0.82
          );
        }
      }

      for (let index = 0; index < 9; index += 1) {
        const column = 4 + ((index * 23 + 7) % Math.max(8, columns - 8));
        const row = 3 + ((index * 11 + 5) % Math.max(6, rows - 6));
        paintCell(bitmap, column, row, cellSize, PRIMITIVE_WHITE, 0.78);
      }

      return bitmap;
    }
  );

export const DITHER_CHART_WIDTH = 320;
export const DITHER_CHART_HEIGHT = 122;
const CHART_CELL_SIZE = 2;
const CHART_COLUMNS = DITHER_CHART_WIDTH / CHART_CELL_SIZE;
const CHART_ROWS = DITHER_CHART_HEIGHT / CHART_CELL_SIZE;
const CHART_GRID_COLOR = { b: 40, g: 40, r: 40 };
const CHART_MUTED_COLOR = { b: 104, g: 104, r: 104 };
const CHART_DARK_COLOR = { b: 10, g: 10, r: 10 };

type Point = readonly [x: number, y: number];
export type DitherChartType = "area" | "bar" | "line" | "pie" | "radar";

const paintLine = (
  bitmap: RgbaBitmap,
  [startX, startY]: Point,
  [endX, endY]: Point,
  color: RgbColor,
  alpha = 1,
  thickness = 1
) => {
  let x = Math.round(startX);
  let y = Math.round(startY);
  const targetX = Math.round(endX);
  const targetY = Math.round(endY);
  const dx = Math.abs(targetX - x);
  const dy = Math.abs(targetY - y);
  const stepX = x < targetX ? 1 : -1;
  const stepY = y < targetY ? 1 : -1;
  let error = dx - dy;

  while (true) {
    const radius = Math.floor(thickness / 2);
    for (let offsetY = -radius; offsetY <= radius; offsetY += 1) {
      for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
        paintCell(
          bitmap,
          x + offsetX,
          y + offsetY,
          CHART_CELL_SIZE,
          color,
          alpha
        );
      }
    }

    if (x === targetX && y === targetY) {
      break;
    }

    const doubled = error * 2;
    if (doubled > -dy) {
      error -= dy;
      x += stepX;
    }
    if (doubled < dx) {
      error += dx;
      y += stepY;
    }
  }
};

const paintPolyline = (
  bitmap: RgbaBitmap,
  points: readonly Point[],
  color: RgbColor,
  alpha = 1,
  thickness = 1
) => {
  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];
    if (start && end) {
      paintLine(bitmap, start, end, color, alpha, thickness);
    }
  }
};

const paintChartGrid = (bitmap: RgbaBitmap) => {
  for (let column = 8; column < CHART_COLUMNS; column += 18) {
    paintLine(
      bitmap,
      [column, 5],
      [column, CHART_ROWS - 5],
      CHART_GRID_COLOR,
      0.35
    );
  }
  for (let row = 7; row < CHART_ROWS; row += 14) {
    paintLine(
      bitmap,
      [5, row],
      [CHART_COLUMNS - 5, row],
      CHART_GRID_COLOR,
      0.35
    );
  }
};

const paintDitheredArea = (
  bitmap: RgbaBitmap,
  points: readonly Point[],
  baseline: number,
  color: RgbColor
) => {
  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];
    if (!(start && end)) {
      continue;
    }
    const [startX, startY] = start;
    const [endX, endY] = end;

    for (let x = startX; x <= endX; x += 1) {
      const progress = (x - startX) / Math.max(1, endX - startX);
      const top = Math.round(startY + (endY - startY) * progress);
      const depth = Math.max(1, baseline - top);

      for (let y = top + 1; y <= baseline; y += 1) {
        const density = 0.18 + ((y - top) / depth) * 0.58;
        const threshold = BAYER_4X4[y % 4]?.[x % 4] ?? 0;
        if (density > threshold) {
          paintCell(bitmap, x, y, CHART_CELL_SIZE, color, 0.72);
        }
      }
    }
  }
};

const paintAreaChart = (
  bitmap: RgbaBitmap,
  primaryColor: RgbColor,
  secondaryColor: RgbColor
) => {
  const secondaryPoints: readonly Point[] = [
    [13, 49],
    [38, 29],
    [61, 35],
    [83, 16],
    [107, 31],
    [137, 9],
  ];
  const primaryPoints: readonly Point[] = [
    [13, 49],
    [39, 39],
    [64, 45],
    [88, 31],
    [112, 34],
    [137, 23],
  ];

  paintDitheredArea(bitmap, secondaryPoints, 52, secondaryColor);
  paintDitheredArea(bitmap, primaryPoints, 52, primaryColor);
  paintPolyline(bitmap, secondaryPoints, secondaryColor, 1, 2);
  paintPolyline(bitmap, primaryPoints, primaryColor, 1, 2);
};

const paintLineChart = (
  bitmap: RgbaBitmap,
  primaryColor: RgbColor,
  secondaryColor: RgbColor
) => {
  const secondaryPoints: readonly Point[] = [
    [11, 49],
    [36, 29],
    [68, 39],
    [96, 22],
    [139, 36],
  ];
  const primaryPoints: readonly Point[] = [
    [15, 38],
    [39, 45],
    [67, 14],
    [83, 33],
    [109, 17],
    [145, 6],
  ];

  paintPolyline(bitmap, secondaryPoints, secondaryColor, 1, 2);
  paintPolyline(bitmap, primaryPoints, primaryColor, 1, 2);
};

const paintDitheredRect = (
  bitmap: RgbaBitmap,
  x: number,
  y: number,
  width: number,
  height: number,
  color: RgbColor,
  density: number
) => {
  for (let row = y; row < y + height; row += 1) {
    for (let column = x; column < x + width; column += 1) {
      const threshold = BAYER_4X4[row % 4]?.[column % 4] ?? 0;
      if (density > threshold) {
        paintCell(bitmap, column, row, CHART_CELL_SIZE, color, 0.9);
      }
    }
  }
};

const paintBarChart = (
  bitmap: RgbaBitmap,
  primaryColor: RgbColor,
  secondaryColor: RgbColor
) => {
  const bars = [
    { primaryHeight: 13, secondaryHeight: 12, x: 32 },
    { primaryHeight: 9, secondaryHeight: 8, x: 56 },
    { primaryHeight: 23, secondaryHeight: 16, x: 80 },
    { primaryHeight: 13, secondaryHeight: 10, x: 104 },
  ];

  paintLine(bitmap, [13, 52], [146, 52], CHART_MUTED_COLOR, 0.78, 2);
  for (const bar of bars) {
    const primaryY = 52 - bar.primaryHeight;
    paintDitheredRect(
      bitmap,
      bar.x,
      primaryY,
      14,
      bar.primaryHeight,
      primaryColor,
      0.9
    );
    paintDitheredRect(
      bitmap,
      bar.x,
      primaryY - bar.secondaryHeight,
      14,
      bar.secondaryHeight,
      secondaryColor,
      0.82
    );
  }
};

const paintPieChart = (
  bitmap: RgbaBitmap,
  primaryColor: RgbColor,
  secondaryColor: RgbColor
) => {
  const centerX = 80;
  const centerY = 31;

  for (let y = 0; y < CHART_ROWS; y += 1) {
    for (let x = 0; x < CHART_COLUMNS; x += 1) {
      const offsetX = x - centerX;
      const offsetY = y - centerY;
      const distance = Math.hypot(offsetX, offsetY);
      if (distance < 14 || distance > 27) {
        continue;
      }

      const angle =
        (Math.atan2(offsetY, offsetX) + Math.PI * 2) % (Math.PI * 2);
      const isAccent = angle < Math.PI * 0.88 || angle > Math.PI * 1.78;
      const density = isAccent ? 0.86 : 0.78;
      const threshold = BAYER_4X4[y % 4]?.[x % 4] ?? 0;
      if (density > threshold) {
        paintCell(
          bitmap,
          x,
          y,
          CHART_CELL_SIZE,
          isAccent ? primaryColor : secondaryColor,
          0.92
        );
      }
    }
  }

  paintLine(bitmap, [80, 31], [101, 12], CHART_DARK_COLOR, 1, 1);
};

const pointInPolygon = (x: number, y: number, polygon: readonly Point[]) => {
  let inside = false;

  for (
    let index = 0, previous = polygon.length - 1;
    index < polygon.length;
    previous = index, index += 1
  ) {
    const currentPoint = polygon[index];
    const previousPoint = polygon[previous];
    if (!(currentPoint && previousPoint)) {
      continue;
    }
    const [currentX, currentY] = currentPoint;
    const [previousX, previousY] = previousPoint;
    const crosses =
      currentY > y !== previousY > y &&
      x <
        ((previousX - currentX) * (y - currentY)) / (previousY - currentY) +
          currentX;
    if (crosses) {
      inside = !inside;
    }
  }

  return inside;
};

const closePolygon = (points: readonly Point[]) => [
  ...points,
  points[0] ?? [0, 0],
];

const paintRadarChart = (
  bitmap: RgbaBitmap,
  primaryColor: RgbColor,
  secondaryColor: RgbColor
) => {
  const center: Point = [80, 31];
  const axes: readonly Point[] = [
    [80, 4],
    [106, 22],
    [96, 53],
    [64, 53],
    [54, 22],
  ];
  const primaryValues: readonly Point[] = [
    [80, 10],
    [101, 24],
    [91, 46],
    [68, 48],
    [61, 24],
  ];
  const secondaryValues: readonly Point[] = [
    [80, 15],
    [98, 27],
    [87, 49],
    [60, 43],
    [66, 19],
  ];

  for (const scale of [0.36, 0.68, 1]) {
    const ring = axes.map(
      ([x, y]) =>
        [
          Math.round(center[0] + (x - center[0]) * scale),
          Math.round(center[1] + (y - center[1]) * scale),
        ] as Point
    );
    paintPolyline(bitmap, closePolygon(ring), CHART_MUTED_COLOR, 0.38);
  }
  for (const axis of axes) {
    paintLine(bitmap, center, axis, CHART_MUTED_COLOR, 0.32);
  }

  for (let y = 5; y < CHART_ROWS - 4; y += 1) {
    for (let x = 44; x < 116; x += 1) {
      const threshold = BAYER_4X4[y % 4]?.[x % 4] ?? 0;
      if (pointInPolygon(x, y, secondaryValues) && threshold < 0.52) {
        paintCell(bitmap, x, y, CHART_CELL_SIZE, secondaryColor, 0.5);
      }
      if (pointInPolygon(x, y, primaryValues) && threshold < 0.62) {
        paintCell(bitmap, x, y, CHART_CELL_SIZE, primaryColor, 0.58);
      }
    }
  }

  paintPolyline(bitmap, closePolygon(secondaryValues), secondaryColor, 1, 2);
  paintPolyline(bitmap, closePolygon(primaryValues), primaryColor, 1, 2);
};

const paintChart = (
  type: DitherChartType,
  primary: string,
  secondary: string
): RgbaBitmap => {
  const bitmap = createBitmap(DITHER_CHART_WIDTH, DITHER_CHART_HEIGHT);
  const primaryColor = hexToRgb(primary, { b: 243, g: 143, r: 53 });
  const secondaryColor = hexToRgb(secondary, { b: 255, g: 110, r: 150 });
  paintChartGrid(bitmap);

  const painters: Record<
    DitherChartType,
    (
      target: RgbaBitmap,
      chartPrimary: RgbColor,
      chartSecondary: RgbColor
    ) => void
  > = {
    area: paintAreaChart,
    bar: paintBarChart,
    line: paintLineChart,
    pie: paintPieChart,
    radar: paintRadarChart,
  };
  painters[type](bitmap, primaryColor, secondaryColor);

  return bitmap;
};

/** Creates one of the five Dither Kit-style chart bitmaps. */
export const getDitherChart = (
  type: DitherChartType,
  primary: string,
  secondary = "#966eff"
) =>
  getDitherDataUri(
    `dither-chart:${type}:${primary.toLowerCase()}:${secondary.toLowerCase()}`,
    () => paintChart(type, primary, secondary)
  );
