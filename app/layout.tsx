import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "./provider";

const poppins = Poppins({
  weight: ['400', '700'],  // You can adjust weights as needed
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Daniel's Portfolio",
  description: "Modern minimalistic website with a slick design",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
