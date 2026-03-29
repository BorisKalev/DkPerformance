import { Button } from "@/components/ui/moving-border";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=3954+Boulevard+Leman,+Laval,+Quebec+H7E+1A1,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=3954+Boulevard+Leman,+Laval,+Quebec+H7E+1A1,+Canada";

const HOURS = [
  { day: "Mon", hours: "09:00 a.m. – 05:00 p.m." },
  { day: "Tue", hours: "09:00 a.m. – 05:00 p.m." },
  { day: "Wed", hours: "09:00 a.m. – 05:00 p.m." },
  { day: "Thu", hours: "09:00 a.m. – 05:00 p.m." },
  { day: "Fri", hours: "09:00 a.m. – 05:00 p.m." },
  { day: "Sat", hours: "Closed", closed: true },
  { day: "Sun", hours: "Closed", closed: true },
];

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-20 px-6 bg-linear-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* ── Heading*/}
        <div className="text-center flex flex-col gap-2">
          <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#e63f00]">
            Our Location
          </span>
          <h2 className="font-russo text-4xl font-black tracking-wide text-white">
            Find Us
          </h2>
        </div>

        {/* ── Map + Info grid*/}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Map */}
          <div className="relative">
            {/* Floating pin */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-[#e63f00] flex items-center justify-center shadow-lg shadow-[#e63f00]/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.667 3.5-7.927 0-3.966-3.22-7.18-7.19-7.18S4.81 5.434 4.81 9.4c0 3.26 1.556 5.914 3.5 7.927a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 12.5a3.1 3.1 0 100-6.2 3.1 3.1 0 000 6.2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-0.5 h-4 bg-[#e63f00]/50" />
            </div>

            {/* Glass map frame */}
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl h-[500px] md:h-[600px] lg:h-[700px]">
              <iframe
                title="DK Performance location"
                src={MAPS_EMBED_URL}
                className="w-full h-full border-0"
                style={{
                  filter: "invert(90%) hue-rotate(180deg)",
                  opacity: 0.92,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Inner vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {/* Hours + Button */}
          <div className="flex flex-col gap-8 lg:pt-6">
            {/* Hours card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-7 flex flex-col gap-1">
              <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#e63f00] mb-3">
                Hours of Operation
              </span>
              {HOURS.map(({ day, hours, closed }) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-white/60">
                    {day}
                  </span>
                  <span
                    className={`text-[0.8rem] font-medium ${
                      closed ? "text-white/25" : "text-white/85"
                    }`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Get Directions button */}
            <Button
              as="a"
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="0.5rem"
              containerClassName="w-full h-13"
              borderClassName="bg-[radial-gradient(var(--color-accent)_40%,transparent_60%)]"
              className="bg-black/80 text-white border-white/10 text-sm font-semibold tracking-[0.12em] uppercase hover:text-[#e63f00] transition-colors duration-200"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
