'use client';

import React from 'react';

export default function BlogDetails() {
  const blogData = {
    title: "How I Built My Portfolio with Next.js and TailwindCSS",
    author: "Piyush Jaiswal",
    date: "December 28, 2024",
    content: `
      Welcome to my blog! In this post, I share my journey of creating a professional portfolio
      website using modern tools like Next.js, TailwindCSS, and shadcn. From the initial designs to deployment,
      I explain the key decisions I made to optimize for performance, accessibility, and aesthetics.
    `,
    tags: ["Next.js", "TailwindCSS", "Portfolio", "Web Development"],
    relatedPosts: [
      { title: "Understanding the Basics of TailwindCSS", href: "/blog/tailwind-basics" },
      { title: "Why I Chose Next.js for My Portfolio", href: "/blog/why-nextjs" },
      { title: "Deploying Apps to Vercel Like a Pro", href: "/blog/vercel-deployment" },
    ],
  };

  return (
    <div className="container mx-auto py-8 flex justify-between items-start">
      <article className="prose dark:prose-invert w-[75%] mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">{blogData.title}</h1>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            By <span className="font-medium">{blogData.author}</span> | {blogData.date}
          </div>
        </header>

        <section className="content text-lg text-gray-700 dark:text-gray-300">
          <p>{blogData.content}</p>
        </section>

        <footer className="mt-8">
          <div className="tags flex gap-2">
            {blogData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="related-posts mt-8">
            <h3 className="text-xl font-semibold">Related Posts</h3>
            <ul className="mt-4 space-y-2">
              {blogData.relatedPosts.map((post, index) => (
                <li key={index}>
                  <a
                    href={post.href}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </article>
      <section className='w-[25%]'>
        { "New Section" }
      </section>
    </div>
  );
}