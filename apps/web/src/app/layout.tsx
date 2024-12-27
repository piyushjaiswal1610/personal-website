import React from 'react';
import { Inter } from 'next/font/google';
import Footer from '../components/layout/footer';
import { ThemeProvider } from './theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Piyush Jaiswal - Personal Website',
  description: 'Developer, writer, and creator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <ThemeProvider>
          {/* <Header />  */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}