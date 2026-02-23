import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/lib/site";

const routes = ["", "/about", "/purity", "/product", "/recipes", "/contact", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
