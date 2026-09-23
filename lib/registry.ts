import path from "node:path";

import { readFileFromRoot } from "@/lib/read-file";

export const readOptionalFromRoot = async (
  relativePath: string
): Promise<string | null> => {
  try {
    return await readFileFromRoot(relativePath);
  } catch {
    return null;
  }
};

// Blocks live at registry/og/<name>.tsx, components at registry/og/ui/<name>.tsx.
export const getRegistrySource = async (name: string): Promise<string | null> =>
  (await readOptionalFromRoot(path.join("registry", "og", `${name}.tsx`))) ??
  readOptionalFromRoot(path.join("registry", "og", "ui", `${name}.tsx`));
