import React from "react";
import Hero from "../components/home/hero.tsx";
import RecentWork from "../components/home/recent-work.tsx";

export default function Home(): React.ReactNode {
  return (
    <>
      <h1 className="text-red-500">Hi there!</h1>
      <div>
        <Hero />
        <RecentWork />
      </div>
    </>
  );
}
