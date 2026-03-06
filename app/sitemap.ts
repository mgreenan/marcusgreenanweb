import type { MetadataRoute } from "next";
import { portfolioCopy } from "@/lib/portfolio-copy";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcus-greenan-portfolio.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://marcus-greenan-portfolio.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...portfolioCopy.projects.map((project) => ({
      url: `https://marcus-greenan-portfolio.vercel.app/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
