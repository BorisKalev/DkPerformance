const BRANDS = [
  "Porsche",
  "Audi",
  "Mercedes-Benz",
  "Ferrari",
  "Lamborghini",
  "Aston Martin",
  "McLaren",
];
import { Button } from "../ui/moving-border";
const STATS = [
  { value: "20+", label: "Years of expertise" },
  { value: "500+", label: "Vehicles serviced" },
  { value: "100%", label: "Satisfaction guaranteed" },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-28 px-6 bg-page">
      <div className="max-w-300 mx-auto">
        {/* ── Top header row ─────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 pb-12 border-b border-primary/10">
          {/* Label + Title */}
          <div className="lg:flex-1">
            <span className="section-label">About Us</span>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[0.02em] text-primary mt-1">
              The DK
              <br className="hidden sm:block" /> Difference
            </h2>
          </div>

          {/* Brand chip list */}
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

        {/* ── Body copy ─────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
          {/* Left column */}
          <div className="flex flex-col gap-7">
            {/* Decorative opening mark */}
            <span
              className="font-heading text-[5rem] leading-none text-accent select-none -mb-4"
              aria-hidden="true"
            >
              "
            </span>

            <p className="text-[1.1rem] text-primary leading-[1.75] font-medium">
              Welcome to <strong className="font-bold">DK Performance</strong>,
              where we pride ourselves on providing top-quality repair and
              maintenance services for high-end vehicles. Our experienced and
              skilled mechanics are trained to work on all makes and models of
              German and exotic cars, including Porsche, Audi, Mercedes-Benz,
              Ferrari, Lamborghini, and more.
            </p>

            <p className="text-[0.975rem] text-primary/65 leading-[1.8]">
              At our shop, we understand that your vehicle is more than just a
              mode of transportation. That's why we use only the best parts and
              equipment to ensure that your car is running at its peak
              performance level. Whether you need routine maintenance, major
              repairs, or custom upgrades, our team has the expertise to handle
              any job with precision and care.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-7 lg:pt-20">
            <p className="text-[0.975rem] text-primary/65 leading-[1.8]">
              We know that having your car in the shop can be inconvenient,
              which is why we strive to make the process as smooth and
              stress-free as possible. From the moment you walk in the door, you
              can expect friendly, personalized service and a commitment to
              excellence.
            </p>

            <p className="text-[0.975rem] text-primary/65 leading-[1.8]">
              Thank you for choosing DK Performance. We look forward to serving
              you and your vehicle with the highest level of care and expertise.
            </p>

            {/* Accent pull-quote */}
            <div className="mt-2 pl-5 border-l-2 border-accent">
              <p className="text-[0.8rem] font-bold tracking-[0.14em] uppercase text-primary">
                We stand behind our work with a satisfaction guarantee — your
                car is in good hands.
              </p>
            </div>

            <Button
              borderRadius="1.75rem"
              containerClassName="w-52 h-14"
              borderClassName="bg-[radial-gradient(var(--color-accent)_40%,transparent_60%)]"
              className="bg-surface2 text-foreground border-border text-sm font-semibold tracking-widest uppercase hover:text-accent"
            >
              <a href="#appointment">Book a Service</a>
            </Button>
          </div>
        </div>

        {/* ── Stats row ─────────────────────────────────────────── */}
        <div className="mt-20 pt-12 border-t border-primary/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-heading text-[3.5rem] leading-none text-accent">
                {value}
              </span>
              <span className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-primary/45 mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
