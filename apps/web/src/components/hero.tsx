"use client";
import React from "react";
import SocialLinks from "./social-links";
import { useTheme } from "../app/theme-provider";

function Hero(): React.ReactNode {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-[95%] mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-medium italic font-serif mb-3">
            Hey, I&apos;m Piyush
          </h1>
          <h3 className="text-xl font-medium font-serif text-sky-500 mb-3">
            engineer, innovator, and tinkerer
          </h3>
          <div className="text-sm text-gray-600 mb-8 leading-tight">
            <p>
              I&apos;m a software developer with a passion for building
              efficient and scalable web and mobile applications. My journey
              into development started with a simple curiosity about how
              technology shapes our world, and over the years, it has grown into
              a fulfilling career.
            </p>

            <br />
            <p>
              I specialize in modern frameworks and tools like React, Next.js,
              Flutter, Firebase, and Google Cloud Platform. Whether I&apos;m
              crafting responsive user interfaces or designing robust backend
              systems, I always focus on delivering solutions that are both
              functional and user-friendly.
            </p>
            <br />
            <p>
              Currently, I work at Talink, where I&apos;m involved in exciting
              projects that challenge me to innovate and grow. I enjoy exploring
              new technologies, optimizing code for performance, and
              collaborating with others to solve complex problems.
            </p>
            <br />
            <p>
              I&apos;m a strong believer in lifelong learning, which is why I
              spend my free time experimenting with new tools, contributing to
              open-source projects, and documenting my journey through blogs.
              These endeavors not only help me improve but also give me an
              opportunity to give back to the developer community.
            </p>
            <br />
            <p>
              When I&apos;m not coding, I&apos;m usually brainstorming ideas for
              side projects or finding ways to make technology more impactful.
              I&apos;m always eager to learn, create, and share my knowledge
              with others.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className=" flex justify-center items-center w-full h-full md:mt-8">
          <div
            className={`aspect-square w-[90%] rounded-2xl bg-gradient-to-br p-8 ${theme === "dark" ? "from-blue-900 to-slate-900" : "from-blue-100 to-transparent"}`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
