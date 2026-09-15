import Image from "next/image";
import Link from "next/link";
import { presentacion } from "@/data/site";
import { images } from "@/lib/images";

const IMAGENES: Record<string, { src: string; alt: string }> = {
  Aportá: images.plantacion,
  Visitas: images.reserva,
  Empresas: images.teamBuilding,
};

export default function Presentacion() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
        Cómo podés ser parte
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {presentacion.caminos.map((camino) => {
          const imagen = IMAGENES[camino.titulo];
          return (
            <div
              key={camino.titulo}
              className="flex flex-col overflow-hidden rounded-2xl border border-verde-profundo/10 bg-card/40 transition-colors hover:border-esmeralda/40"
            >
              {imagen && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className={`object-cover ${camino.titulo === "Visitas" ? "scale-150" : ""}`}
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-bold text-verde-profundo">{camino.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-verde-profundo/70">{camino.texto}</p>
                <Link
                  href={camino.href}
                  className="mt-4 inline-block self-start rounded-full bg-esmeralda px-5 py-2.5 text-center text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
                >
                  {camino.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
