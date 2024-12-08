import { getMarkdownContent } from "@/markdown";
import fs from "fs";
import path from "path";
import TutorialClient from "@/app/components/TutorialClient";
import { Suspense } from "react";

function getAllDocPaths(dir: string, basePath: string[] = []): string[][] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let paths: string[][] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue; // Bỏ qua hidden files

    const fullPath = path.join(dir, entry.name);
    const relativePath = entry.name.replace(/\.mdx?$/, ""); // Bỏ extension

    if (entry.isDirectory()) {
      // Thêm directory path
      paths.push([...basePath, relativePath]);
      // Đệ quy vào subdirectories
      paths = paths.concat(
        getAllDocPaths(fullPath, [...basePath, relativePath]),
      );
    } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
      // Thêm file path
      paths.push([...basePath, relativePath]);
    }
  }

  return paths;
}
// Generate static params
export async function generateStaticParams() {
  const files = path.join(process.cwd(), "src/content/creations");

  const paths = getAllDocPaths(files);

  return paths.map((slug) => ({
    slug: slug,
  }));
}
type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
// This is now the main page component
async function TutorialPage({ params }: Props) {
  try {
    // Join slug array with '/' to create path
    const slugList = await params;
    console.log(slugList);
    const slugPath = slugList.slug.join("/");
    const { content, metadata } = await getMarkdownContent(
      `src/content/creations/${slugPath}.md`,
    );
    console.log(metadata);
    return <TutorialClient content={content} metadata={metadata} />;
  } catch (error) {
    console.error("Error loading tutorial:", error);
    return (
      <div>
        <h1>Error</h1>
        <p>Sorry, there was an error loading this tutorial.</p>
      </div>
    );
  }
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TutorialPage params={params} />
    </Suspense>
  );
}
