const SERVICES = [
  {
    icon: "⚙️",
    title: "Engine Builds",
    description:
      "Short blocks, long blocks, full custom builds — designed for maximum power with proven reliability.",
  },
  {
    icon: "💨",
    title: "Forced Induction",
    description:
      "Turbo and supercharger installs, intercooler setups, and full supporting mods from injectors to fueling.",
  },
  {
    icon: "📊",
    title: "ECU Tuning",
    description:
      "Dyno-proven road and race maps. We tune for real-world driveability as much as peak numbers.",
  },
  {
    icon: "🔧",
    title: "Suspension & Handling",
    description:
      "Coilovers, alignment, corner weighting, and geometry changes for the track or the street.",
  },
  {
    icon: "🛞",
    title: "Brakes & Driveline",
    description:
      "Big brake kits, differential swaps, clutch upgrades — every link in the power chain sorted.",
  },
  {
    icon: "🔩",
    title: "Custom Fabrication",
    description:
      "Roll cages, exhaust systems, oil catch cans, and one-off brackets built in-house to your spec.",
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
            From a simple tune to a full race build — we handle every part of
            the build process under one roof.
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
