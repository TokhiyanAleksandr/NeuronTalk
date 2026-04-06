//@ts-nocheck

"use client";

export function enableSmoothScroll() {
  let isScrolling = false;
  let scrollTimeout: NodeJS.Timeout;

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const scrollFactor = 1.5;
    const delta = e.deltaY * scrollFactor;

    isScrolling = true;
    window.scrollBy({
      top: delta,
      behavior: "smooth",
    });

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 150);

    e.preventDefault();
  };

  const handleTouchStart = () => {
    document.removeEventListener("wheel", handleWheel, { passive: false });
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      document.addEventListener("wheel", handleWheel, { passive: false });
    }, 100);
  };

  document.addEventListener("wheel", handleWheel, { passive: false });
  document.addEventListener("touchstart", handleTouchStart);
  document.addEventListener("touchend", handleTouchEnd);

  return () => {
    document.removeEventListener("wheel", handleWheel);
    document.removeEventListener("touchstart", handleTouchStart);
    document.removeEventListener("touchend", handleTouchEnd);
    clearTimeout(scrollTimeout);
  };
}
