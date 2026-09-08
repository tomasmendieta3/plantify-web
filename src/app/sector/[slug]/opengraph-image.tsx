import { ImageResponse } from "next/og";
import { sectores } from "@/data/site";

export const alt = "Sector en Los Tualdos, reserva de Plantify";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse (Satori) no hereda las fuentes de next/font: hay que traerlas
// como bytes. Usamos Nunito, la única tipografía del proyecto.
async function cargarNunito(weight: 400 | 700) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Nunito:wght@${weight}&display=swap`,
      // User-Agent viejo: fuerza a Google Fonts a devolver .woff (soportado por
      // Satori) en vez de .woff2, que puede fallar según la versión bundleada.
      { headers: { "User-Agent": "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 5.1; Trident/5.0)" } }
    )
  ).text();

  const url = css.match(/src: url\(([^)]+)\) format\('woff'\)/)?.[1];
  if (!url) throw new Error("No se encontró la URL de la fuente Nunito");

  return fetch(url).then((res) => res.arrayBuffer());
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = sectores.find((s) => s.slug === slug);

  const [nunitoRegular, nunitoBold] = await Promise.all([
    cargarNunito(400),
    cargarNunito(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0E3528",
          color: "#FAF7F0",
          fontFamily: "Nunito",
        }}
      >
        <div style={{ fontSize: 28, color: "#C6A24E", display: "flex" }}>Plantify · Los Tualdos</div>
        <div style={{ fontSize: 64, marginTop: 24, display: "flex", fontWeight: 700 }}>
          Sector de {sector?.empresa ?? "una empresa"}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#3FBE8C", display: "flex" }}>
          {sector ? `${sector.hectareas} hectáreas · ${sector.temporada}` : "Delta del Paraná"}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Nunito", data: nunitoRegular, weight: 400, style: "normal" },
        { name: "Nunito", data: nunitoBold, weight: 700, style: "normal" },
      ],
    }
  );
}
