import type { MetadataRoute } from "next";
import { organizacion, sectores } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasEstaticas = [
    "",
    "/reserva",
    "/comunidad",
    "/aportar",
    "/nosotros",
    "/contacto",
  ].map((ruta) => ({
    url: `${organizacion.sitio}${ruta}`,
    lastModified: new Date(),
  }));

  const paginasSector = sectores.map((sector) => ({
    url: `${organizacion.sitio}/sector/${sector.slug}`,
    lastModified: new Date(),
  }));

  return [...paginasEstaticas, ...paginasSector];
}
