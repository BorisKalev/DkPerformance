"use client";
import { motion } from "framer-motion";

const SPONSORS = [
  { src: "/logos/hr.png",          alt: "H&R" },
  { src: "/logos/bilstein.png",    alt: "Bilstein" },
  { src: "/logos/apr.png",         alt: "APR" },
  { src: "/logos/liqui-moly.png",  alt: "Liqui Moly" },
  { src: "/logos/mann-filter.png", alt: "Mann Filter" },
  { src: "/logos/michelin.png",    alt: "Michelin" },
  { src: "/logos/akebono.png",     alt: "Akebono" },
  { src: "/logos/ngk.png",         alt: "NGK" },
];

const SETS = 4;

export default function SponsorsTicker() {
  return (
    <div className="py-8 md:py-10 bg-page">
      <div className="mx-auto w-full 2xl:w-2/5 px-10 lg:px-15">
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: `-${100 / SETS}%` }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {Array.from({ length: SETS }).flatMap((_, setIdx) =>
              SPONSORS.map(({ src, alt }) => (
                <img
                  key={`${setIdx}-${alt}`}
                  src={src}
                  alt={alt}
                  className="h-20 md:h-25 w-auto object-contain flex-none"
                />
              )),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
