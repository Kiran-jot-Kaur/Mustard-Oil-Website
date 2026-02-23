import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  // TODO: Replace /placeholder.svg with final OG/Twitter preview image once binaries are allowed.
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "KIRSAANI | Cold Pressed Mustard Oil",
    template: "%s | KIRSAANI"
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "KIRSAANI | Cold Pressed Mustard Oil",
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [{ url: "/placeholder.svg", width: 1200, height: 630, alt: "KIRSAANI" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "KIRSAANI | Cold Pressed Mustard Oil",
    description: siteConfig.description,
    images: ["/placeholder.svg"]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KIRSAANI",
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kharar",
    addressRegion: "Punjab",
    addressCountry: "IN"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KIRSAANI",
  image: `${siteConfig.domain}/placeholder.svg`,
  telephone: `+${process.env.NEXT_PUBLIC_CALL_NUMBER ?? siteConfig.defaultCall}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kharar",
    addressRegion: "Punjab",
    addressCountry: "IN"
  },
  areaServed: "Punjab",
  url: siteConfig.domain
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "KIRSAANI Mustard Oil 1L",
  brand: { "@type": "Brand", name: "KIRSAANI" },
  description: "1L Kachi Ghani cold pressed mustard oil sourced from Punjab farms.",
  image: `${siteConfig.domain}/placeholder.svg`,
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "340",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.domain}/product`
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={productSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
