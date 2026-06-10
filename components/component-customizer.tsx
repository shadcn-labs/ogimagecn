"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import type { ControlConfig } from "@/lib/customizer-config";

interface ComponentCustomizerProps {
  controls: ControlConfig;
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
}

export const ComponentCustomizer = ({
  controls,
  values,
  onChange,
}: ComponentCustomizerProps) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {Object.entries(controls).map(([key, ctrl]) => {
      const id = `ctrl-${key}`;
      return (
        <div key={key} className="flex flex-col gap-2 justify-center">
          <Label htmlFor={id}>{ctrl.label}</Label>

          {ctrl.type === "text" && (
            <Input
              id={id}
              type="text"
              value={values[key] as string}
              onChange={(e) => onChange(key, e.target.value)}
            />
          )}

          {ctrl.type === "color" && (
            <div className="flex items-center gap-2">
              <input
                id={id}
                type="color"
                value={values[key] as string}
                onChange={(e) => onChange(key, e.target.value)}
                className="size-9 shrink-0 cursor-pointer rounded-md border bg-transparent p-0.5"
              />
              <Input
                type="text"
                value={values[key] as string}
                onChange={(e) => onChange(key, e.target.value)}
                className="font-mono "
              />
            </div>
          )}

          {ctrl.type === "image" && (
            <div className="flex items-center gap-2">
              <Input
                id={id}
                type="text"
                value={values[key] as string}
                placeholder="Image URL"
                onChange={(e) => onChange(key, e.target.value)}
              />
              <label className="shrink-0 cursor-pointer rounded-md border px-2 py-1.5 hover:bg-muted">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) {
                      return;
                    }
                    const reader = new FileReader();
                    reader.addEventListener("load", () =>
                      onChange(key, reader.result as string)
                    );
                    reader.readAsDataURL(file);
                  }}
                />
              </label>
            </div>
          )}

          {ctrl.type === "select" && (
            <NativeSelect
              value={values[key] as string}
              onChange={(e) => onChange(key, e.target.value)}
            >
              {ctrl.options.map((opt) => (
                <NativeSelectOption key={opt} value={opt}>
                  {opt}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          )}

          {ctrl.type === "array" && (
            <div className="flex flex-col gap-2">
              {(values[key] as string[]).map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const arr = [...(values[key] as string[])];
                      arr[i] = e.target.value;
                      onChange(key, arr);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const arr = (values[key] as string[]).filter(
                        (_, j) => j !== i
                      );
                      onChange(key, arr);
                    }}
                    className="shrink-0 text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  onChange(key, [...(values[key] as string[]), ""])
                }
                className="text-muted-foreground hover:text-foreground"
              >
                + Add item
              </button>
            </div>
          )}
        </div>
      );
    })}
  </div>
);
