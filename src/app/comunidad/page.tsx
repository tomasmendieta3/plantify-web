import type { Metadata } from "next";
import Image from "next/image";
import { Bird, Sprout, TreePine, type LucideIcon } from "lucide-react";
import { comunidad, primeraReserva } from "@/data/site";
import { images } from "@/lib/images";
import NumeroAnimado from "@/components/NumeroAnimado";

const ICONOS_PILAR: LucideIcon[] = [Sprout, Bird, TreePine];

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
        <div data-aparecer-grupo className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-12 sm:px-8 lg:pb-16">
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

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 data-aparecer className="font-bold text-3xl text-verde-profundo sm:text-4xl">{comunidad.queEs.titulo}</h2>
          <div data-aparecer-grupo className="mt-5 max-w-3xl space-y-4 text-lg text-verde-profundo/80">
            {comunidad.queEs.parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
          <div data-aparecer-grupo className="mt-10 grid gap-5 sm:grid-cols-3">
            {comunidad.queEs.pilares.map((pilar, i) => {
              const Icono = ICONOS_PILAR[i];
              return (
                <div
                  key={pilar.titulo}
                  className="group rounded-2xl bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-verde-profundo hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-esmeralda/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icono className="text-esmeralda" size={28} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-verde-profundo transition-colors duration-300 group-hover:text-crema">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2 text-verde-profundo/80 transition-colors duration-300 group-hover:text-crema/80">
                    {pilar.texto}
                  </p>
                </div>
              );
            })}
          </div>
          <dl data-aparecer-grupo className="mt-10 grid gap-5 sm:grid-cols-3">
            {comunidad.queEs.datos.map((dato) => (
              <div key={dato.valor} className="flex flex-col gap-1 rounded-2xl bg-card/40 p-6">
                <dt className="text-sm text-verde-profundo/70">{dato.label}</dt>
                <dd className="order-first text-2xl font-bold tabular-nums text-verde-profundo">
                  {dato.numero ? <NumeroAnimado valor={dato.numero} sufijo={dato.sufijo} /> : dato.valor}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 data-aparecer className="font-bold text-3xl text-verde-profundo sm:text-4xl">Flora y fauna autóctona</h2>

          <div data-aparecer-grupo className="mt-10 grid gap-5 sm:grid-cols-3">
            {comunidad.galeria.map((clave) => {
              const imagen = images[clave];
              const detalle = comunidad.galeriaTextos[clave];
              return (
                <figure key={clave} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="text-lg font-bold text-verde-profundo">{detalle.titulo}</h3>
                    <p className="mt-1 text-verde-profundo/80">{detalle.texto}</p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
