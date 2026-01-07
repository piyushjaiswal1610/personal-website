"use client";

import { useState } from "react";
import { Typewriter } from "../ui";
import { TypingSpeed } from "../ui/Typewriter";

export default function Hero() {
  const [showH3, setShowH3] = useState(false);
  const [showP, setShowP] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center absolute h-full w-full">
      <h1 className="text-4xl font-bold">
        <Typewriter
          txt="I'm Piyush"
          speed={TypingSpeed.slow}
          onComplete={() => setShowH3(true)}
        />
      </h1>
      {showH3 && (
        <h3 className="text-2xl font-medium my-2">
          <Typewriter
            txt="I work on backend systems."
            speed={TypingSpeed.slow}
            onComplete={() => setShowP(true)}
          />
        </h3>
      )}
      {showP && (
        <p className="text-md text-gray-500 italic">
          <Typewriter
            txt="APIs, services, and DevOps."
            speed={TypingSpeed.fast}
          />
        </p>
      )}
    </div>
  );
}
