import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import RootComponent from "../components/root.tsx";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Piyush Jaiswal",
  description: "Developer, writer, and creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <RootComponent>{children}</RootComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}
