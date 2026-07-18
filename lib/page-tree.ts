import type { Node as PageTreeNode } from "fumadocs-core/page-tree";

export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>;
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>;

export const getFoldersFromFolder = (
  folder: PageTreeFolder
): PageTreeFolder[] =>
  folder.children.filter(
    (child): child is PageTreeFolder => child.type === "folder"
  );

export const getPagesFromFolder = (folder: PageTreeFolder): PageTreePage[] =>
  folder.children.filter(
    (child): child is PageTreePage => child.type === "page"
  );

const getFolderPages = (folder: PageTreeFolder) => {
  const pages = getPagesFromFolder(folder);
  const indexPage = folder.$id
    ? pages.find((page) => page.url.endsWith(`/${folder.$id}`))
    : undefined;

  return {
    indexPage,
    pages: pages.filter((page) => page !== indexPage),
  };
};

export const getPagesFromFolderWithoutIndex = (
  folder: PageTreeFolder
): PageTreePage[] => getFolderPages(folder).pages;

export const getFolderGroups = (folder: PageTreeFolder) =>
  getFoldersFromFolder(folder).map((child) => ({
    folder: child,
    ...getFolderPages(child),
  }));
