import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Sprout, Footprints, Users, type LucideIcon } from "lucide-react";
import { comunidad, fauna, organizacion } from "@/data/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Visitas a la reserva",
  description:
    "Visitá Los Tualdos con tu familia: conocé la fauna del Delta y, si querés, plantá tu propio árbol. Una experiencia para pasar el día o el fin de semana.",
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
            <div className="mt-8">
              <Link
                href={`/contacto?motivo=visita&mensaje=${encodeURIComponent(mensajeVisita)}`}
                className="inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
              >
                Coordinar tu visita
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.visitaFamilia.src}
              alt={images.visitaFamilia.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">
            Qué vas a hacer
          </h2>

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {comunidad.actividades.map((actividad) => {
              const Icono = ICONOS[actividad.icono];
              return (
                <div key={actividad.titulo} className="flex items-start gap-4">
                  {Icono && <Icono className="mt-1 shrink-0 text-esmeralda" size={26} />}
                  <div>
                    <p className="font-medium text-verde-profundo">{actividad.titulo}</p>
                    <p className="mt-1 text-sm text-verde-profundo/70">{actividad.texto}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src={images.fauna.src}
              alt={images.fauna.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">
              La fauna que vas a encontrar
            </h2>
            <p className="mt-3 text-sm text-verde-profundo/70">
              Los Tualdos está en el Delta, así que la fauna es la del humedal. No hay garantías
              de avistaje, pero es raro no ver alguno de estos.
            </p>
            <div className="mt-6 space-y-4">
              {fauna.map((animal) => (
                <div key={animal.nombre}>
                  <p className="font-medium text-verde-profundo">
                    {animal.nombre} <span className="text-sm italic text-verde-profundo/50">{animal.nombreCientifico}</span>
                  </p>
                  <p className="text-sm text-verde-profundo/70">{animal.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-verde-profundo text-crema">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-2xl sm:text-3xl">Cómo es la visita</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-esmeralda">Duración</p>
              <p className="mt-1 text-sm text-crema/80">{comunidad.duracion}</p>
              <p className="mt-4 text-sm font-medium text-esmeralda">Cómo llegamos</p>
              <p className="mt-1 text-sm text-crema/80">{comunidad.comoLlegar}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-esmeralda">Qué incluye</p>
              <ul className="mt-1 space-y-1.5 text-sm text-crema/80">
                {comunidad.incluye.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>
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
