"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/context/LanguageContext";

const FAQ_KEYS = [
  { q: "faq_q1", a: "faq_a1" },
  { q: "faq_q2", a: "faq_a2" },
  { q: "faq_q3", a: "faq_a3" },
  { q: "faq_q4", a: "faq_a4" },
  { q: "faq_q5", a: "faq_a5" },
  { q: "faq_q6", a: "faq_a6" },
  { q: "faq_q7", a: "faq_a7" },
  { q: "faq_q8", a: "faq_a8" },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[0.95rem] font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? "text-accent" : "text-foreground group-hover:text-accent"
          }`}
        >
          {question}
        </span>

        {/* +/- icon */}
        <span
          className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "border-accent bg-accent text-white"
              : "border-border text-muted group-hover:border-accent group-hover:text-accent"
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="w-3.5 h-3.5"
          >
            {isOpen ? (
              <line x1="5" y1="12" x2="19" y2="12" />
            ) : (
              <>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </>
            )}
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted leading-[1.75]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-6 bg-page border-t border-border">
      <div className="max-w-300 mx-auto">
        <header className="mb-12">
          <span className="section-label">{t("faq_label")}</span>
          <h2 className="section-title">{t("faq_heading")}</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-x-20">
          {/* Split the 6 questions into two columns of 3 */}
          {[FAQ_KEYS.slice(0, Math.ceil(FAQ_KEYS.length / 2)), FAQ_KEYS.slice(Math.ceil(FAQ_KEYS.length / 2))].map((col, colIdx) => (
            <div key={colIdx} className="border-t border-border">
              {col.map(({ q, a }, rowIdx) => {
                const globalIdx = colIdx * 3 + rowIdx;
                return (
                  <FAQItem
                    key={q}
                    question={t(q)}
                    answer={t(a)}
                    isOpen={openIndex === globalIdx}
                    onToggle={() => toggle(globalIdx)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
