import { useRef, useEffect } from "react";
import SponsorsTicker from "../SponsorsTicker/SponsorsTicker";

import dkLogoVideo from "../../videos/DkPerformanceAnimLogo.mp4";

// ── Scroll-scrub constants ────────────────────────────────────────────────────
//   SCROLL_RANGE  px of scroll to cover the full animation (more = slower)
//   VIDEO_START   timestamp (s) shown at scroll 0
//   VIDEO_END     timestamp (s) reached when scroll hits SCROLL_RANGE
const SCROLL_RANGE = 800;
const VIDEO_START = 0;
const VIDEO_END = 4;
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    let rafId = null;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / SCROLL_RANGE, 1);
        video.currentTime = VIDEO_START + progress * (VIDEO_END - VIDEO_START);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      // flex-col: video takes up all remaining height, ticker sits at the bottom
      className="min-h-svh flex flex-col bg-page"
    >
      {/* Video — grows to fill the space above the ticker */}
      <div className="flex-1 flex items-center justify-center">
        <video
          ref={videoRef}
          src={dkLogoVideo}
          muted
          playsInline
          preload="auto"
          className="w-full max-w-5xl px-4 sm:px-8"
        />
      </div>

      {/* Ticker — always visible at the bottom of the first viewport */}
      <SponsorsTicker />
    </section>
  );
}
