import { source } from "@/lib/source";

export interface ChangelogPageData {
  title: string;
  description?: string;
  date?: string | Date;
}

export type ChangelogPage = ReturnType<typeof source.getPages>[number] & {
  date: Date | null;
};

export const getChangelogPages = () =>
  source
    .getPages()
    .filter((page) => page.slugs[0] === "changelog" && page.slugs.length > 1)
    .map((page) => {
      const data = page.data as ChangelogPageData;
      return {
        ...page,
        date: data.date ? new Date(data.date) : null,
      };
    })
    .toSorted((a, b) => {
      const dateA = a.date?.getTime() ?? 0;
      const dateB = b.date?.getTime() ?? 0;
      return dateB - dateA;
    });
