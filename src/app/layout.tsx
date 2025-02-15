import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Theme/ThemeProvider";

const vazir = Vazirmatn({
  variable: "--font-vazir-sans",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <ThemeProvider>
        <body className={`${vazir.variable} `}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
