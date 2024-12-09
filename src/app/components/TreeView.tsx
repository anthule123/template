// components/TreeView.tsx
"use client";
import { TreeNode } from "@/app/lib/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import treeView from "@/css/components/TreeView.module.css";

export default function TreeView({ data }: { data: TreeNode }) {
  const pathname = usePathname();
  const isActive = decodeURI(pathname) === decodeURI(data.path);

  if (data.isFile) {
    return (
      <Link
        href={data.path}
        className={`${treeView.fileLink} ${isActive ? treeView.active : ""}`}
      >
        <div className={treeView.fileItem}>{data.name}</div>
      </Link>
    );
  }

  function clsx(chevron: string, arg1: string | boolean): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <details className={treeView.details}>
      <summary>{data.name}</summary>
      {data.children && (
        <div className={treeView.children}>
          {data.children.map((child) => (
            <TreeView key={child.path} data={child} />
          ))}
        </div>
      )}
    </details>
  );
}
