import React from "react";
import Hero from "../components/hero.tsx";
import Highlights from "../components/highlights.tsx";

export default function Home(): React.ReactNode {
  return (
    <div>
      <Hero />
      <Highlights />
    </div>
  );
}
