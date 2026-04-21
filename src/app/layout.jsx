import "./globals.css";
import Providers from "@/components/Providers";

const SITE_URL = "https://dkperformance.ca";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "DK Performance | Garage Automobile Européen & Exotique — Laval, QC",
    template: "%s | DK Performance Laval",
  },

  description:
    "DK Performance — garage spécialisé en réparation, entretien et performance pour véhicules européens et exotiques à Laval, QC. Porsche, Audi, Mercedes-Benz, Ferrari, Lamborghini, McLaren. Inspection pré-achat, détailing, diagnostic. European & exotic car specialist near Montreal.",

  keywords: [
    // French — primary market
    "garage automobile Laval",
    "mécanique voiture européenne Laval",
    "réparation Porsche Laval",
    "entretien Audi Laval",
    "réparation Ferrari Laval",
    "inspection pré-achat Laval",
    "détailing voiture Laval",
    "garage voiture exotique Québec",
    "tuning performance Laval",
    "diagnostic voiture Laval",
    "mécanique Lamborghini Montréal",
    "garage Mercedes-Benz Laval",
    // English — secondary market
    "car repair Laval",
    "European car service Laval",
    "exotic car mechanic Montreal",
    "Porsche specialist Laval",
    "pre-purchase inspection Quebec",
    "performance upgrades Laval",
    "auto detailing Laval",
    "DK Performance Laval",
  ],

  authors:   [{ name: "DK Performance", url: SITE_URL }],
  creator:   "DK Performance",
  publisher: "DK Performance",

  openGraph: {
    title:       "DK Performance | Garage Automobile Européen & Exotique — Laval, QC",
    description: "Réparation, entretien et performance pour véhicules européens et exotiques à Laval. Porsche, Audi, Ferrari, Lamborghini, Mercedes-Benz, McLaren et plus. / European & exotic car specialist near Montreal.",
    url:         `${SITE_URL}/`,
    siteName:    "DK Performance",
    locale:      "fr_CA",
    alternateLocale: ["en_CA"],
    type:        "website",
  },

  twitter: {
    card:        "summary_large_image",
    title:       "DK Performance | Garage Automobile Européen & Exotique — Laval, QC",
    description: "Garage spécialisé en véhicules européens et exotiques à Laval, QC. Porsche · Audi · Ferrari · Lamborghini · Mercedes-Benz.",
  },

  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "fr-CA": `${SITE_URL}/`,
      "en-CA": `${SITE_URL}/`,
    },
  },

  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-image-preview": "large",
      "max-snippet":       -1,
      "max-video-preview": -1,
    },
  },
};

// ── JSON-LD: LocalBusiness (AutoRepair) ───────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name:        "DK Performance",
  description: "Garage spécialisé en réparation, entretien et performance pour véhicules européens et exotiques à Laval, Québec.",
  url:         `${SITE_URL}/`,
  telephone:   "+15149528503",
  email:       "info@dkperformance.ca",
  image:       `${SITE_URL}/og-image.jpg`,
  logo:        `${SITE_URL}/logos/DkLogoPorsche2.png`,
  hasMap:      "https://maps.google.com/?q=3954+Boulevard+Leman,+Laval,+QC+H7E+1A1",
  address: {
    "@type":          "PostalAddress",
    streetAddress:    "3954 Boulevard Leman",
    addressLocality:  "Laval",
    addressRegion:    "QC",
    postalCode:       "H7E 1A1",
    addressCountry:   "CA",
  },
  geo: {
    "@type":    "GeoCoordinates",
    latitude:   45.6066,
    longitude:  -73.6591,
  },
  openingHoursSpecification: [
    {
      "@type":     "OpeningHoursSpecification",
      dayOfWeek:   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens:       "08:00",
      closes:      "16:00",
    },
  ],
  priceRange:        "$$",
  currenciesAccepted: "CAD",
  paymentAccepted:   "Cash, Credit Card, Debit Card",
  areaServed: [
    { "@type": "City", name: "Laval",    sameAs: "https://www.wikidata.org/wiki/Q160967" },
    { "@type": "City", name: "Montréal", sameAs: "https://www.wikidata.org/wiki/Q340" },
    { "@type": "City", name: "Longueuil" },
    { "@type": "City", name: "Terrebonne" },
  ],
  knowsLanguage: ["fr", "en"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Maintenance" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Upgrades" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Inspection" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Repair" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Detailing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Purchase Inspection", price: "89.99", priceCurrency: "CAD" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnostic", price: "110", priceCurrency: "CAD" } },
  ],
  sameAs: [
    "https://www.instagram.com/performance_dk/",
  ],
};

// ── JSON-LD: FAQPage (shows expandable Q&A directly in Google results) ────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are your opening hours?",
      acceptedAnswer: { "@type": "Answer", text: "We are open Monday through Friday, from 8:00 AM to 4:00 PM. We are closed on weekends." },
    },
    {
      "@type": "Question",
      name: "Do I need to book an appointment in advance?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we recommend booking ahead to secure your preferred time slot. Book through our online portal and we'll confirm within one business day." },
    },
    {
      "@type": "Question",
      name: "Do you provide a quote before starting the work?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We always provide a detailed estimate before beginning any work. No surprises — you approve the quote before we start." },
    },
    {
      "@type": "Question",
      name: "How long does a standard repair take?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on the service. An oil change or tire swap typically takes about 1 hour. More complex repairs may take longer — we'll give you a time estimate when you drop off your vehicle." },
    },
    {
      "@type": "Question",
      name: "Do you guarantee your repairs?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we stand behind all our work. If you experience any issue related to a service we performed, bring it back and we'll make it right." },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: { "@type": "Answer", text: "We accept cash, credit card, and debit. Payment is due upon completion of the service." },
    },
    {
      "@type": "Question",
      name: "What parts will you use — OEM or aftermarket?",
      acceptedAnswer: { "@type": "Answer", text: "We use OEM (Original Equipment Manufacturer) parts whenever possible, as they guarantee perfect compatibility and preserve your vehicle's warranty. In some cases we may offer quality aftermarket alternatives — we always explain the options and let you decide." },
    },
    {
      "@type": "Question",
      name: "Will you call me if you find additional problems?",
      acceptedAnswer: { "@type": "Answer", text: "Always. It is crucial that you approve any additional work before it is carried out. We will never perform repairs beyond what was agreed without contacting you first and getting your explicit authorization." },
    },
  ],
};

// ── JSON-LD: WebSite (enables Google Sitelinks) ───────────────────────────────
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name:       "DK Performance",
  url:        `${SITE_URL}/`,
  inLanguage: ["fr-CA", "en-CA"],
  publisher:  { "@id": `${SITE_URL}/#business` },
};

const ALL_SCHEMAS = [localBusinessSchema, faqSchema, webSiteSchema];

// ── Layout ────────────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect to Google Maps to speed up iframe load */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        {ALL_SCHEMAS.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
