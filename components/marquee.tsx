"use client";

import { useEffect, useRef } from "react";

export default function Marquee({
  children,
  baseSpeed = 0.4,
  fastSpeed = 2.2,
  direction = "left",
  className = "",
}: {
  children: React.ReactNode;
  baseSpeed?: number;
  fastSpeed?: number;
  direction?: "left" | "right";
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const currentSpeedRef = useRef(baseSpeed);
  const targetSpeedRef = useRef(baseSpeed);
  const pausedRef = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleScroll() {
      targetSpeedRef.current = fastSpeed;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        targetSpeedRef.current = baseSpeed;
      }, 300);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [baseSpeed, fastSpeed]);

  useEffect(() => {
    let frameId: number;
    const dir = direction === "right" ? 1 : -1;

    function animate() {
      // Lerp halus menuju kecepatan target (bukan lompat langsung)
      currentSpeedRef.current +=
        (targetSpeedRef.current - currentSpeedRef.current) * 0.04;

      if (!pausedRef.current) {
        offsetRef.current += dir * currentSpeedRef.current;
      }

      const track = trackRef.current;
      if (track) {
        const width = track.scrollWidth / 2;
        if (width > 0) {
          if (offsetRef.current <= -width) offsetRef.current += width;
          if (offsetRef.current >= 0) offsetRef.current -= width;
        }
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [direction]);

  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex w-max gap-3">
        <div className="flex shrink-0 gap-3">{children}</div>
        <div className="flex shrink-0 gap-3" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}