import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chapter 18 Odyssey",
  description: "A cinematic birthday experience for Shee ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
