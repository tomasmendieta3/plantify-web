import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Sprout, Footprints, Users, Clock, Navigation, ListChecks, type LucideIcon } from "lucide-react";
import { comunidad, organizacion } from "@/data/site";
import { images } from "@/lib/images";
import HeroVideo from "@/components/empresas/HeroVideo";

export const metadata: Metadata = {
  title: "Visitas a la reserva",
  description:
    "Visitá Los Tualdos con tu familia: conocé a los animales de la reserva y, si querés, plantá tu propio árbol. Una experiencia para pasar el día o el fin de semana.",
};

const ICONOS: Record<string, LucideIcon> = {
  PawPrint,
  Sprout,
  Footprints,
  Users,
};

export default function ComunidadPage() {
  const mensajeVisita = "Quiero coordinar una visita a Los Tualdos con mi familia.";

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl leading-tight text-verde-profundo sm:text-5xl">
              Vení a conocer Los Tualdos.
            </h1>
            <p className="mt-5 max-w-md text-lg text-verde-profundo/75">
              {comunidad.bajada}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/contacto?motivo=visita&mensaje=${encodeURIComponent(mensajeVisita)}`}
                className="inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
              >
                Coordinar tu visita
              </Link>
              <a
                href="https://tualdos-qr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-verde-profundo/20 px-7 py-3.5 text-base font-medium text-verde-profundo transition-colors hover:border-esmeralda/50"
              >
                Recorrido virtual
              </a>
            </div>
          </div>

          <HeroVideo
            src="/comunidad/visita-familia-hero.mp4"
            poster="/comunidad/visita-familia-hero-poster.jpg"
          />
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">
            Qué vas a hacer
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {comunidad.actividades.map((actividad) => {
              const Icono = ICONOS[actividad.icono];
              const imagen = images[actividad.imagen];
              return (
                <div
                  key={actividad.titulo}
                  className="overflow-hidden rounded-2xl border border-verde-profundo/10 bg-crema transition-colors hover:border-esmeralda/40"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start gap-2 p-4">
                    {Icono && <Icono className="mt-0.5 shrink-0 text-esmeralda" size={18} />}
                    <div>
                      <p className="text-sm font-bold text-verde-profundo">{actividad.titulo}</p>
                      <p className="mt-1 text-xs text-verde-profundo/70">{actividad.texto}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-verde-profundo text-crema">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-black text-2xl sm:text-3xl">Cómo es la visita</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-crema/10 bg-crema/5 p-6">
              <Clock className="text-esmeralda" size={24} strokeWidth={1.75} />
              <p className="mt-3 text-sm font-bold text-crema">Duración</p>
              <p className="mt-1 text-sm text-crema/70">{comunidad.duracion}</p>
            </div>
            <div className="rounded-2xl border border-crema/10 bg-crema/5 p-6">
              <Navigation className="text-esmeralda" size={24} strokeWidth={1.75} />
              <p className="mt-3 text-sm font-bold text-crema">Cómo llegamos</p>
              <p className="mt-1 text-sm text-crema/70">{comunidad.comoLlegar}</p>
            </div>
            <div className="rounded-2xl border border-crema/10 bg-crema/5 p-6">
              <ListChecks className="text-esmeralda" size={24} strokeWidth={1.75} />
              <p className="mt-3 text-sm font-bold text-crema">Qué incluye</p>
              <ul className="mt-2 space-y-1.5 text-sm text-crema/70">
                {comunidad.incluye.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">Cómo llegar</h2>
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps?q=-33.864833,-58.842111&z=13&t=k&output=embed"
            className="h-full w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Los Tualdos en el mapa"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="font-bold text-3xl text-verde-profundo sm:text-4xl">
          Traé a tu familia a plantar un árbol.
        </p>
        <p className="mt-4 text-verde-profundo/75">
          Coordinamos el día que te quede mejor. Solo necesitamos que nos avises con
          anticipación para organizar el traslado.
        </p>
        <Link
          href={`/contacto?motivo=visita&mensaje=${encodeURIComponent(mensajeVisita)}`}
          className="mt-8 inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
        >
          Coordinar tu visita
        </Link>
        <p className="mt-4 text-xs text-verde-profundo/50">
          También podés escribirnos por WhatsApp al {organizacion.telefono}.
        </p>
      </section>
    </div>
  );
}
