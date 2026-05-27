import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Inter, Playfair_Display, Orbitron, Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-orbitron",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

const BASE_URL = "https://www.cuvr.ae";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  /* ── Core ── */
  title: {
    default: "CUVR Innovation — VR Technology for Real Estate & Healthcare | UAE",
    template: "%s | CUVR Innovation",
  },
  description:
    "CUVR Innovation builds immersive VR platforms for real estate sales and neurological rehabilitation. PhysioVR accelerates patient recovery. CUVR Reality delivers photorealistic virtual property tours. Based in the UAE.",
  keywords: [
    "VR real estate UAE",
    "virtual reality property tours Dubai",
    "VR rehabilitation therapy",
    "PhysioVR neurological recovery",
    "CUVR Innovation",
    "immersive real estate platform",
    "virtual property tours",
    "VR physiotherapy UAE",
    "spatial computing real estate",
    "metaverse property sales",
    "VR healthcare solutions",
    "digital twin real estate",
    "virtual showroom UAE",
    "VR technology company UAE",
  ],
  authors: [{ name: "CUVR Innovation Labs", url: BASE_URL }],
  creator: "CUVR Innovation Labs",
  publisher: "CUVR Innovation Labs",
  category: "Technology",

  /* ── Canonical ── */
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-AE": BASE_URL,
      "en-US": BASE_URL,
    },
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: BASE_URL,
    siteName: "CUVR Innovation",
    title: "CUVR Innovation — VR Technology for Real Estate & Healthcare",
    description:
      "Immersive VR platforms for real estate sales and neurological rehabilitation. PhysioVR and CUVR Reality — built in the UAE, deployed globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CUVR Innovation — VR Technology Platform",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "CUVR Innovation — VR Technology for Real Estate & Healthcare",
    description:
      "Immersive VR platforms for real estate sales and neurological rehabilitation. Built in the UAE.",
    images: ["/og-image.png"],
    creator: "@cuvrinnovation",
    site: "@cuvrinnovation",
  },

  /* ── App / PWA ── */
  applicationName: "CUVR Innovation",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },

  /* ── Verification (add keys when ready) ── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "REPLACE_WITH_BING_TOKEN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${inter.variable} ${playfair.variable} ${orbitron.variable} ${cairo.variable}`}
    >
      <head>
        {/* Geo tags — AEO/GEO for UAE */}
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />

        {/* AI / LLM crawler hints — GEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="revisit-after" content="7 days" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/cuvr.png" type="image/png" />
        <link rel="apple-touch-icon" href="/cuvr.png" />
      </head>
      <body className="bg-[#080808] text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
