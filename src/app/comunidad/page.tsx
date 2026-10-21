import type { Metadata } from "next";
import Image from "next/image";
import { comunidad, primeraReserva } from "@/data/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Los Tualdos",
  description: "Conocé Los Tualdos, nuestra primera reserva forestal en el Delta del Paraná: flora y fauna autóctona.",
};

export default function ComunidadPage() {
  return (
    <div>
      {/* hero con el video de Los Tualdos de fondo, mismo armado que el de la home */}
      <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-verde-profundo">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/reserva/tualdos-nosotros-hero.mp4"
          poster="/reserva/tualdos-nosotros-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/20 via-45% to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-12 sm:px-8 lg:pb-16">
          <h1 className="text-4xl leading-tight text-white sm:text-5xl">{primeraReserva.titulo}</h1>
          <p className="mt-5 max-w-md text-lg text-white/90">{comunidad.bajada}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={primeraReserva.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
            >
              Conocé Los Tualdos
            </a>
          </div>
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">Flora y fauna autóctona</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {comunidad.galeria.map((clave) => {
              const imagen = images[clave];
              return (
                <div key={clave} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
