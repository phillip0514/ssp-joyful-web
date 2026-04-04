import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "永諾意僱傭中心 | 香港菲傭印傭 · 本地海外女傭 · 文件代辦",
  description:
    "永諾意僱傭中心—優質菲傭及印傭、本地完約與海外女傭、文件代辦。勞工處職業介紹所牌照 63253。元朗合益廣場。",
    verification: {
      google: "6l5ihA4yyJHgZYSwdwjllh-kxh8MCShvqThqcOE6v-g",
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans text-[15px] leading-normal tracking-normal sm:text-base">
        {children}
      </body>
    </html>
  );
}
