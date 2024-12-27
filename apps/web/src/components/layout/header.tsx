"use client";
import { type ReactNode, useState } from "react";
import { NavLink, TextLogo } from "../ui";
import { RxCross2 } from "react-icons/rx";
import ThemeButton from "../theme-button";
import { useTheme } from "../../app/theme-provider";

function Header(): ReactNode {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = ():void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`flex justify-between items-center px-6 py-3 border-b-[0.5px] border-b-gray-400 mx-auto sticky top-0 bg-opacity-80 w-[95%] ${theme === "dark" ? "bg-gray-900 text-orange-50 " : "bg-white text-black"}`}
    >
      <div className="md:w-[30%]">
        <TextLogo />
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex justify-around items-center w-[30%]">
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/articles" label="Articles" />
        <NavLink href="/notes" label="Notes" />
      </div>

      <div className="w-[30%] text-right hidden md:block">
        <ThemeButton />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden w-[30%] text-right">
        <button className="text-2xl" onClick={toggleMenu} type="button">
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden min-h-screen p-4 fixed top-0 right-0 w-2/3 flex flex-col justify-start items-start bg-gray-900 text-orange-50 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-4`}
      >
        <div className="flex justify-between items-center mb-4">
          <button className="text-2xl" onClick={toggleMenu} type="button">
          <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/articles" label="Articles" />
          <NavLink href="/notes" label="Notes" />
        </div>
        <div className="mt-4">
          <ThemeButton />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black opacity-50 z-40 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      />
    </div>
  );
}

export default Header;
