import type { Metadata } from "next";
import { Megaphone, Satellite, Sprout, TreePine, type LucideIcon } from "lucide-react";
import GestionCalidad from "@/components/GestionCalidad";
import { mision, misionVisionValores, valores } from "@/data/site";

const ICONOS_PILAR: Record<string, LucideIcon> = { TreePine, Sprout, Satellite, Megaphone };

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes somos en Plantify: desarrollamos reservas forestales, ayudamos a empresas y comunidades a plantar árboles y capacitamos.",
};

export default function NosotrosPage() {
  return (
    // Escritorio: dos columnas. A la izquierda va todo el contenido y a la derecha el video
    // vertical (1080×1920), que queda fijo (sticky) mientras se scrollea toda la página.
    // En celu: texto, video y después el resto, una cosa debajo de la otra.
    <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-16 text-center sm:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-12">
      <section className="py-6 text-left lg:col-start-1 lg:row-start-1 lg:flex lg:min-h-[calc(100svh-120px)] lg:items-center">
        <div>
          <h1 className="font-black text-5xl text-verde-profundo sm:text-6xl">Nosotros</h1>
          <p className="mt-4 max-w-xl text-lg text-verde-profundo/75">
            Somos un equipo comprometido con el cuidado del medio ambiente, creemos en la correcta
            implementación de soluciones para el cuidado del mismo, de una forma que todos puedan ser
            parte.
          </p>
        </div>
      </section>

      <div className="mt-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <div className="relative mx-auto aspect-[9/16] h-[80svh] overflow-hidden rounded-3xl bg-verde-profundo shadow-xl lg:sticky lg:top-24 lg:h-[calc(100svh-120px)]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero-nosotros.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-12 space-y-12 lg:col-start-1 lg:row-start-2 lg:mt-0">
        <section className="overflow-hidden rounded-3xl bg-verde-profundo">
          <div className="px-6 py-14 sm:px-10">
            <h2 className="text-center font-bold text-3xl text-crema sm:text-4xl">{mision.pilares.titulo}</h2>
            {mision.pilares.subtitulo && (
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-crema/80">{mision.pilares.subtitulo}</p>
            )}

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {mision.pilares.items.map((pilar) => {
                const Icono = ICONOS_PILAR[pilar.icono];
                return (
                  <div key={pilar.titulo} className="rounded-2xl border border-crema/10 bg-crema/5 p-6 text-left">
                    <Icono className="text-esmeralda" size={32} strokeWidth={1.5} />
                    <p className="mt-4 font-bold text-crema">{pilar.titulo}</p>
                    <p className="mt-2 text-sm leading-relaxed text-crema/70">{pilar.texto}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <GestionCalidad />

        <section className="py-4">
          <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">Misión, visión y valores</h2>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl bg-verde-profundo p-8">
              <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Misión</p>
              <p className="mt-3 text-lg leading-relaxed text-crema">{misionVisionValores.mision}</p>
            </div>
            <div className="rounded-2xl bg-verde-profundo p-8">
              <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Visión</p>
              <p className="mt-3 text-lg leading-relaxed text-crema">{misionVisionValores.vision}</p>
            </div>
          </div>

          <p className="mt-12 text-sm font-bold tracking-wide text-esmeralda uppercase">Valores</p>
          <div className="mt-4 grid gap-6 text-left sm:grid-cols-2">
            {valores.map((valor) => (
              <div key={valor.titulo} className="rounded-2xl border border-verde-profundo/10 bg-card/40 p-6">
                <p className="font-bold text-verde-profundo">{valor.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-verde-profundo/70">{valor.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
