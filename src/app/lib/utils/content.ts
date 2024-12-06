// lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { TreeNode } from "@/app/lib/types";
export function getContentTree(): TreeNode {
  const files = fg.sync("src/content/creations/**/*.md", { dot: true });

  const tree: TreeNode = {
    name: "creations",
    path: "/creations",
    children: [],
  };

  files.forEach((file) => {
    const relativePath = path
      .relative("src/content/creations", file)
      .replace(".md", "");

    const parts = relativePath.split("/");
    let currentNode = tree;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;
      const nodePath = `/creations/${parts.slice(0, index + 1).join("/")}`;

      let node = currentNode.children?.find((n) => n.name === part);
      if (!node) {
        node = {
          name: part,
          path: nodePath,
          isFile,
          children: isFile ? undefined : [],
        };
        currentNode.children?.push(node);
      }
      currentNode = node;
    });
  });

  return tree;
}

export function getDocBySlug(slug: string[]) {
  const realSlug = slug.join("/");
  const fullPath = path.join("src/content/creations", `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontmatter: data,
      content,
    };
  } catch {
    return null;
  }
}
