import React from "react";
import Hero from "../components/home/hero.tsx";
import RecentWork from "../components/home/recent-work.tsx";

export default function Home(): React.ReactNode {
  return (
    <div>
      <Hero />
      <RecentWork />
    </div>
  );
}
