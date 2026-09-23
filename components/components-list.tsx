import Link from "next/link";

import { ComponentPreview } from "@/components/component-preview";
import { getRegistryItemNameFromUrl, isBlocksFolder } from "@/lib/docs";
import {
  getFoldersFromFolder,
  getPagesFromFolderWithoutIndex,
} from "@/lib/page-tree";
import type { PageTreeFolder } from "@/lib/page-tree";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";

const topFolders = source.pageTree.children.filter(
  (node): node is PageTreeFolder => node.type === "folder"
);
const blocksFolder = topFolders.find(isBlocksFolder);
const componentsFolder = topFolders.find(
  (folder) => folder.$id === "components"
);

const componentPages = componentsFolder
  ? getPagesFromFolderWithoutIndex(componentsFolder)
  : [];
const blockPages = blocksFolder
  ? getFoldersFromFolder(blocksFolder).flatMap(getPagesFromFolderWithoutIndex)
  : [];
const pagesByName = new Map(
  [...componentPages, ...blockPages].map((page) => [
    getRegistryItemNameFromUrl(page.url),
    page,
  ])
);

const PreviewCardGrid = ({
  pages,
  className,
}: {
  pages: typeof blockPages;
  className?: string;
}) => (
  <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
    {pages.map((page) => {
      const name = getRegistryItemNameFromUrl(page.url);
      const title = String(page.name);

      return (
        <Link
          className="group rounded-lg bg-code p-1 transition-colors hover:bg-muted/80"
          href={page.url}
          key={page.$id ?? page.url}
          transitionTypes={["nav-forward"]}
        >
          <ComponentPreview
            className="gap-0"
            previewClassName="rounded-md border-none shadow-none"
            hideCustomizer
            name={name}
            title={title}
          />
          <div className="p-2 pb-1 text-base font-medium underline-offset-4 group-hover:underline">
            {title}
          </div>
        </Link>
      );
    })}
  </div>
);

export const ComponentsList = ({ className }: { className?: string }) => (
  <PreviewCardGrid className={className} pages={componentPages} />
);

export const BlocksList = ({
  category,
  className,
}: {
  category: string;
  className?: string;
}) => {
  const categoryFolder = blocksFolder
    ? getFoldersFromFolder(blocksFolder).find(
        (folder) => folder.$id?.split("/").at(-1) === category
      )
    : undefined;

  if (!categoryFolder) {
    return null;
  }

  return (
    <PreviewCardGrid
      className={className}
      pages={getPagesFromFolderWithoutIndex(categoryFolder)}
    />
  );
};

export const ComponentPreviewGrid = ({
  names,
  className,
}: {
  names: string[];
  className?: string;
}) => (
  <PreviewCardGrid
    className={className}
    pages={names.flatMap((name) => {
      const page = pagesByName.get(name);
      return page ? [page] : [];
    })}
  />
);
