import React from "react";
import Hero from "../components/hero.tsx";
import RecentWork from "../components/recent-work.tsx";

export default function Home(): React.ReactNode {
  return (
    <div>
      <Hero />
      <RecentWork />
    </div>
  );
}
