import type { Metadata } from "next";
import Image from "next/image";
import { Droplet, Leaf, MapPin, TreePine, Users, Zap, type LucideIcon } from "lucide-react";
import Equipo from "@/components/home/Equipo";
import { caracteristicasReserva, certificaciones, datosReserva, mision, reserva } from "@/data/site";
import { images } from "@/lib/images";

const ICONOS_CARACTERISTICA: Record<string, LucideIcon> = { TreePine, Droplet, Zap };

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes somos en Plantify, cómo certificamos Los Tualdos con Control Union y cómo medimos el CO₂ con metodología alométrica IPCC.",
};

export default function NosotrosPage() {
  return (
    <div className="text-center">
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-esmeralda/15">
          <Users className="text-verde-profundo" size={30} strokeWidth={1.75} />
        </div>
        <h1 className="mt-5 font-black text-5xl text-verde-profundo sm:text-6xl">Nosotros</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-verde-profundo/75">
          Somos el equipo que planta, cuida y audita Los Tualdos, en {reserva.localidad}.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-6 pb-16 sm:px-8">
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

      <section className="relative overflow-hidden py-24">
        <Image
          src={images.heroFondo.src}
          alt={images.heroFondo.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-verde-profundo/70" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-bold text-2xl text-crema sm:text-4xl lg:text-5xl">
            Nos mueve el objetivo de que todas las personas y empresas puedan aportar al cambio
            para un futuro más próspero para todos, a través de Plantify.
          </h2>
        </div>
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
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-bold text-2xl text-verde-profundo">Certificaciones</h2>
          <div className="mt-8 space-y-8">
            {certificaciones.map((cert) => (
              <div key={cert.nombre} className="rounded-2xl bg-verde-profundo p-8 sm:p-10">
                <div className="relative mx-auto h-14 w-14">
                  <Image
                    src={images.logoControlUnion.src}
                    alt={images.logoControlUnion.alt}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <p className="mt-4 text-2xl font-bold text-esmeralda">{cert.nombre}</p>
                <p className="mt-1 font-medium text-white/70">{cert.descripcion}</p>
                <p className="mt-4 leading-relaxed text-white/85">{cert.detalle}</p>
                <p className="mt-4 text-sm text-white/60">
                  Usamos este proceso únicamente para auditar y verificar la plantación, nada más.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
