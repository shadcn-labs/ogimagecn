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

export const getAllPagesFromFolder = (
  folder: PageTreeFolder
): PageTreePage[] => {
  const pages: PageTreePage[] = [];

  for (const child of folder.children) {
    if (child.type === "page") {
      pages.push(child);
    } else if (child.type === "folder") {
      pages.push(...getAllPagesFromFolder(child));
    }
  }

  return pages;
};

export const getFolderIndexPage = (
  folder: PageTreeFolder
): PageTreePage | undefined => {
  if (!folder.$id) {
    return undefined;
  }

  const folderUrlSuffix = `/${folder.$id}`;
  return getPagesFromFolder(folder).find((page) =>
    page.url.endsWith(folderUrlSuffix)
  );
};

export const getPagesFromFolderWithoutIndex = (
  folder: PageTreeFolder
): PageTreePage[] => {
  const indexPage = getFolderIndexPage(folder);
  return getPagesFromFolder(folder).filter((page) => page !== indexPage);
};

export const getFolderGroups = (folder: PageTreeFolder) =>
  getFoldersFromFolder(folder).map((child) => ({
    folder: child,
    indexPage: getFolderIndexPage(child),
    pages: getPagesFromFolderWithoutIndex(child),
  }));
