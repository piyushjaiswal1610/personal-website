"use client";

import React, { useEffect, useState, useMemo } from "react";
import { generateCharacterArray } from "../helper/utils";

export enum TypingSpeed {
  slow = 100,
  med = 50,
  fast = 20,
}

interface TypewriterProps {
  txt: string;
  speed: TypingSpeed;
  onComplete?: () => void;
}

export default function Typewriter({
  txt,
  speed,
  onComplete,
}: TypewriterProps) {
  const [text, setText] = useState<string>("");
  const characters: string[] = useMemo(
    () => generateCharacterArray(txt),
    [txt]
  );

  useEffect(() => {
    let i = 0;
    setText("");

    const interval = setInterval(() => {
      if (i >= characters.length) {
        if (onComplete) onComplete();
        clearInterval(interval);
        return;
      }

      // Ensure the character is valid before appending
      const currentChar = characters[i] ?? "";
      setText((prev) => prev + currentChar);
      i++;
    }, speed);

    return () => clearInterval(interval);
  }, [characters]);

  return <span>{text}</span>;
}
