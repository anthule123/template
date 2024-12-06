import "@/css/globals.css";
import TreeSideBar from "@/app/ui/TreeSideBar";
import { getContentTree } from "@/lib/utils/content";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tree = getContentTree();

  return (
    <div className="home">
      <span>
        <TreeSideBar tree={tree} />
      </span>
      <span>
        <div>{children}</div>{" "}
      </span>
    </div>
  );
}
