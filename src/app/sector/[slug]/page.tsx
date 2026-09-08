import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MapaSectores from "@/components/mapa/MapaSectores";
import { sectores } from "@/data/site";
import { formatNumero } from "@/lib/format";
import { images } from "@/lib/images";

export function generateStaticParams() {
  return sectores.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/sector/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectores.find((s) => s.slug === slug);
  if (!sector) return {};

  return {
    title: `Sector de ${sector.empresa}`,
    description: `${sector.empresa} tiene ${sector.hectareas} hectáreas en Los Tualdos, plantadas en ${sector.temporada}.`,
  };
}

export default async function SectorPage({ params }: PageProps<"/sector/[slug]">) {
  const { slug } = await params;
  const sector = sectores.find((s) => s.slug === slug);
  if (!sector) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl text-verde-profundo sm:text-4xl">Sector de {sector.empresa}</h1>
        {sector.esDemo && (
          <span className="rounded-full bg-dorado/15 px-3 py-1 text-xs text-dorado">
            sector de ejemplo
          </span>
        )}
      </div>
      <p className="mt-3 text-verde-profundo/70">
        {formatNumero(sector.hectareas)} hectáreas en {sector.localidad}.
      </p>

      <div className="mt-8 rounded-2xl border border-verde-profundo/10 bg-card/40 p-6 sm:p-8">
        <MapaSectores resaltarSlug={sector.slug} />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-verde-profundo/10 py-8 sm:grid-cols-4">
        <div>
          <dt className="text-xs text-verde-profundo/50">Hectáreas</dt>
          <dd className="mt-1 text-lg text-verde-profundo">{formatNumero(sector.hectareas)}</dd>
        </div>
        <div>
          <dt className="text-xs text-verde-profundo/50">Temporada</dt>
          <dd className="mt-1 text-lg text-verde-profundo">{sector.temporada}</dd>
        </div>
        <div>
          <dt className="text-xs text-verde-profundo/50">Especies</dt>
          <dd className="mt-1 text-lg text-verde-profundo">{sector.especies.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs text-verde-profundo/50">Auditoría</dt>
          <dd className="mt-1 text-lg text-verde-profundo">{sector.estadoAuditoria}</dd>
        </div>
      </dl>

      <div className="mt-10">
        <h2 className="font-bold text-2xl text-verde-profundo">Fotos del sector</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {sector.fotos.map((foto) => (
            <figure key={foto.fecha} className="overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images[foto.slotImagen].src}
                  alt={foto.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-verde-profundo/60">{foto.fecha}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-2xl text-verde-profundo">Quiénes aportaron</h2>
        {sector.aportantes ? (
          <p className="mt-3 text-verde-profundo/70">
            {sector.aportantes} personas ya aportaron a este sector.
          </p>
        ) : (
          <p className="mt-3 text-verde-profundo/70">
            Todavía nadie aportó a este sector. Podés ser el primero.
          </p>
        )}
        <Link
          href={`/aportar?sector=${sector.slug}`}
          className="mt-4 inline-block rounded-full bg-esmeralda px-6 py-3 text-sm font-medium text-verde-profundo hover:bg-esmeralda/90"
        >
          Aportar a este sector
        </Link>
      </div>
    </div>
  );
}
