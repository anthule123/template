This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## Giới thiệu

Đây là template tạo website từ markdown với tính năng tự động tạo cấu trúc thư mục (folder-like navigation). 

Ví dụ: Khi bạn tạo file markdown ở đường dẫn `creations/a/b/c.md`, sidebar sẽ tự động hiển thị:

```
creations
    |
    a
    └── b
        └── c
```

Các tính năng chính:
- Tự động tạo cấu trúc thư mục từ markdown files
- Navigation dễ dàng qua sidebar
- Hỗ trợ nested folders không giới hạn độ sâu
- Tương thích với các markdown editor phổ biến