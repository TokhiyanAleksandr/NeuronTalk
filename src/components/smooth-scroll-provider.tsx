"use client";

import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0 && Math.abs(e.deltaY) < 100) {
        return;
      }

      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const scrollFactor = .5;
      const delta = e.deltaY / scrollFactor;

      isScrolling = true;
      window.scrollBy({
        top: delta,
        behavior: "smooth",
      });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 200);

      e.preventDefault();
    };

    if (window.innerWidth >= 768) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return <>{children}</>;
}
