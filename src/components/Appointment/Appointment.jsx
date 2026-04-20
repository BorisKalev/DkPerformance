"use client";
import { BOOKING_URL } from "@/lib/booking";
import BookNowButton from "@/components/ui/BookNowButton";

const SERVICES = [
  { label: "Tire Change",               duration: "1 hr",  price: "Prices Vary" },
  { label: "Oil Change",                duration: "1 hr",  price: "Prices Vary" },
  { label: "Brake Service",             duration: "1 hr",  price: "Prices Vary" },
  { label: "Pre-Purchase Inspection",   duration: "1 hr",  price: "C$89.99"     },
  { label: "Oil Change + Tire Change",  duration: "1 hr",  price: "Prices Vary" },
  { label: "Detailing",                 duration: "2 hr",  price: "Prices Vary" },
  { label: "Diagnostic",                duration: "1 hr",  price: "C$110"       },
];

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="py-20 px-6 bg-bg border-t border-border"
    >
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <header className="mb-12">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Book an Appointment</h2>
          <p className="mt-3.5 max-w-[52ch] text-muted text-base leading-[1.7]">
            Choose a service below, then click the button to book your slot
            through our online portal. We'll confirm within one business day.
          </p>
        </header>

        {/* Services + pricing table */}
        <div className="mb-12 border border-border rounded-sm overflow-hidden">
          {SERVICES.map(({ label, duration, price }, i) => (
            <div
              key={label}
              className={`flex items-center justify-between px-6 py-4 gap-4 ${
                i !== SERVICES.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <div className="flex items-center gap-6 shrink-0">
                <span className="text-xs text-muted hidden sm:block">{duration}</span>
                <span className="text-sm font-bold text-accent">{price}</span>
              </div>
            </div>
          ))}
          <div className="px-6 py-3 bg-surface border-t border-border">
            <p className="text-xs text-muted">Labor rate: C$110 / hr + taxes</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <BookNowButton size="lg" label="Book an Appointment" />
          <p className="text-sm text-muted leading-relaxed max-w-[40ch]">
            You'll be taken to our booking portal to select your preferred date
            and time.
          </p>
        </div>
      </div>
    </section>
  );
}
