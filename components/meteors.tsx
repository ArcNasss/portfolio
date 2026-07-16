"use client";

import { useEffect, useState } from "react";

type MeteorStyle = {
  top: string;
  left: string;
  animation: string;
};

export default function Meteors({ number = 12 }: { number?: number }) {
  // Digenerate setelah mount (client-only) supaya posisi acak tidak
  // menyebabkan hydration mismatch antara server & client.
  const [meteors, setMeteors] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: number }, () => {
      const duration = 4 + Math.random() * 4;
      const delay = Math.random() * 6;
      return {
        top: "-10%",
        left: `${Math.random() * 100}%`,
        animation: `meteor ${duration}s linear ${delay}s infinite`,
      };
    });
    setMeteors(generated);
  }, [number]);

  return (
    <>
      {meteors.map((style, i) => (
        <span
          key={i}
          className="absolute h-0.5 w-0.5 rotate-[215deg] rounded-full bg-foreground"
          style={style}
        >
          <span className="absolute top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-foreground to-transparent" />
        </span>
      ))}
    </>
  );
}
