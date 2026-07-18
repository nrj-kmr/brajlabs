"use client";

import Cal from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CalEmbed() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full min-h-[600px] bg-secondary/20 animate-pulse rounded-2xl"></div>;
  }

  return (
    <div className="w-full h-full min-h-[600px] bg-background/50 backdrop-blur-md rounded-2xl overflow-hidden border border-border transition-colors duration-300">
      <Cal 
        calLink="neerajkmr/catchup"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: resolvedTheme === "dark" ? "dark" : "light" }}
      />
    </div>
  );
}
