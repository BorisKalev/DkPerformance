"use client";
import { useTranslation } from "@/context/LanguageContext";

const INSTAGRAM_URL = "https://www.instagram.com/performance_dk/";

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

export default function Footer() {
  const { t } = useTranslation();

  const LINKS = [
    { labelKey: "nav_about",    href: "#about" },
    { labelKey: "nav_services", href: "#services" },
    { labelKey: "nav_location", href: "#location" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-300 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-8 lg:gap-12 py-14">
        {/* Brand + social */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#hero" className="font-russo text-[1.5rem] tracking-[0.04em] text-foreground">
            DK Performance
          </a>
          <p className="mt-2 text-sm text-muted">{t("footer_tagline")}</p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DK Performance on Instagram"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-3" aria-label="Footer navigation">
          {LINKS.map(({ labelKey, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
            >
              {t(labelKey)}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <a href="tel:+15149528503" className="text-sm text-muted hover:text-accent transition-colors duration-200">
            514-952-8503
          </a>
          <a href="mailto:info@dkperformance.ca" className="text-sm text-muted hover:text-accent transition-colors duration-200">
            info@dkperformance.ca
          </a>
          <p className="mt-1 text-sm text-muted">
            3954 Boulevard Leman, Laval, Quebec H7E 1A1, Canada
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-300 mx-auto px-6 py-5">
          <p className="text-xs text-muted tracking-[0.03em]">
            &copy; {new Date().getFullYear()} DK Performance. {t("footer_copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
