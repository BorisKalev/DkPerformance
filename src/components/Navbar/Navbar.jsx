"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const INSTAGRAM_URL = "https://www.instagram.com/performance_dk/";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#appointment" },
  { label: "Location", href: "#location" },
];

function InstagramIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 px-6 transition-all duration-300 max-sm:py-3.5 max-sm:bg-surface/95 max-sm:backdrop-blur-sm max-sm:shadow-[0_1px_0_var(--color-border)] ${
        scrolled
          ? "py-3.5 bg-surface/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]"
          : "py-5"
      }`}
    >
      <div className="max-w-300 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-russo text-[1.6rem] tracking-[0.04em] text-foreground"
        >
          DK<span className="text-foreground"> Performance</span>
        </a>

        {/* Desktop nav + Instagram */}
        <nav className="hidden sm:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={[
                "relative text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-muted",
                "transition-colors duration-200 hover:text-foreground",
                "after:content-[''] after:absolute after:-bottom-1 after:left-0",
                "after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300",
                "hover:after:w-full",
              ].join(" ")}
            >
              {label}
            </a>
          ))}

          {/* Instagram — separated by a subtle divider */}
          <span className="w-px h-4 bg-muted/30" aria-hidden="true" />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DK Performance on Instagram"
            className="text-muted hover:text-accent transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
        </nav>

        {/* Menu toggle (mobile) */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted hover:text-foreground hover:border-accent/60 hover:shadow-[0_0_14px_rgba(200,16,46,0.2)] transition-all duration-200"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
