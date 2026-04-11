import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group p-2 h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated background highlight */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block rounded-xl bg-accent/10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>

          {/* Card */}
          <div className={cn(
            "relative z-10 h-full rounded-xl p-7 flex flex-col gap-4",
            "bg-surface2 border border-border",
            "group-hover:border-accent/50 transition-colors duration-300"
          )}>
            <item.icon className="w-8 h-8 text-accent" aria-hidden="true" />
            <h3 className="text-[1.05rem] font-bold tracking-[0.02em] text-accent">
              {item.title}
            </h3>
            <p className="text-sm text-muted leading-[1.65] flex-1">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
