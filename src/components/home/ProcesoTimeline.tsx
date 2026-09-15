"use client";

import { useState } from "react";
import Image from "next/image";
import { pasos } from "@/data/site";
import { images } from "@/lib/images";
import HeroVideo from "@/components/empresas/HeroVideo";

export default function ProcesoTimeline() {
  const [abierto, setAbierto] = useState(0);

  return (
    <section id="como-trabajamos" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-verde-profundo px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-lg font-black text-3xl leading-tight text-crema sm:text-4xl">
              Cómo trabajamos
            </h2>
            <p className="mt-4 max-w-md text-crema/70">
              Catorce años, de punta a punta. Elegí una etapa para ver qué hacemos y qué recibís.
            </p>

            <div className="mt-10 border-b border-dorado/60">
              {pasos.map((paso, i) => {
                const activo = abierto === i;
                return (
                  <div key={paso.anio} className="border-t border-crema/15">
                    <button
                      type="button"
                      onClick={() => setAbierto(activo ? -1 : i)}
                      aria-expanded={activo}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="text-base text-dorado">{i + 1}.</span>
                        <span className="text-lg font-bold text-crema sm:text-xl">
                          {paso.titulo}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 shrink-0 text-dorado transition-transform duration-300 ${
                          activo ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {activo && (
                      <div className="-mt-1 max-w-md pb-6 text-sm leading-relaxed text-crema/70">
                        <p>{paso.hacemos}</p>
                        <p className="mt-2 text-crema/85">
                          <span className="font-medium">Recibís: </span>
                          {paso.recibis}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="relative h-14 w-14">
                <Image
                  src={images.logoControlUnion.src}
                  alt={images.logoControlUnion.alt}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-14 w-14">
                <Image
                  src={images.logoGoldStandard.src}
                  alt={images.logoGoldStandard.alt}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <HeroVideo src="/reserva/tualdos-hero.mp4" poster="/reserva/tualdos-hero-poster.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
