import type { Metadata } from "next";
import Image from "next/image";
import { Droplet, Leaf, MapPin, TreePine, Zap, type LucideIcon } from "lucide-react";
import Equipo from "@/components/home/Equipo";
import { caracteristicasReserva, certificaciones, co2, datosReserva, mision, reserva } from "@/data/site";
import { images } from "@/lib/images";

const ICONOS_CARACTERISTICA: Record<string, LucideIcon> = { TreePine, Droplet, Zap };

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes somos en Plantify, cómo certificamos Los Tualdos con Control Union y Gold Standard, y cómo medimos el CO₂ con metodología alométrica IPCC.",
};

export default function NosotrosPage() {
  return (
    <div className="text-center">
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8">
        <h1 className="text-4xl text-verde-profundo sm:text-5xl">Nosotros</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-verde-profundo/75">
          Somos el equipo que planta, cuida y audita Los Tualdos, en {reserva.localidad}.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-xl leading-relaxed text-verde-profundo/85">{mision.frase}</p>
        <p className="mt-6 text-verde-profundo/75 leading-relaxed">{mision.vision}</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
          <video
            src="/reserva/tualdos-nosotros-hero.mp4"
            poster="/reserva/tualdos-nosotros-hero-poster.jpg"
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-verde-profundo">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-center font-bold text-3xl text-crema sm:text-4xl">{mision.pilares.titulo}</h2>
          <p className="mt-4 text-center text-lg text-crema/80">{mision.pilares.subtitulo}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mision.pilares.items.map((pilar) => {
              const imagen = images[pilar.imagen];
              return (
                <div
                  key={pilar.titulo}
                  className="overflow-hidden rounded-2xl border border-crema/10 bg-crema/5"
                >
                  <div className="relative h-40 w-full">
                    <Image src={imagen.src} alt={imagen.alt} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="font-medium text-crema">{pilar.titulo}</p>
                    <p className="mt-2 text-sm leading-relaxed text-crema/70">{pilar.texto}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo">Cómo empezamos</h2>
        <p className="mt-4 text-verde-profundo/75 leading-relaxed">
          Plantify nació para resolver un problema concreto: las empresas quieren compensar y
          reforestar, pero no tienen dónde hacerlo con seriedad ni cómo mostrarlo. Armamos Los
          Tualdos para que cada empresa tenga un sector propio, con seguimiento real durante
          catorce años, no una promesa de árboles que nadie vuelve a ver.
        </p>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {caracteristicasReserva.map((item) => {
              const Icono = ICONOS_CARACTERISTICA[item.icono];
              return (
                <div
                  key={item.titulo}
                  className="rounded-2xl bg-crema p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icono className="shrink-0 text-verde-profundo" size={32} strokeWidth={1.75} />
                  <p className="mt-4 font-medium text-verde-profundo">{item.titulo}</p>
                  <p className="mt-1 text-sm text-verde-profundo/70">{item.texto}</p>
                </div>
              );
            })}

            <div className="rounded-2xl bg-crema p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-esmeralda uppercase">
                    <MapPin size={16} />
                    Ubicación
                  </div>
                  <p className="mt-2 text-sm text-verde-profundo/70">{datosReserva.ubicacion}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-dorado uppercase">
                    <Leaf size={16} />
                    Superficie
                  </div>
                  <p className="mt-2 text-sm text-verde-profundo/70">{datosReserva.superficie}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Equipo />

      <section id="certificaciones" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-2xl text-verde-profundo">Certificaciones</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {certificaciones.map((cert) => (
              <div key={cert.nombre}>
                <p className="text-lg font-medium text-dorado">{cert.nombre}</p>
                <p className="mt-1 text-sm text-verde-profundo/60">{cert.descripcion}</p>
                <p className="mt-3 text-sm leading-relaxed text-verde-profundo/75">{cert.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo">
          Cómo medimos el CO₂
        </h2>
        <p className="mt-4 text-verde-profundo/75 leading-relaxed">{co2.metodologia}.</p>
        <p className="mt-3 text-verde-profundo/75 leading-relaxed">
          Siempre distinguimos entre CO₂ <span className="text-verde-profundo/50">proyectado</span> —
          una estimación sobre el crecimiento esperado— y CO₂{" "}
          <span className="text-dorado">verificado</span> — lo que ya pasó por la auditoría anual
          de Control Union. No presentamos una proyección como si fuera un dato verificado.
        </p>
      </section>
    </div>
  );
}
