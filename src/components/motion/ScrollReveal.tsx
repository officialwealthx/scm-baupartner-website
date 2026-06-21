"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollReveal arms the CSS-based reveal system.
 *
 * It marks the document with `data-scm-js` (which lets the stylesheet enable
 * the hidden start state) and uses a single IntersectionObserver to add the
 * `is-visible` class to `[data-reveal]` / `[data-reveal-stagger]` elements as
 * they scroll into view. If JS never runs, or motion is reduced, all content
 * remains fully visible — nothing is hidden behind JavaScript.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    // If the visitor prefers reduced motion, do not arm offsets. Content is
    // already visible; we simply skip the observer to avoid any movement.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      root.removeAttribute("data-scm-js");
      return;
    }

    root.setAttribute("data-scm-js", "");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]"),
    );

    if (targets.length === 0) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      // Fallback: reveal everything immediately.
      targets.forEach((el) => el.classList.add("is-visible"));
      root.removeAttribute("data-scm-js");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
