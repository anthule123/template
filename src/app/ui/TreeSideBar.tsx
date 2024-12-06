// components/Sidebar.tsx
"use client";
import { TreeNode } from "@/lib/types";
import TreeView from "./TreeView";

export default function TreeSideBar({ tree }: { tree: TreeNode }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Pracman</h2>
      </div>
      <TreeView data={tree} />
    </div>
  );
}
