import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",    href: "#about"       },
  { label: "Services", href: "#services"    },
  { label: "Gallery",  href: "#gallery"     },
  { label: "Book Now", href: "#appointment" },
];

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
      className={`fixed top-0 left-0 right-0 z-100 px-6 transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-surface/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]"
          : "py-5"
      }`}
    >
      <div className="max-w-300 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-[1.6rem] font-bold tracking-[0.04em] text-black"
        >
          DK<span className="text-accent">Performance</span>
        </a>

        {/* Desktop nav */}
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
        </nav>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.25 p-1"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 bg-bg border-t border-border flex flex-col">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-6 py-4 text-sm font-semibold tracking-[0.12em] uppercase text-muted border-b border-border hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
