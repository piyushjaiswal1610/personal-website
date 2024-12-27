'use client'
import { type ReactNode } from "react";
import { useTheme } from "../app/theme-provider";
import Header from "./layout/header";
import Footer from "./layout/footer";

function RootComponent({ children }: { children: ReactNode }): ReactNode {
  const { theme } = useTheme();

  return (
    <div
      className={`mx-auto w-full ${theme === "dark" ? "bg-gray-900 text-white " : "bg-white text-black"}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RootComponent;
