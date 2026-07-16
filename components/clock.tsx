"use client";

import { useEffect, useState } from "react";

export default function Clock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date()
          .toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase()
      );
    update();
    const interval = setInterval(update, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return <span className={`font-mono ${className}`}>{time}</span>;
}
