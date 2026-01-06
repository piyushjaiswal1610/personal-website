import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush",
  description: "I build backend systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
