"use client";

import { useState } from "react";
import type { PasoRecorrido } from "@/data/site";

export default function RecorridoPasos({ pasos }: { pasos: PasoRecorrido[] }) {
  const [activo, setActivo] = useState(0);

  return (
    <div>
      <ol className="relative mt-12 grid gap-6 text-left lg:grid-cols-6 lg:gap-4 lg:text-center">
        <div
          aria-hidden
          className="absolute top-12 bottom-12 left-12 w-0.5 bg-esmeralda/40 lg:top-12 lg:right-[8.33%] lg:bottom-auto lg:left-[8.33%] lg:h-0.5 lg:w-auto"
        />
        {pasos.map((p, i) => {
          const esActivo = i === activo;
          return (
            <li key={p.titulo} className="relative">
              <button
                type="button"
                onClick={() => setActivo(i)}
                aria-pressed={esActivo}
                className="group flex w-full items-center gap-4 text-left lg:flex-col lg:gap-3 lg:text-center"
              >
                <span
                  className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 text-4xl font-black transition-all duration-300 ${
                    esActivo
                      ? "scale-110 border-esmeralda bg-esmeralda text-verde-profundo shadow-lg"
                      : "border-esmeralda bg-crema text-esmeralda group-hover:scale-105 group-hover:bg-esmeralda/15"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`whitespace-pre-line text-lg font-bold leading-snug transition-colors ${
                    esActivo ? "text-verde-profundo" : "text-verde-profundo/60 group-hover:text-verde-profundo"
                  }`}
                >
                  {p.titulo}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
