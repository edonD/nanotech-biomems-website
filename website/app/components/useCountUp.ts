"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function useCountUp(
  end: number,
  duration: number = 2000,
  options?: { prefix?: string; suffix?: string; decimals?: number; margin?: string }
) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: (options?.margin || "-50px") as `${number}px` });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  const decimals = options?.decimals ?? 0;
  const formatted = `${options?.prefix || ""}${count.toFixed(decimals)}${options?.suffix || ""}`;

  return { ref, formatted, isInView };
}
