import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How to Flex vs Grid",
  description: "Created with v0 huehue",
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
