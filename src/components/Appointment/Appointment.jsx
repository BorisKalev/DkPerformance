import { useState } from "react";
import { BOOKING_URL } from "@/lib/booking";

const SERVICES = [
  { label: "Tire Change", duration: "1 hr", price: "Prices Vary" },
  { label: "Oil Change", duration: "1 hr", price: "Prices Vary" },
  { label: "Brake Service", duration: "1 hr", price: "Prices Vary" },
  { label: "Pre-Purchase Inspection", duration: "1 hr", price: "C$89.99" },
  {
    label: "Oil Change and Tire Change",
    duration: "1 hr",
    price: "Prices Vary",
  },
  { label: "Detailing", duration: "2 hr", price: "Prices Vary" },
  { label: "Diagnostic", duration: "1 hr", price: "C$110" },
];

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const INITIAL = { name: "", phone: "", vehicle: "", service: "" };

// ── Mini calendar ─────────────────────────────────────────────────────────
function Calendar({ selected, onSelect }) {
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build flat array: nulls for leading blanks, then 1…daysInMonth
  const cells = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const toDate = (d) => new Date(year, month, d);
  const isPast = (d) => d !== null && toDate(d) < today;
  const isToday = (d) => d !== null && toDate(d).getTime() === today.getTime();
  const isSel = (d) =>
    d !== null &&
    selected &&
    selected.getDate() === d &&
    selected.getMonth() === month &&
    selected.getFullYear() === year;

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  return (
    <div className="bg-surface2 border border-border rounded-sm p-5">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="w-7 h-7 flex items-center justify-center text-muted hover:text-accent transition-colors text-lg leading-none"
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="text-sm font-bold tracking-[0.08em] uppercase text-foreground">
          {MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="w-7 h-7 flex items-center justify-center text-muted hover:text-accent transition-colors text-lg leading-none"
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-[0.6rem] font-bold tracking-[0.12em] uppercase text-muted py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((d, i) => {
          const past = isPast(d);
          const sel = isSel(d);
          const tod = isToday(d);

          return (
            <button
              key={i}
              type="button"
              disabled={!d || past}
              onClick={() => d && !past && onSelect(toDate(d))}
              className={[
                "h-8 w-full rounded-sm text-sm transition-all duration-150 font-medium",
                !d ? "invisible" : "",
                past ? "text-muted/25 cursor-not-allowed" : "",
                sel
                  ? "bg-accent text-white shadow-[0_0_10px_var(--color-accent)/40]"
                  : "",
                tod && !sel ? "border border-accent text-accent" : "",
                !past && !sel && d
                  ? "hover:bg-accent/15 hover:text-foreground text-foreground/70 cursor-pointer"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Time-slot picker ──────────────────────────────────────────────────────
function TimeSlots({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {TIME_SLOTS.map((slot) => (
        <button
          key={slot}
          type="button"
          onClick={() => onSelect(slot === selected ? null : slot)}
          className={[
            "px-4 py-2 text-sm font-semibold rounded-sm border transition-all duration-200",
            selected === slot
              ? "bg-accent border-accent text-white shadow-[0_0_10px_var(--color-accent)/35]"
              : "bg-surface2 border-border text-muted hover:border-accent hover:text-foreground",
          ].join(" ")}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function Appointment() {
  const [form, setForm] = useState(INITIAL);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Opens the Google Form in a new tab — replace GOOGLE_FORM_URL above
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  const formatDate = (d) =>
    d
      ? d.toLocaleDateString("en-CA", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      : null;

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
          <p className="mt-3.5 max-w-[50ch] text-muted text-base leading-[1.7]">
            Choose a date and time, fill in your details, and we'll confirm your
            slot within one business day.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* ── Left: form fields ── */}
          <div className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="field-label">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Smith"
                className="field-input"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="field-label">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(514) 000-0000"
                className="field-input"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Car model */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="vehicle" className="field-label">
                Car Model *
              </label>
              <input
                id="vehicle"
                name="vehicle"
                type="text"
                placeholder="2021 BMW M3 Competition"
                className="field-input"
                value={form.vehicle}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="field-label">
                Service Type *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  className="field-input appearance-none pr-10"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map(({ label }) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M1 1l5 5 5-5" />
                </svg>
              </div>
            </div>

            {/* Selection summary */}
            {(selectedDate || selectedTime) && (
              <div className="mt-2 pl-4 border-l-2 border-accent flex flex-col gap-1">
                {selectedDate && (
                  <p className="text-sm text-foreground font-medium">
                    {formatDate(selectedDate)}
                  </p>
                )}
                {selectedTime && (
                  <p className="text-sm text-muted">{selectedTime}</p>
                )}
                {selectedTime &&
                  form.service &&
                  (() => {
                    const svc = SERVICES.find((s) => s.label === form.service);
                    return svc ? (
                      <p className="text-sm font-bold text-accent tracking-wide">
                        {svc.duration} &mdash; {svc.price}
                      </p>
                    ) : null;
                  })()}
                {selectedTime && (
                  <p className="text-[0.7rem] text-muted/60 mt-0.5">
                    Labor rate: C$110 / hr + taxes
                  </p>
                )}
              </div>
            )}
          </div>

          {/* ── Right: calendar + time slots ── */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="field-label mb-3">Select a Date *</p>
              <Calendar selected={selectedDate} onSelect={setSelectedDate} />
            </div>

            <div>
              <p className="field-label mb-3">Select a Time *</p>
              <TimeSlots selected={selectedTime} onSelect={setSelectedTime} />
            </div>
          </div>

          {/* ── Submit — full width ── */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button type="submit" className="btn btn-primary">
              Book Appointment →
            </button>
            <p className="text-xs text-muted">
              You'll be redirected to our booking form to confirm your request.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
