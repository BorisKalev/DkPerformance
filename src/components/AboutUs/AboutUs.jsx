"use client";
import { Button } from "../ui/moving-border";
import { useTranslation } from "@/context/LanguageContext";

const BRANDS = [
  "Porsche", "Audi", "Mercedes-Benz", "Ferrari",
  "Lamborghini", "Aston Martin", "McLaren",
];

export default function AboutUs() {
  const { t } = useTranslation();

  const STATS = [
    { value: "20+",  labelKey: "about_stat1" },
    { value: "500+", labelKey: "about_stat2" },
    { value: "100%", labelKey: "about_stat3" },
  ];

  return (
    <section id="about" className="py-28 px-6 bg-page">
      <div className="max-w-300 mx-auto">
        {/* Top header row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 pb-12 border-b border-primary/10">
          <div className="lg:flex-1">
            <span className="section-label">{t("about_label")}</span>
            <h2 className="font-russo text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[0.02em] text-primary mt-1">
              {t("about_heading")}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-xs">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary/50 border border-primary/15 px-3 py-1.5 rounded-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Body copy */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
          <div className="flex flex-col gap-7">
            <span
              className="font-heading text-[5rem] leading-none text-accent select-none -mb-4"
              aria-hidden="true"
            >
              "
            </span>
            <p className="text-[1.1rem] text-primary leading-[1.75] font-medium">
              {t("about_body1")}
            </p>
            <p className="text-[0.975rem] text-primary/65 leading-[1.8]">
              {t("about_body2")}
            </p>
          </div>

          <div className="flex flex-col gap-7 lg:pt-20">
            <p className="text-[0.975rem] text-primary/65 leading-[1.8]">
              {t("about_body3")}
            </p>
            <p className="text-[0.975rem] text-primary/65 leading-[1.8]">
              {t("about_body4")}
            </p>
            <div className="mt-2 pl-5 border-l-2 border-accent">
              <p className="text-[0.8rem] font-bold tracking-[0.14em] uppercase text-primary">
                {t("about_pullquote")}
              </p>
            </div>
            <Button
              borderRadius="1.75rem"
              containerClassName="w-52 h-14"
              borderClassName="bg-[radial-gradient(var(--color-accent)_40%,transparent_60%)]"
              className="bg-surface2 text-foreground border-border text-sm font-semibold tracking-widest uppercase hover:text-accent"
            >
              <a href="#appointment">{t("about_cta")}</a>
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-12 border-t border-primary/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map(({ value, labelKey }) => (
            <div key={labelKey} className="flex flex-col gap-1">
              <span className="font-heading text-[3.5rem] leading-none text-accent">
                {value}
              </span>
              <span className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-primary/45 mt-1">
                {t(labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
