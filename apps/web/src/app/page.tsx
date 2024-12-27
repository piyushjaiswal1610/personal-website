import React from "react";
import Hero from "../components/home/hero";
import RecentWork from "../components/home/recent-work";

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
