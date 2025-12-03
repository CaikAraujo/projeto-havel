import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { InfiniteTopBar } from "@/components/ui/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import { Space_Grotesk, Syne } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "SwissEcoClean - Nettoyage Écologique de Canapés et Tapis en Suisse",
  description: "Service de nettoyage professionnel écologique pour canapés, tapis, matelas et intérieurs de voiture. Technologie moléculaire suisse, sans eau, séchage immédiat.",
  keywords: ["Nettoyage canapé", "Nettoyage tapis", "Nettoyage matelas", "Nettoyage voiture", "Écologique", "Suisse", "Sans eau", "SwissEcoClean", "Nettoyage moléculaire"],
  openGraph: {
    title: "SwissEcoClean - L'Excellence du Nettoyage Écologique",
    description: "Redonnez vie à vos meubles avec notre technologie moléculaire suisse. Sans eau, séchage immédiat, 100% écologique.",
    url: "https://swissecoclean.ch", // Placeholder URL, user should update if known
    siteName: "SwissEcoClean",
    locale: "fr_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SwissEcoClean",
    "image": "https://swissecoclean.ch/logo.png", // Placeholder
    "description": "Service de nettoyage professionnel écologique pour canapés, tapis, matelas et intérieurs de voiture.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lausanne", // Placeholder city
      "addressRegion": "VD",
      "addressCountry": "CH"
    },
    "priceRange": "$$",
    "telephone": "+41 79 123 45 67" // Placeholder
  };

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <InfiniteTopBar />
        {children}
      </body>
    </html>
  );
}
