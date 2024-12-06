// app/tutorials/[slug]/TutorialClient.tsx
"use client";

import mermaid from "mermaid";
import { Metadata } from "next";
import { useEffect } from "react";

interface TutorialClientProps {
  content: string;
  metadata: {
    [key: string]: any;
  };
}

export default function TutorialClient({
  content,
  metadata,
}: TutorialClientProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      mermaid.initialize({
        startOnLoad: true,
        theme: "default",
        securityLevel: "loose",
      });
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
