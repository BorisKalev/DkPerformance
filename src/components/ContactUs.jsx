import { useState } from "react";
import { Button } from "@/components/ui/moving-border";
import Porsche360 from "@/videos/Porsche360D.mp4";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up backend / email service
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden xl:h-svh md:h-[500px] h-[700px] flex items-center justify-center"
    >
      {/* ── Video background ───────────────────────────────────── */}
      <video
        src={Porsche360}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* ── Dark scrim ─────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Glass card ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-5">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-10 md:px-12 md:py-12 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#e63f00]">
              Get in Touch
            </span>
            <h2 className="font-russo text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-wide text-white">
              Contact Us
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white/50"
              >
                Name <span className="text-[#e63f00]">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#e63f00]/60 focus:bg-white/8 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white/50"
              >
                Email <span className="text-[#e63f00]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#e63f00]/60 focus:bg-white/8 transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white/50"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your vehicle and what you need…"
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 resize-none focus:outline-none focus:border-[#e63f00]/60 focus:bg-white/8 transition-colors duration-200"
              />
            </div>

            {/* Submit */}
            <div className="pt-1">
              <Button
                type="submit"
                borderRadius="0.5rem"
                containerClassName="w-full h-13"
                borderClassName="bg-[radial-gradient(var(--color-accent)_40%,transparent_60%)]"
                className="bg-black/80 text-white border-white/10 text-sm font-semibold tracking-[0.12em] uppercase hover:text-[#e63f00] transition-colors duration-200"
              >
                Send Message
              </Button>
            </div>
          </form>

          {/* reCAPTCHA notice */}
          <p className="text-[0.65rem] text-white/30 leading-relaxed text-center">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/50 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/50 transition-colors duration-200"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </section>
  );
}
