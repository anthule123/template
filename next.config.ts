import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Thêm dòng này
  images: {
    unoptimized: true, // Thêm dòng này nếu dùng Next/Image
  },
  basePath: "/template", // Thêm basePath nếu deploy lên GitHub Pages
};

export default nextConfig;
