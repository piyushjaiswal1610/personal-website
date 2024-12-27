import Link from "next/link";
import React from "react";
import Header from "../../components/layout/Header";

const BlogPage = () => {
  const blogs = [
    {
      date: "Dec 20, 2024",
      title: "Building scalable React applications",
      slug: "building-scalable-react-applications",
    },
    {
      date: "Dec 15, 2024",
      title: "The evolution of web development",
      slug: "evolution-of-web-development",
    },
    {
      date: "Dec 10, 2024",
      title: "Understanding TypeScript generics",
      slug: "understanding-typescript-generics",
    },
    {
      date: "Dec 05, 2024",
      title: "Mastering NextJS 14 features",
      slug: "mastering-nextjs-14-features",
    },
    {
      date: "Nov 30, 2024",
      title: "Performance optimization techniques",
      slug: "performance-optimization-techniques",
    },
    {
      date: "Nov 25, 2024",
      title: "State management in modern React",
      slug: "state-management-modern-react",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16 my-4">
        <h1 className="text-4xl font-bold mb-8">Blogs</h1>

        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
          I write about web development, software engineering, and my journey in
          tech. Here are all my articles to date.
        </p>

        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.slug} className="flex items-baseline gap-6">
              <span className="text-gray-500 dark:text-gray-400 w-32 flex-shrink-0">
                {blog.date}
              </span>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {blog.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;
