import type { MetadataRoute } from "next";
import { organizacion } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasEstaticas = [
    "",
    "/comunidad",
    "/aportar",
    "/nosotros",
    "/contacto",
  ].map((ruta) => ({
    url: `${organizacion.sitio}${ruta}`,
    lastModified: new Date(),
  }));

  return paginasEstaticas;
}
