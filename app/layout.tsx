import type { Metadata } from "next";
import ScrollMotion from "./ScrollMotion";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victoria Sharapova — Portfolio",
  description: "Illustration and graphic design by Victoria Sharapova.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><ScrollMotion />{children}</body>
    </html>
  );
}
