import { type ReactNode } from "react";
import Link from "next/link";
import { useTheme } from "../../../app/theme-provider";

function TextLogo(): ReactNode {
  const { theme } = useTheme();
  return (
    <Link href="/">
      <h1 className={`text-[1.5rem] font-semibold font-serif ${theme === 'dark' ? 'text-blue-400' : 'text-gray-900'}`}>
        Piyush Jaiswal
      </h1>
    </Link>
  );
}

export default TextLogo;
