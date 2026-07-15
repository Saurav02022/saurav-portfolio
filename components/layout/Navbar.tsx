"use client";

import { useEffect, useState } from "react";
import { NAME, NAV_ITEMS, RESUME_URL } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const pos = window.scrollY + 160;
      let cur = "";
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) cur = id;
      }
      setActiveId(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn("nav", scrolled && "scrolled")}>
      <div className="wrap navInner">
        <a className="brand" href="#top">
          {NAME}
          <span className="dot">.</span>
        </a>
        <nav className="navlinks" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className={cn("navlink", activeId === item.id && "active")}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              <span className="n">{item.num}</span> {item.label}
            </a>
          ))}
          <a className="navcta" href={RESUME_URL} target="_blank" rel="noopener">
            Résumé
          </a>
        </nav>
        <button
          className={cn("menuBtn", menuOpen && "open")}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="ic ic-menu"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <svg
            className="ic ic-close"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>
      <div className={cn("mobileMenu", menuOpen && "open")} id="mobileMenu">
        <div className="inner">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className="mLink"
              href={`#${item.id}`}
              onClick={closeMenu}
            >
              <span className="n">{item.num}</span> {item.label}
            </a>
          ))}
          <a
            className="mCta"
            href={RESUME_URL}
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            Download résumé ↓
          </a>
        </div>
      </div>
    </header>
  );
}
