import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const poppins = Poppins({
  weight: ['400', '700'],  // You can adjust weights as needed
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Daniel's Portafolio",
  description: "Modern minimalistic website with a slick design",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}