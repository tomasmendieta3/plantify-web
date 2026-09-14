"use client";

import { useState } from "react";
import type { ActorProceso, ModeloNegocioProceso } from "@/data/site";

const COLOR_ACTOR: Record<ActorProceso, string> = {
  Aportante: "bg-verde-profundo/10 text-verde-profundo",
  Empresa: "bg-dorado/20 text-dorado",
  Plantify: "bg-esmeralda/20 text-esmeralda",
  "Los Tualdos": "bg-verde-profundo/10 text-verde-profundo/70",
  Certificador: "bg-verde-profundo text-crema",
};

export default function ProcesoModelo({ modelo }: { modelo: ModeloNegocioProceso }) {
  const [abierta, setAbierta] = useState(0);

  return (
    <div className="divide-y divide-verde-profundo/10 rounded-2xl border border-verde-profundo/10 bg-crema">
      {modelo.fases.map((fase, i) => {
        const activa = abierta === i;
        return (
          <div key={fase.fase}>
            <button
              type="button"
              onClick={() => setAbierta(activa ? -1 : i)}
              aria-expanded={activa}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="font-medium text-verde-profundo">{fase.fase}</span>
              <span className="text-sm text-verde-profundo/50">{activa ? "ocultar" : "ver pasos"}</span>
            </button>

            {activa && (
              <ul className="space-y-3 px-5 pb-5 sm:px-6">
                {fase.pasos.map((paso) => (
                  <li key={paso.numero} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 shrink-0 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap ${COLOR_ACTOR[paso.actor]}`}
                    >
                      {paso.actor}
                    </span>
                    <span className="text-verde-profundo/75 leading-relaxed">{paso.texto}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
