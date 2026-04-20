import "./globals.css";
import Providers from "@/components/Providers";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
// Update SITE_URL when the real domain is confirmed
const SITE_URL = "https://dkperformance.ca";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DK Performance | European & Exotic Car Service — Laval, QC",
    template: "%s | DK Performance",
  },
  description:
    "DK Performance specializes in premium repair, maintenance, and performance upgrades for European and exotic vehicles in Laval, Quebec. Porsche, Audi, Mercedes-Benz, Ferrari, Lamborghini and more.",
  keywords: [
    "car service Laval",
    "European car repair Quebec",
    "Porsche service Laval",
    "exotic car maintenance",
    "performance upgrades Quebec",
    "DK Performance Laval",
    "pre-purchase inspection",
    "auto detailing Laval",
  ],
  authors: [{ name: "DK Performance" }],
  openGraph: {
    title: "DK Performance | European & Exotic Car Service — Laval, QC",
    description:
      "Expert repair, maintenance, and performance upgrades for Porsche, Audi, Mercedes, Ferrari, Lamborghini and more. Located at 3954 Boulevard Leman, Laval, QC.",
    url: SITE_URL,
    siteName: "DK Performance",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DK Performance | European & Exotic Car Service — Laval, QC",
    description:
      "Expert repair, maintenance, and performance upgrades for European and exotic vehicles in Laval, QC.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ── LocalBusiness JSON-LD Schema ──────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "DK Performance",
  description:
    "Premium European and exotic car repair, maintenance, and performance upgrades in Laval, Quebec.",
  url: SITE_URL,
  telephone: "+15149528503",
  email: "info@dkperformance.ca",
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3954 Boulevard Leman",
    addressLocality: "Laval",
    addressRegion: "QC",
    postalCode: "H7E 1A1",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.6066,
    longitude: -73.6591,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Debit",
  areaServed: {
    "@type": "City",
    name: "Laval",
  },
  sameAs: ["https://www.instagram.com/performance_dk/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
