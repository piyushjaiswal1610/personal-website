import { type ReactNode } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../app/theme-provider";

function ThemeButton(): ReactNode {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="text-xl"
      onClick={() => {
        toggleTheme();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          toggleTheme();
        }
      }}
      tabIndex={0}
      type="button"
    >
      {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}

export default ThemeButton;
