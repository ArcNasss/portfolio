"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Trophy } from "lucide-react";

const SIZES = {
  landscape: { width: 260, height: 160 },
  portrait: { width: 160, height: 220 },
};

const OFFSET = 16;

export default function AchievementItem({
  title,
  subtitle,
  year,
  image,
  orientation = "landscape",
}: {
  title: string;
  subtitle: string;
  year: string;
  image?: string;
  orientation?: "landscape" | "portrait";
}) {
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState({ x: 1, y: 1 });

  const { width: POPUP_WIDTH, height: POPUP_HEIGHT } = SIZES[orientation];

  function handleMouseEnter(e: React.MouseEvent) {
    if (!image) return;
    setDir({
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
    });
    setPos({ x: e.clientX, y: e.clientY });
    setHovering(true);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!image) return;
    setPos({ x: e.clientX, y: e.clientY });
  }

  let left = dir.x === 1 ? pos.x + OFFSET : pos.x - POPUP_WIDTH - OFFSET;
  let top = dir.y === 1 ? pos.y + OFFSET : pos.y - POPUP_HEIGHT - OFFSET;

  if (typeof window !== "undefined") {
    if (left < 0) left = pos.x + OFFSET;
    if (left + POPUP_WIDTH > window.innerWidth) left = pos.x - POPUP_WIDTH - OFFSET;
    if (top < 0) top = pos.y + OFFSET;
    if (top + POPUP_HEIGHT > window.innerHeight) top = pos.y - POPUP_HEIGHT - OFFSET;
  }

  return (
    <div
      className="relative flex items-center gap-4 border-b border-border py-4 last:border-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
        <Trophy className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <span className="text-sm text-muted-foreground">{year}</span>

      {image && (
        <AnimatePresence>
          {hovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="pointer-events-none fixed z-50 overflow-hidden rounded-lg border border-border bg-muted shadow-xl transition-[left,top] duration-150 ease-out"
              style={{ left, top, width: POPUP_WIDTH, height: POPUP_HEIGHT }}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}