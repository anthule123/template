// app/tutorials/[slug]/TutorialClient.tsx
"use client";

import mermaid from "mermaid";
import { useEffect } from "react";
import "katex/dist/katex.min.css";
import katex from "katex";
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
      // Xử lý Mermaid
      mermaid.initialize({
        startOnLoad: true,
        theme: "default",
        securityLevel: "loose",
      });
      mermaid.contentLoaded();

      // Xử lý KaTeX
      // Tìm tất cả các phần tử có chứa math
      const mathElements = document.querySelectorAll(".math");
      const mathBlockElements = document.querySelectorAll(".math-block");

      // Render inline math
      mathElements.forEach((elem) => {
        const tex = elem.textContent;
        if (tex) {
          katex.render(tex, elem as HTMLElement, {
            throwOnError: false,
            displayMode: false,
          });
        }
      });

      // Render block math
      mathBlockElements.forEach((elem) => {
        const tex = elem.textContent;
        if (tex) {
          katex.render(tex, elem as HTMLElement, {
            throwOnError: false,
            displayMode: true,
          });
        }
      });
    }
  }, [content]); // Thêm content vào dependencies

  const processContent = (rawContent: string) => {
    let processedContent = rawContent;

    return processedContent;
  };

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: processContent(content) }} />
    </article>
  );
}
