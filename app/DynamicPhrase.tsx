"use client";

import { useEffect, useState } from "react";

const fontClasses = ["pixel", "bubble", "italic", "handwritten", "display", "grotesk", "serif"] as const;

export default function DynamicPhrase() {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFontIndex((current) => (current + 1) % fontClasses.length);
    }, 500);
    return () => window.clearInterval(interval);
  }, []);

  return <span className={`dynamic-phrase dynamic-phrase-${fontClasses[fontIndex]}`}>Always making</span>;
}
