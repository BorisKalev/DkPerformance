"use client";
import BookNowButton from "@/components/ui/BookNowButton";
import { useTranslation } from "@/context/LanguageContext";

const SERVICES_DATA = [
  { labelKey: "appt_svc1", duration: "1 hr",  price: "Prices Vary" },
  { labelKey: "appt_svc2", duration: "1 hr",  price: "Prices Vary" },
  { labelKey: "appt_svc3", duration: "1 hr",  price: "Prices Vary" },
  { labelKey: "appt_svc4", duration: "1 hr",  price: "C$89.99"     },
  { labelKey: "appt_svc5", duration: "1 hr",  price: "Prices Vary" },
  { labelKey: "appt_svc6", duration: "2 hr",  price: "Prices Vary" },
  { labelKey: "appt_svc7", duration: "1 hr",  price: "C$110"       },
];

export default function Appointment() {
  const { t } = useTranslation();

  return (
    <section
      id="appointment"
      className="py-20 px-6 bg-bg border-t border-border"
    >
      <div className="max-w-300 mx-auto">
        <header className="mb-12">
          <span className="section-label">{t("appt_label")}</span>
          <h2 className="section-title">{t("appt_heading")}</h2>
          <p className="mt-3.5 max-w-[52ch] text-muted text-base leading-[1.7]">
            {t("appt_desc")}
          </p>
        </header>

        {/* Services + pricing table */}
        <div className="mb-12 border border-border rounded-sm overflow-hidden">
          {SERVICES_DATA.map(({ labelKey, duration, price }, i) => (
            <div
              key={labelKey}
              className={`flex items-center justify-between px-6 py-4 gap-4 ${
                i !== SERVICES_DATA.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm font-semibold text-foreground">
                {t(labelKey)}
              </span>
              <div className="flex items-center gap-6 shrink-0">
                <span className="text-xs text-muted hidden sm:block">{duration}</span>
                <span className="text-sm font-bold text-accent">{price}</span>
              </div>
            </div>
          ))}
          <div className="px-6 py-3 bg-surface border-t border-border">
            <p className="text-xs text-muted">{t("appt_labor")}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <BookNowButton size="lg" label={t("appt_cta")} />
          <p className="text-sm text-muted leading-relaxed max-w-[40ch]">
            {t("appt_redirect")}
          </p>
        </div>
      </div>
    </section>
  );
}
