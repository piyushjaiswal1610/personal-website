import { type ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../app/theme-provider";

function SocialLinks(): ReactNode {
  const { theme } = useTheme();

  const links = [
    {
      href: "https://github.com/piyushjaiswal1610",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/piyushjaiswal1610",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: <FaXTwitter />,
      label: "X (Twitter)",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors ${theme !== 'dark' ? "invert" : ""}`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;