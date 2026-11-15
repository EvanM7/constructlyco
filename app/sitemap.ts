import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://www.constructlyco.ie/privacy", lastModified },
    {
      url: "https://www.constructlyco.ie",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/services",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/projects",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/about",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/contact",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/builder-websites-kerry",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/builder-websites-dublin",
      lastModified,
    },
    {
      url: "https://www.constructlyco.ie/builder-websites-cork",
      lastModified,
    },
  ];
}