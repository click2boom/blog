import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scrollprogress";
// import { SmoothCursor } from "@/components/smoothcursor";
import "./globals.css";

import NavBar from "@/components/navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SISHUI's Blog",
  description: "一个用于记录知识的技术博客",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <main className="px-64">
            <NavBar />
            {children}
          </main>
          {/* <SmoothCursor /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
