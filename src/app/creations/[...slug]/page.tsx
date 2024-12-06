import { getMarkdownContent } from "@/markdown";
import fs from "fs";
import path from "path";
import TutorialClient from "@/app/components/TutorialClient";

// Generate static params
export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/creations"),
  );

  return files.map((filename: string) => ({
    slug: [filename.replace(".md", "")], // Wrap in array
  }));
}

// This is now the main page component
export default async function TutorialPage({
  params,
}: {
  params: { slug: string[] };
}) {
  // Join slug array with '/' to create path
  const slugPath = params.slug.join("/");
  const { content, metadata } = await getMarkdownContent(
    `src/content/creations/${slugPath}.md`,
  );
  console.log(metadata);
  return <TutorialClient content={content} metadata={metadata} />;
}
