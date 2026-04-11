import { Wrench, Gauge, Search, Cog, Sparkles, CarFront } from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";
import BookNowButton from "../ui/BookNowButton";

const SERVICES = [
  {
    icon: Wrench,
    title: "General Maintenance",
    description:
      "Regular maintenance is crucial for keeping your car in good working condition and preventing breakdowns. This includes oil and filter changes, brake and tire checks, and full engine and electrical inspections.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Performance upgrades enhance the power, handling, and overall driving experience of your vehicle. From high-flow exhaust systems and suspension upgrades to performance chips and tuners — we build cars that perform.",
  },
  {
    icon: Search,
    title: "Inspections",
    description:
      "Our inspection process examines your vehicle thoroughly to ensure it is safe and roadworthy. We cover brakes, suspension, steering, tires, emissions, and all critical safety systems.",
  },
  {
    icon: Cog,
    title: "Repair",
    description:
      "Our technicians use specialized tools and equipment to diagnose and repair all types of vehicle issues — including engine, transmission, brakes, suspension, and electrical systems.",
  },
  {
    icon: Sparkles,
    title: "Detailing",
    description:
      "A thorough cleaning and restoration of every interior and exterior surface, leaving your vehicle looking like new. Exterior wash and wax, carpet and seat cleaning, dashboard polishing, and full trim restoration.",
  },
  {
    icon: CarFront,
    title: "Pre-Purchase Inspection",
    description:
      "Comprehensive and professional evaluation of the car, covering over 100+ points from engine performance to frame integrity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-surface">
      <div className="max-w-300 mx-auto">
        <header className="mb-14">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="mt-3.5 max-w-[52ch] text-muted text-base leading-[1.7]">
            From routine maintenance to full performance builds — everything
            your vehicle needs, handled under one roof.
          </p>
        </header>

        <HoverEffect items={SERVICES} />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted max-w-[42ch] leading-relaxed">
            Not sure which service you need?{" "}
            <span className="text-foreground font-medium">Book a slot</span> and
            our team will guide you through the right option for your vehicle.
          </p>
          <BookNowButton label="Book Now" size="sm" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
