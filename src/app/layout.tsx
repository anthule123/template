import "@/css/globals.css";
import { garamond, inter, merriweather } from "@/app/fonts";
import { Metadata } from "next";
import SideBar from "./sidebar";

export const metadata: Metadata = {
  title: "Computer roadmap",
  description: "Computer set up",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <span>{children}</span>
      </body>
    </html>
  );
}
