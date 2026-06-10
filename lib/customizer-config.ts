export type ControlType =
  | { type: "text"; default: string; label: string }
  | { type: "color"; default: string; label: string }
  | { type: "image"; default: string; label: string }
  | { type: "select"; default: string; options: string[]; label: string }
  | { type: "array"; default: string[]; label: string };

export type ControlConfig = Record<string, ControlType>;

export const getDefaults = (
  controls: ControlConfig
): Record<string, unknown> => {
  const out: Record<string, unknown> = {};
  for (const [key, ctrl] of Object.entries(controls)) {
    out[key] = ctrl.default;
  }
  return out;
};
