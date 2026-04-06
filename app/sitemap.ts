import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://constructlyco.ie",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/services",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/projects",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/about",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/contact",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/builder-websites-kerry",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/builder-websites-dublin",
      lastModified,
    },
    {
      url: "https://constructlyco.ie/builder-websites-cork",
      lastModified,
    },
  ];
}