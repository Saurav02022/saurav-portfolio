"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for every [data-reveal] element, matching the design's
 * behaviour: JS applies the hidden state, so with JS off nothing is hidden.
 * The attribute value is a stagger index (× 85ms).
 */
export function Reveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    nodes.forEach((n) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(22px)";
      n.style.transition =
        "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const d = parseInt(el.dataset.reveal ?? "0", 10) || 0;
          el.style.transitionDelay = `${d * 85}ms`;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
