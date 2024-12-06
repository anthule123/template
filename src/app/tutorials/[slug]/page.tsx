import { getMarkdownContent } from "@/markdown";
import fs from "fs";
import path from "path";
import TutorialClient from "./TutorialClient";

// Generate static params
export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/tutorials/root"),
  );

  return files.map((filename: string) => ({
    slug: filename.replace(".md", ""),
  }));
}

// This is now the main page component
export default async function TutorialPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, metadata } = await getMarkdownContent(
    `src/content/tutorials/root/${params.slug}.md`,
  );
  console.log(metadata);
  return <TutorialClient content={content} metadata={metadata} />;
}
