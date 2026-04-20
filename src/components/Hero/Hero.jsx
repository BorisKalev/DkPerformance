"use client";
import { useRef, useEffect } from "react";
import SponsorsTicker from "../SponsorsTicker/SponsorsTicker";
import BookNowButton from "../ui/BookNowButton";
import { useTranslation } from "@/context/LanguageContext";

const dkLogoVideo = "/videos/DkPerformanceAnimLogo.mp4";

const SCROLL_RANGE = 800;
const VIDEO_START  = 0;
const VIDEO_END    = 3;

export default function Hero() {
  const videoRef = useRef(null);
  const { t } = useTranslation();

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
    <section id="hero" className="min-h-svh flex flex-col bg-page">
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

      <div className="flex flex-col items-center gap-3 pb-10">
        <BookNowButton size="lg" label={t("hero_cta")} />
        <p className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-muted/60">
          {t("hero_slots")}
        </p>
      </div>

      <SponsorsTicker />
    </section>
  );
}
