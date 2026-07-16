"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function DateLocation() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="rounded-lg bg-muted p-4">
      <p className="text-sm font-medium">{date}</p>
      <p className="text-xs text-muted-foreground">{profile.location}</p>
    </div>
  );
}
