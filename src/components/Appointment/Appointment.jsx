"use client";
import Image from "next/image";
import BookNowButton from "@/components/ui/BookNowButton";
import { useTranslation } from "@/context/LanguageContext";

const SERVICES_DATA = [
  { labelKey: "appt_svc1", duration: "~1 hr",  price: "Prices Vary", img: "/images/tireChange.jpg"   },
  { labelKey: "appt_svc2", duration: "~1 hr",  price: "Prices Vary", img: "/images/oilchange.jpg"    },
  { labelKey: "appt_svc3", duration: "~1 hr",  price: "Prices Vary", img: "/images/brakes.jpg"       },
  { labelKey: "appt_svc4", duration: "~1 hr",  price: "C$89.99",     img: "/images/pre-purchase.jpg" },
  { labelKey: "appt_svc6", duration: "~2 hr",  price: "Prices Vary", img: "/images/detailling.jpg"   },
  { labelKey: "appt_svc7", duration: "~1 hr",  price: "C$110",       img: "/images/electrical.jpg"   },
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

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES_DATA.map(({ labelKey, duration, price, img }) => (
            <div
              key={labelKey}
              className="group relative rounded-xl overflow-hidden border border-border bg-surface shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={img}
                  alt={t(labelKey)}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Info panel */}
              <div className="px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.9rem] font-semibold text-foreground leading-snug">
                    {t(labelKey)}
                  </span>
                  <span className="text-xs text-muted">{duration}</span>
                </div>
                <span className="shrink-0 text-sm font-bold text-accent">
                  {price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <BookNowButton size="lg" label={t("appt_cta")} />
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted leading-relaxed max-w-[40ch]">
              {t("appt_redirect")}
            </p>
            <p className="text-xs text-muted/70">{t("appt_labor")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
