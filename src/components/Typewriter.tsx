"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 50,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = window.setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => window.clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className={className} style={{ whiteSpace: "pre-line" }}>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
}
