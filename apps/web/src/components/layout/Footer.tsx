import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    { 
      icon: Mail, 
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Works", href: "/works" },
    { label: "Papers", href: "/papers" },
    { label: "Contact", href: "/contact" }
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
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Piyush Jaiswal. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js and Tailwind CSS.{' '}
            <a 
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              View source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;