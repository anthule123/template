import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
export async function getContent(params: { slug: string; category?: string }) {
  const { slug, category } = params;

  const basePath = path.join(process.cwd(), "src/content/tutorials");
  //let fullPath;
  let fullPath = "";
  if (!category) {
    fullPath = path.join(basePath, "root", `${slug}.md`);
  } else {
    fullPath = path.join(basePath, category, `${slug}.md`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  // For single-level articles

  console.log("data", data);
  console.log("content", content);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    //.use(rehypeMermaid)
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  return {
    metadata: data,
    content: processedContent.toString(),
  };
  // if (!category) {
  //   return await fs.promises.readFile(
  //     path.join(basePath, "root", `${slug}.md`),
  //     "utf8",
  //   );
  // }

  // // For nested articles
  // return await fs.promises.readFile(
  //   path.join(basePath, category, `${slug}.md`),
  //   "utf8",
  // );
}
