import Image from "next/image";
import Link from "next/link";
import { presentacion } from "@/data/site";
import { images } from "@/lib/images";

const IMAGENES: Record<string, { src: string; alt: string }> = {
  Aportá: images.plantacion,
  "Los Tualdos": images.reserva,
  Empresas: images.teamBuilding,
};

export default function Presentacion() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
      <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
        Cómo podés ser parte
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:gap-8">
        {presentacion.caminos.map((camino) => {
          const imagen = IMAGENES[camino.titulo];
          return (
            <div
              key={camino.titulo}
              className="group flex flex-col overflow-hidden rounded-2xl border border-verde-profundo/10 bg-card/40"
            >
              {imagen && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-115">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className={`object-cover ${camino.titulo === "Los Tualdos" ? "scale-150" : ""}`}
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="text-lg font-bold text-verde-profundo lg:text-2xl">{camino.titulo}</p>
                <p className="mt-3 text-base leading-relaxed text-verde-profundo/70 lg:text-lg">{camino.texto}</p>
                <Link
                  href={camino.href}
                  className="mt-6 inline-block self-start rounded-full bg-esmeralda px-6 py-3 text-center text-base font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
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
