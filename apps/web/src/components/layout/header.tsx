"use client";
import { type ReactNode, useState } from "react";
import Link from "next/link";
import { useTheme } from "../../app/theme-provider";
import TurborepoSvg from '../../../public/turborepo.svg';

function Header(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          href="/"
        >
          Piyush Jaiswal
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["Work", "Blog", "Papers", "Contact"].map((item) => (
            <Link
              className="relative group"
              href={`/${item.toLowerCase()}`}
              key={item}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={toggleTheme}
                      type="button"
          >
            {theme === "light" ? (
              <TurborepoSvg className="w-5 h-5" />
            ) : (
              <TurborepoSvg className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
                      type="button"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-b transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="px-4 py-3 space-y-3">
          {["Work", "Blog", "Papers", "Contact"].map((item) => (
            <Link
              className="block py-2 hover:text-purple-600"
              href={`/${item.toLowerCase()}`}
              key={item}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
