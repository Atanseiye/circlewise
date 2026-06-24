import type { MetadataRoute } from "next";
import { navItems, resources } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://circlewise.org";
  const now = new Date();

  const mainRoutes = navItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: now
  }));

  const resourceRoutes = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: now
  }));

  return [...mainRoutes, ...resourceRoutes];
}
