import { type ReactNode } from "react";
import Link from "next/link";
import { useTheme } from "../../../app/theme-provider";

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps): ReactNode {
  const { theme } = useTheme();
  return (
    <Link
      className={` hover:bg-opacity-30 p-1 w-[5rem] rounded-3xl text-center ${theme === "dark" ? "text-white hover:bg-gray-700" : "text-slate-700 hover:bg-sky-200"}`}
      href={href}
    >
      <p>{label}</p>
    </Link>
  );
}

export default NavLink;
