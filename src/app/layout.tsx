import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benjamin Sam",
  description: "Benjamin Sam's homepage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
