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

const BITMAP_CACHE_LIMIT = 24;
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
