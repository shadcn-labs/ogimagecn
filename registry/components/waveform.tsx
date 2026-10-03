export interface WaveformProps {
  /** Normalized bar amplitudes. Values are clamped to the 0–1 range. */
  amplitudes: number[];
  /** Color of every bar. */
  color?: string;
  /** Total waveform height in pixels. */
  height?: number;
  /** Space between bars in pixels. */
  gap?: number;
}

/** A deterministic, vertically centered waveform for Satori OG images. */
export const Waveform = ({
  amplitudes,
  color = "#a78bfa",
  height = 96,
  gap = 4,
}: WaveformProps) => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      gap: Math.max(0, gap),
      height,
      width: "100%",
    }}
  >
    {amplitudes.map((amplitude, index) => {
      const level = Number.isFinite(amplitude)
        ? Math.min(1, Math.max(0, Math.abs(amplitude)))
        : 0;

      return (
        <div
          key={index}
          style={{
            backgroundColor: color,
            borderRadius: "999px",
            flexBasis: 0,
            flexGrow: 1,
            height: Math.max(2, level * height),
          }}
        />
      );
    })}
  </div>
);
