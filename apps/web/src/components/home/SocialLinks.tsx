import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    { icon: Github, label: 'GitHub', href: '#', count: '3k' },
    { icon: Twitter, label: 'Twitter', href: '#', count: '59k' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', count: '180k' },
    { icon: Youtube, label: 'YouTube', href: '#', count: '117k' }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {links.map(({ icon: Icon, label, href, count }) => (
        <a
          key={label}
          href={href}
          className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
        >
          <Icon className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
          <span className="font-medium group-hover:text-purple-600">{label}</span>
          <span className="text-sm text-gray-500">({count})</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;