"use client";

import React, { useEffect, useState, useMemo } from "react";
import { generateCharacterArray } from "../helper/utils";

interface TypewriterProps {
  txt: string;
}

export default function Typewriter({ txt }: TypewriterProps) {
  const [text, setText] = useState<string>("");
  const characters: string[] = useMemo(() => generateCharacterArray(txt), [txt]);

  useEffect(() => {
    let i = 0;
    setText("");

    const interval = setInterval(() => {
      if (i >= characters.length) {
        clearInterval(interval);
        return;
      }

      // Ensure the character is valid before appending
      const currentChar = characters[i] ?? "";
      setText((prev) => prev + currentChar);
      i++;
    }, 100);

    return () => clearInterval(interval);
  }, [characters]);

  return <span>{text}</span>;
}
