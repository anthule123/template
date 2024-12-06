import "@/css/globals.css";
import { garamond, inter, merriweather } from "@/app/fonts";
import { Metadata } from "next";
import SideBar from "./sidebar";
import TreeSideBar from "@/app/components/TreeSideBar";
import { getContentTree } from "@/app/lib/utils/content";
import Header from "./components/Header";
export const metadata: Metadata = {
  title: "Computer roadmap",
  description: "Computer set up",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tree = getContentTree();

  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body
        className={` ${garamond.variable}
                         ${inter.variable} ${merriweather.variable}
        antialiased`}
      >
        {/* <Header /> */}
        <div className="home">
          <span>
            <TreeSideBar tree={tree} />
          </span>
          <span>
            <div>{children}</div>{" "}
          </span>
        </div>
      </body>
    </html>
  );
}
