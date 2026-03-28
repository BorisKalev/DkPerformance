import { motion } from "framer-motion";

import hrLogo from "@/assets/logos/hr.png";
import bilsteinLogo from "@/assets/logos/bilstein.png";
import aprLogo from "@/assets/logos/apr.png";
import liquiMolyLogo from "@/assets/logos/liqui-moly.png";
import mannFilterLogo from "@/assets/logos/mann-filter.png";
import michelinLogo from "@/assets/logos/michelin.png";
import akebonoLogo from "@/assets/logos/akebono.png";
import ngkLogo from "@/assets/logos/ngk.png";

// ── Add / remove sponsors here ────────────────────────────────────────────
const SPONSORS = [
  { src: hrLogo, alt: "H&R" },
  { src: bilsteinLogo, alt: "Bilstein" },
  { src: aprLogo, alt: "APR" },
  { src: liquiMolyLogo, alt: "Liqui Moly" },
  { src: mannFilterLogo, alt: "Mann Filter" },
  { src: michelinLogo, alt: "Michelin" },
  { src: akebonoLogo, alt: "Akebono" },
  { src: ngkLogo, alt: "NGK" },
];

// Each sponsor list is cloned SETS times so the strip is always wider than
// any viewport. The animation shifts exactly one clone (100 / SETS %) so the
// loop is seamless. Visual speed stays the same regardless of SETS.
const SETS = 4;

export default function SponsorsTicker() {
  return (
    <div className="py-8 md:py-12 bg-page">
      <div className="mx-auto w-1/2 px-5 lg:px-20">
        {" "}
        {/* container fixed */}
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
                  className="h-10 md:h-14 w-auto object-contain flex-none"
                />
              )),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
