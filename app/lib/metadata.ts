import type { Metadata } from "next";
import { siteConfig } from "@/app/lib/site";

export const createPageMetadata = (title: string, description: string, path: string): Metadata => ({
  // TODO: Replace /placeholder.svg with final social preview image once binaries are allowed.
  title,
  description,
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: path
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.domain}${path}`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/placeholder.svg",
        width: 1200,
        height: 630,
        alt: "KIRSAANI mustard oil"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/placeholder.svg"]
  }
});
