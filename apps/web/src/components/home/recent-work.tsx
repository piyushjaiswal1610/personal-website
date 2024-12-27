import { type ReactNode } from "react";

function RecentWork(): ReactNode {
  const works = [
    {
      title: "Latest Blog Post",
      description: "Exploring the future of web development",
      date: "Dec 20, 2024",
      link: "#",
    },
    {
      title: "Recent Paper",
      description: "Performance optimization in modern web apps",
      date: "Dec 15, 2024",
      link: "#",
    },
    {
      title: "Featured Project",
      description: "Building scalable architectures",
      date: "Dec 10, 2024",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Recent Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work) => (
            <article
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              key={work.title}
            >
              <time className="text-sm text-gray-500">{work.date}</time>
              <h3 className="text-xl font-semibold mt-2 mb-3">{work.title}</h3>
              <p className="text-gray-600 mb-4">{work.description}</p>
              <a
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1"
                href={work.link}
              >
                Read more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
