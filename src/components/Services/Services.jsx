const SERVICES = [
  {
    icon: "🔧",
    title: "General Maintenance",
    description:
      "Regular maintenance is crucial for keeping your car in good working condition and preventing breakdowns. This includes oil and filter changes, brake and tire checks, and full engine and electrical inspections.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Performance upgrades enhance the power, handling, and overall driving experience of your vehicle. From high-flow exhaust systems and suspension upgrades to performance chips and tuners — we build cars that perform.",
  },
  {
    icon: "🔍",
    title: "Inspections",
    description:
      "Our inspection process examines your vehicle thoroughly to ensure it is safe and roadworthy. We cover brakes, suspension, steering, tires, emissions, and all critical safety systems.",
  },
  {
    icon: "⚙️",
    title: "Repair",
    description:
      "Our technicians use specialized tools and equipment to diagnose and repair all types of vehicle issues — including engine, transmission, brakes, suspension, and electrical systems.",
  },
  {
    icon: "✨",
    title: "Detailing",
    description:
      "A thorough cleaning and restoration of every interior and exterior surface, leaving your vehicle looking like new. Exterior wash and wax, carpet and seat cleaning, dashboard polishing, and full trim restoration.",
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

        <ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {SERVICES.map(({ icon, title, description }) => (
            <li
              key={title}
              className="bg-surface2 border border-border rounded-sm p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1"
            >
              <span
                className="block text-[2rem] mb-4 text-accent"
                aria-hidden="true"
              >
                {icon}
              </span>
              <h3 className="text-[1.1rem] font-bold tracking-[0.02em] mb-2.5 text-white">
                {title}
              </h3>
              <p className="text-sm text-muted leading-[1.65]">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
