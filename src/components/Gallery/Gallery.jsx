import { useState } from "react";

const ITEMS = [
  {
    id: 1,
    src: "https://placehold.co/800x600/111/e63f00?text=Build+01",
    alt: "Engine build 01",
  },
  {
    id: 2,
    src: "https://placehold.co/800x600/111/e63f00?text=Build+02",
    alt: "Turbo install",
  },
  {
    id: 3,
    src: "https://placehold.co/800x600/111/e63f00?text=Build+03",
    alt: "Dyno run",
  },
  {
    id: 4,
    src: "https://placehold.co/800x600/111/e63f00?text=Build+04",
    alt: "Suspension setup",
  },
  {
    id: 5,
    src: "https://placehold.co/800x600/111/e63f00?text=Build+05",
    alt: "Custom exhaust",
  },
  {
    id: 6,
    src: "https://placehold.co/800x600/111/e63f00?text=Build+06",
    alt: "Roll cage fab",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setLightbox((i) => (i + 1) % ITEMS.length);

  return (
    <section id="gallery" className="py-20 px-6 bg-bg">
      <div className="max-w-300 mx-auto">
        <header className="mb-10">
          <span className="section-label">The Work</span>
          <h2 className="section-title">Build Gallery</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className="relative group aspect-4/3 overflow-hidden rounded-[3px] bg-surface2"
              onClick={() => setLightbox(idx)}
              aria-label={`View ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              {/* Hover overlay */}
              <span className="absolute inset-0 flex items-center justify-center bg-accent/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-200 bg-black/92 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div
            className="relative max-w-[min(90vw,900px)] w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute -top-10 right-0 text-foreground text-xl px-2 py-1 opacity-70 hover:opacity-100 transition-opacity"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              className="absolute -left-12 top-1/2 -translate-y-1/2 text-white text-5xl leading-none px-2 opacity-70 hover:opacity-100 transition-opacity"
              onClick={prev}
              aria-label="Previous"
            >
              ‹
            </button>

            <img
              src={ITEMS[lightbox].src}
              alt={ITEMS[lightbox].alt}
              className="w-full rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            />

            {/* Next */}
            <button
              className="absolute -right-12 top-1/2 -translate-y-1/2 text-white text-5xl leading-none px-2 opacity-70 hover:opacity-100 transition-opacity"
              onClick={next}
              aria-label="Next"
            >
              ›
            </button>

            <p className="text-muted text-sm tracking-[0.04em]">
              {ITEMS[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
