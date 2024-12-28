"use client";
import React from "react";
import { useTheme } from "../app/theme-provider";
import SocialLinks from "./social-links";

function Hero(): React.ReactNode {
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-screen pt-12 pb-2 mb-12 px-4 ${
        theme === "dark"
          ? "bg-gradient-to-b from-blue-950 to-slate-900"
          : "bg-gradient-to-br from-orange-50 to-sky-100"
      }`}
    >
      <div className="max-w-[95%] mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-medium italic font-serif mb-3">
            Hey, I&apos;m Piyush
          </h1>
          <h3 className="text-xl font-medium font-serif text-sky-500 mb-3">
            An engineer in the making
          </h3>
          <div className="text-sm text-gray-500 mb-8 leading-tight">
            <p>
              Engineering has always been more than a profession for me—it&apos;s a
              way of thinking, solving problems, and innovating for a better
              future. My journey began with a simple realization: I don&apos;t
              just want to be an engineer on paper—I want to embody the true
              spirit of engineering, where curiosity meets purpose.
            </p>

            <br />
            <p>
              While I&apos;m currently learning and developing my skills in
              building scalable, my vision extends beyond software. I&apos;m
              fascinated by the intersections of disciplines—where mechanical,
              electrical, and even aerospace engineering converge with
              technology. For me, engineering is about understanding the
              fundamentals and pushing the boundaries of what&apos;s possible,
              no matter the field.
            </p>
            <br />
            <p>
              I believe that true engineering excellence comes from continuous
              learning and exploration. This is why I aim to actively engage in
              interdisciplinary projects, experiment with cutting-edge
              technologies, and document my experiences to share with others.
              It&apos;s not just about staying updated; it&apos;s about
              contributing to the collective growth of the engineering
              community.
            </p>

            <br />
            <p>
              My ultimate goal is to make an impact across multiple engineering
              domains. Whether it&apos;s developing a more efficient software
              solution, exploring renewable energy systems, or contributing to
              futuristic technologies, I strive to approach each challenge with
              humility, dedication, and a deep respect for the process.
            </p>

            <br />
            <p>
              When I&apos;m not immersed in my work, I&apos;m brainstorming
              ideas for projects that combine creativity and technical depth.
              I&apos;m passionate about inspiring others to embrace engineering
              as a mindset—a way to innovate, solve, and create meaningful
              change.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className=" flex justify-center items-center w-full h-full md:mt-28">
          <div
            className={`aspect-square w-[80%] rounded-2xl bg-gradient-to-br ${
              theme === "dark" ? "" : ""
            }`}
          >
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
