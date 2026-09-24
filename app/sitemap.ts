import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://www.sandipandas.website/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }, {
    url: "https://www.sandipandas.website/services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }, {
    url: "https://www.sandipandas.website/projects/ai-text-classifier",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }, {
    url: "https://www.sandipandas.website/open-source/latex-content-renderer",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }, ...servicePages.map((service) => ({
    url: `https://www.sandipandas.website/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))];
}
