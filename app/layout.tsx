import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- CẤU HÌNH QUAN TRỌNG CHO FARCASTER ---
const appUrl = "https://gm-gn-miniapp.vercel.app"; // <--- THAY LINK VERCEL CỦA BẠN VÀO ĐÂY

export const metadata: Metadata = {
  title: "GM GN Daily",
  description: "Start your day with GM and end it with GN",
  other: {
    // Đây là chuẩn Frames v2
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: "https://api.memegen.link/images/custom/GM_GN_Daily/Tap_to_Start.png?background=https://source.unsplash.com/random/600x600/?sunrise", // Ảnh hiển thị trên feed
      button: {
        title: "👋 Open GM/GN App", // Chữ trên nút bấm
        action: {
          type: "launch_frame",
          name: "GM GN Daily",
          url: appUrl,
          splashImageUrl: "https://api.memegen.link/images/custom/Loading.../Please_wait.png", // Ảnh màn hình chờ
          splashBackgroundColor: "#f7f7f7",
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
