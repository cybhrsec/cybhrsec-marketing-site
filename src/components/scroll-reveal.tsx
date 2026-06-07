"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let cancelled = false;

    const setupReveal = () => {
      if (cancelled) return;

      const elements = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");

      if (!elements.length) {
        window.requestAnimationFrame(setupReveal);
        return;
      }

      if (reduceMotion.matches) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12,
        },
      );

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
          element.classList.add("is-visible");
        } else {
          observer?.observe(element);
        }
      });
    };

    window.requestAnimationFrame(setupReveal);

    const handleScrollFallback = () => {
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]:not(.is-visible)").forEach(
        (element) => {
          const rect = element.getBoundingClientRect();

          if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
            element.classList.add("is-visible");
            observer?.unobserve(element);
          }
        },
      );
    };

    window.addEventListener("scroll", handleScrollFallback, { passive: true });
    window.addEventListener("resize", handleScrollFallback);

    return () => {
      cancelled = true;
      observer?.disconnect();
      window.removeEventListener("scroll", handleScrollFallback);
      window.removeEventListener("resize", handleScrollFallback);
    };
  }, []);

  return null;
}
