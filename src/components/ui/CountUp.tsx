"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export function CountUp({
  to,
  suffix = "",
  raw = false,
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  raw?: boolean; // raw=true 면 연도처럼 그대로 표기(천단위 콤마 없음)
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(eased * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  const display = raw ? String(value) : value.toLocaleString("ko-KR");

  return (
    <span ref={ref} className="tabular">
      {display}
      {suffix}
    </span>
  );
}
