import Link from "next/link";

import { ComponentPreview } from "@/components/component-preview";
import { getComponentNameFromUrl, isComponentsFolder } from "@/lib/docs";
import {
  getFoldersFromFolder,
  getPagesFromFolderWithoutIndex,
} from "@/lib/page-tree";
import type { PageTreeFolder } from "@/lib/page-tree";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";

const componentsFolder = source.pageTree.children.find(
  (node): node is PageTreeFolder =>
    node.type === "folder" && isComponentsFolder(node)
);
const componentPages = componentsFolder
  ? getFoldersFromFolder(componentsFolder).flatMap(
      getPagesFromFolderWithoutIndex
    )
  : [];
const componentPagesByName = new Map(
  componentPages.map((page) => [getComponentNameFromUrl(page.url), page])
);

const ComponentCardGrid = ({
  components,
  className,
}: {
  components: typeof componentPages;
  className?: string;
}) => (
  <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
    {components.map((component) => {
      const name = getComponentNameFromUrl(component.url);
      const title = String(component.name);

      return (
        <Link
          className="group rounded-lg bg-code p-1 transition-colors hover:bg-muted/80"
          href={component.url}
          key={component.$id ?? component.url}
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

export const ComponentsList = ({
  category,
  className,
}: {
  category: string;
  className?: string;
}) => {
  const categoryFolder = componentsFolder
    ? getFoldersFromFolder(componentsFolder).find(
        (folder) => folder.$id?.split("/").at(-1) === category
      )
    : undefined;

  if (!categoryFolder) {
    return null;
  }

  const components = getPagesFromFolderWithoutIndex(categoryFolder);

  return <ComponentCardGrid components={components} className={className} />;
};

export const ComponentPreviewGrid = ({
  names,
  className,
}: {
  names: string[];
  className?: string;
}) => (
  <ComponentCardGrid
    className={className}
    components={names.flatMap((name) => {
      const page = componentPagesByName.get(name);
      return page ? [page] : [];
    })}
  />
);
