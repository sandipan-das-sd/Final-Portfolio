import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/services";
import { defaultProjects } from "@/lib/portfolio";
import { projectSlug } from "@/lib/projectCaseStudies";
import { automationPages, industryPages } from "@/lib/solutions";

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
    url: "https://www.sandipandas.website/open-source/latex-content-renderer",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }, ...["automation","industries"].map((path) => ({
    url: `https://www.sandipandas.website/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  })), ...automationPages.map((item) => ({
    url: `https://www.sandipandas.website/automation/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })), ...industryPages.map((item) => ({
    url: `https://www.sandipandas.website/industries/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })), ...defaultProjects.map((project) => ({
    url: `https://www.sandipandas.website/projects/${projectSlug(project.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  })), ...servicePages.map((service) => ({
    url: `https://www.sandipandas.website/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))];
}
