import type { MetadataRoute } from "next";
import { organizacion } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${organizacion.sitio}/sitemap.xml`,
  };
}
