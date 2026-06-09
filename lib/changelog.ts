import fs from "node:fs";
import path from "node:path";

import { DOCS_DIR } from "@/lib/docs";
import { source } from "@/lib/source";

export interface ChangelogPageData {
  title: string;
  description?: string;
}

export type ChangelogPage = ReturnType<typeof source.getPages>[number] & {
  date: Date | null;
};

export const getDateFromFile = (slugs: string[]) => {
  const filePath = path.join(
    process.cwd(),
    DOCS_DIR,
    ...slugs.slice(0, -1),
    `${slugs.at(-1)}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^date:\s*(.+)$/m);
  if (match?.[1]) {
    return new Date(match[1].trim());
  }

  return null;
};

export const getChangelogPages = () =>
  source
    .getPages()
    .filter((page) => page.slugs[0] === "changelog" && page.slugs.length > 1)
    .map((page) => ({
      ...page,
      date: getDateFromFile(page.slugs),
    }))
    .toSorted((a, b) => {
      const dateA = a.date?.getTime() ?? 0;
      const dateB = b.date?.getTime() ?? 0;
      return dateB - dateA;
    });
