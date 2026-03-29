import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const INSTAGRAM_URL = "https://www.instagram.com/performance_dk/";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Appointment", href: "#appointment" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + i * 0.07,
      type: "spring",
      damping: 22,
      stiffness: 260,
    },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
};

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Tap-to-close area below the panel */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-199 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", damping: 30, stiffness: 280 },
            }}
            exit={{
              opacity: 0,
              x: "100%",
              transition: { duration: 0.22, ease: "easeIn" },
            }}
            className="fixed top-0 inset-x-0 h-[75vh] z-200 flex flex-col bg-black md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-accent/60 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Centered nav list */}
            <nav className="flex-1 flex flex-col items-center justify-center w-full px-10 gap-0">
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={onClose}
                  className="w-full text-center py-5 border-b border-white/8 text-[1.6rem] font-black tracking-widest uppercase text-accent hover:text-white hover:bg-white/4 transition-all duration-200"
                  style={{ textShadow: "0 0 24px rgba(230,63,0,0.35)" }}
                >
                  {label}
                </motion.a>
              ))}

              {/* Instagram */}
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                custom={NAV_ITEMS.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={onClose}
                aria-label="DK Performance on Instagram"
                className="w-full flex items-center justify-center gap-3 py-5 border-b border-white/8 text-[1.6rem] font-black tracking-widest uppercase text-accent hover:text-white hover:bg-white/4 transition-all duration-200"
                style={{ textShadow: "0 0 24px rgba(230,63,0,0.35)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </motion.a>
            </nav>

            {/* Bottom logo */}
            <div className="pb-10 flex justify-center">
              <span className="font-russo text-[1rem] tracking-[0.06em] text-white/20">
                DK <span className="text-accent/40">Performance</span>
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
