import { getMarkdownContent } from "@/markdown";
import fs from "fs";
import path from "path";
import TutorialClient from "@/app/components/TutorialClient";
import { Suspense } from "react";

// Generate static params
export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/creations"),
  );

  return files.map((filename: string) => ({
    slug: [filename.replace(".md", "")], // Wrap in array
  }));
}
type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
// This is now the main page component
export default async function TutorialPage({ params }: Props) {
  // Join slug array with '/' to create path
  const slugList = await params;
  console.log(slugList);
  const slugPath = slugList.slug.join("/");
  const { content, metadata } = await getMarkdownContent(
    `src/content/creations/${slugPath}.md`,
  );
  console.log(metadata);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TutorialClient content={content} metadata={metadata} />
    </Suspense>
  );
}
