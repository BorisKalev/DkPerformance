"use client";
import { Wrench, Gauge, Search, Cog, Sparkles, CarFront } from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";
import BookNowButton from "../ui/BookNowButton";
import { useTranslation } from "@/context/LanguageContext";

const SERVICE_KEYS = [
  { icon: Wrench,    titleKey: "svc1_title", descKey: "svc1_desc" },
  { icon: Gauge,     titleKey: "svc2_title", descKey: "svc2_desc" },
  { icon: Search,    titleKey: "svc3_title", descKey: "svc3_desc" },
  { icon: Cog,       titleKey: "svc4_title", descKey: "svc4_desc" },
  { icon: Sparkles,  titleKey: "svc5_title", descKey: "svc5_desc" },
  { icon: CarFront,  titleKey: "svc6_title", descKey: "svc6_desc" },
];

export default function Services() {
  const { t } = useTranslation();

  const services = SERVICE_KEYS.map(({ icon, titleKey, descKey }) => ({
    icon,
    title: t(titleKey),
    description: t(descKey),
  }));

  return (
    <section id="services" className="py-20 px-6 bg-surface">
      <div className="max-w-300 mx-auto">
        <header className="mb-14">
          <span className="section-label">{t("services_label")}</span>
          <h2 className="section-title">{t("services_heading")}</h2>
          <p className="mt-3.5 max-w-[52ch] text-muted text-base leading-[1.7]">
            {t("services_desc")}
          </p>
        </header>

        <HoverEffect items={services} />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted max-w-[42ch] leading-relaxed">
            {t("services_nudge")}{" "}
            <span className="text-foreground font-medium">{t("services_slot")}</span>{" "}
            {t("services_team")}
          </p>
          <BookNowButton label={t("services_btn")} size="sm" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
