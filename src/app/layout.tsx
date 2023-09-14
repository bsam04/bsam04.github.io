import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

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
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col gap-8 py-10 px-5">
            {/* Main content */}
            <div className="grow">{children}</div>
            {/* Footer */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
