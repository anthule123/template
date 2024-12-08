import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: "export", // Thêm dòng này
  // Thêm cấu hình để generate các dynamic routes
  generateStaticParams: async () => {
    // Đây là nơi bạn định nghĩa tất cả các dynamic paths
    return {
      dynamicParams: true, // Cho phép generate dynamic params
    };
  },
};

export default nextConfig;
