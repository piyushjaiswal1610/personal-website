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
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap gap-6 justify-center">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
              <div className="flex justify-center gap-6 mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Piyush Jaiswal. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js and Tailwind CSS.{" "}
            <a
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              href="https://github.com/yourusername/portfolio"
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
