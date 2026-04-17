import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const routes = [
  "/",
  "/what-we-offer",
  "/our-farm",
  "/our-farm/biodynamic",
  "/find-us",
  "/community",
  "/what-we-grow",
  "/csa",
  "/wholesale",
  "/employment",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
