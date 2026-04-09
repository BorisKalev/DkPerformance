import { BOOKING_URL } from "@/lib/booking";
import { cn } from "@/lib/utils";

/**
 * Reusable primary booking CTA.
 *
 * Props:
 *  - label      string   Button text  (default "Book an Appointment")
 *  - size        "sm" | "md" | "lg"   (default "md")
 *  - className   string   Extra classes on the <a> element
 *  - onClick     fn       Optional callback (fires before navigation)
 */
export default function BookNowButton({
  label = "Book an Appointment",
  size = "md",
  className = "",
  onClick,
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2.5 font-bold tracking-[0.1em] uppercase rounded-sm",
        "bg-accent text-white",
        "hover:bg-accent-hover shadow-[0_0_20px_rgba(230,63,0,0.35)]",
        "hover:shadow-[0_0_28px_rgba(230,63,0,0.55)]",
        "transition-all duration-200 active:scale-[0.97]",
        sizes[size],
        className
      )}
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5 shrink-0"
        aria-hidden="true"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}
