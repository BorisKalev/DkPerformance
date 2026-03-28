const LINKS = [
  { label: 'Services', href: '#services'     },
  { label: 'Gallery',  href: '#gallery'      },
  { label: 'Book Now', href: '#appointment'  },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">

      <div className="max-w-300 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-8 lg:gap-12 py-14">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#hero" className="font-heading text-[1.5rem] font-bold tracking-[0.04em] text-foreground">
            DK<span className="text-accent">Performance</span>
          </a>
          <p className="mt-2 text-sm text-muted">Built different. Built right.</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-3" aria-label="Footer navigation">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <a href="tel:+15550000000"          className="text-sm text-muted hover:text-accent transition-colors duration-200">+1 (555) 000-0000</a>
          <a href="mailto:info@dkperformance.com" className="text-sm text-muted hover:text-accent transition-colors duration-200">info@dkperformance.com</a>
          <p className="mt-1 text-sm text-muted">123 Garage Lane, Anytown, USA</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-300 mx-auto px-6 py-5">
          <p className="text-xs text-muted tracking-[0.03em]">
            &copy; {new Date().getFullYear()} DK Performance. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
