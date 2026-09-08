"use client";

import { useState } from "react";
import { pasos } from "@/data/site";

export default function ProcesoTimeline() {
  const [abierto, setAbierto] = useState(0);

  return (
    <section id="como-trabajamos" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="max-w-lg font-bold text-3xl text-verde-profundo sm:text-4xl">
        Cómo trabajamos
      </h2>
      <p className="mt-3 max-w-md text-verde-profundo/70">
        Catorce años, de punta a punta. Elegí una etapa para ver qué hacemos y qué recibís.
      </p>

      <div className="mt-10 grid gap-3 md:grid-cols-4 md:gap-4">
        {pasos.map((paso, i) => {
          const activo = abierto === i;
          return (
            <div key={paso.anio} className="md:border-t-2 md:pt-4" style={{ borderColor: activo ? "var(--esmeralda)" : "color-mix(in srgb, var(--verde-profundo) 12%, transparent)" }}>
              <button
                type="button"
                onClick={() => setAbierto(activo ? -1 : i)}
                aria-expanded={activo}
                className="flex w-full items-baseline justify-between gap-3 py-3 text-left md:py-0"
              >
                <span>
                  <span className="block text-xs text-verde-profundo/50">{paso.anio}</span>
                  <span className="mt-1 block text-base font-medium text-verde-profundo">
                    {paso.titulo}
                  </span>
                </span>
              </button>

              {activo && (
                <div className="pb-4 text-sm leading-relaxed text-verde-profundo/70 md:pt-3">
                  <p>{paso.hacemos}</p>
                  <p className="mt-2 text-verde-profundo/85">
                    <span className="font-medium">Recibís: </span>
                    {paso.recibis}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
