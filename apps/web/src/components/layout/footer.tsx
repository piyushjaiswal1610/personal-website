import { type ReactNode } from "react";
import Link from "next/link";

function Footer(): ReactNode {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Works", href: "/works" },
    { label: "Papers", href: "/papers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-5">

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Piyush Jaiswal. All rights reserved.</p>
          <p className="mt-2">
            Built with Turborepo, Next.js and Tailwind CSS.{" "}
            <a
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sky-500"
              href="https://github.com/piyushjaiswal1610/personal-website"
              rel="noopener noreferrer"
              target="_blank"
            >
              View source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
