"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { generarGrilla, VIEW_W, VIEW_H } from "@/lib/mapaGrid";
import { sectores, celdasEnPlantacion, reserva, type Sector } from "@/data/site";
import { formatNumero } from "@/lib/format";

type EstadoCelda = "libre" | "asignado" | "en-plantacion";

type CeldaConEstado = ReturnType<typeof generarGrilla>[number] & {
  estado: EstadoCelda;
  sector?: Sector;
};

function construirCeldas(): CeldaConEstado[] {
  const grilla = generarGrilla();
  const enPlantacion = new Set(celdasEnPlantacion);
  const porCelda = new Map<string, Sector>();
  for (const sector of sectores) {
    for (const id of sector.celdas) porCelda.set(id, sector);
  }

  return grilla.map((celda) => {
    const sector = porCelda.get(celda.id);
    if (sector) return { ...celda, estado: "asignado" as const, sector };
    if (enPlantacion.has(celda.id)) return { ...celda, estado: "en-plantacion" as const };
    return { ...celda, estado: "libre" as const };
  });
}

function colorDeEstado(estado: EstadoCelda) {
  switch (estado) {
    case "asignado":
      return { fill: "var(--esmeralda)", opacity: 1, dash: undefined };
    case "en-plantacion":
      return { fill: "var(--esmeralda)", opacity: 0.4, dash: "4 3" };
    default:
      return { fill: "var(--card)", opacity: 0.9, dash: undefined };
  }
}

function etiquetaEstado(celda: CeldaConEstado): string {
  if (celda.estado === "asignado" && celda.sector) {
    return `Sector de ${celda.sector.empresa}, ${celda.sector.hectareas} hectáreas`;
  }
  if (celda.estado === "en-plantacion") return "En plantación esta temporada, todavía sin empresa";
  return "Hectárea libre";
}

export default function MapaSectores({
  resaltarSlug,
  oscuro,
}: { resaltarSlug?: string; oscuro?: boolean } = {}) {
  const celdas = useMemo(construirCeldas, []);
  const sectorResaltado = resaltarSlug ? sectores.find((s) => s.slug === resaltarSlug) : undefined;
  const [activoId, setActivoId] = useState<string | null>(sectorResaltado?.celdas[0] ?? null);
  const [panelSector, setPanelSector] = useState<Sector | null>(sectorResaltado ?? null);

  const celdaActiva = celdas.find((c) => c.id === activoId) ?? null;

  useEffect(() => {
    if (!panelSector) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelSector(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panelSector]);

  const activar = (celda: CeldaConEstado) => {
    setActivoId(celda.id);
    if (celda.sector) setPanelSector(celda.sector);
  };

  if (sectores.length === 0) {
    return (
      <div className="rounded-lg border border-verde-profundo/10 bg-card/60 p-6 text-sm text-verde-profundo/70">
        Todavía no asignamos sectores de esta temporada.
      </div>
    );
  }

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="group"
        aria-label={`Mapa de hectáreas de la reserva ${reserva.nombre}`}
        className="w-full overflow-visible"
      >
        {celdas.map((celda) => {
          const color = colorDeEstado(celda.estado);
          const esActiva = celda.id === activoId || sectorResaltado?.celdas.includes(celda.id);
          return (
            <polygon
              key={celda.id}
              points={celda.points}
              fill={color.fill}
              fillOpacity={color.opacity}
              stroke="var(--verde-profundo)"
              strokeOpacity={esActiva ? 0.9 : 0.18}
              strokeWidth={esActiva ? 2.5 : 1}
              strokeDasharray={color.dash}
              tabIndex={0}
              role="button"
              aria-label={etiquetaEstado(celda)}
              className="cursor-pointer transition-[fill-opacity,stroke-opacity] duration-150 outline-none"
              onMouseEnter={() => setActivoId(celda.id)}
              onFocus={() => setActivoId(celda.id)}
              onClick={() => activar(celda)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  activar(celda);
                }
              }}
            />
          );
        })}
      </svg>

      <div
        className={`mt-3 min-h-6 text-sm ${oscuro ? "font-medium text-white/90 drop-shadow" : "text-verde-profundo/70"}`}
        aria-live="polite"
      >
        {celdaActiva ? etiquetaEstado(celdaActiva) : "Pasá el mouse o navegá con el teclado para ver cada hectárea."}
      </div>

      <div className={`mt-2 flex flex-wrap gap-4 text-xs ${oscuro ? "font-medium text-white/80 drop-shadow" : "text-verde-profundo/60"}`}>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-esmeralda" /> Asignado
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-esmeralda/40" /> En plantación
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-sm bg-card border ${oscuro ? "border-white/40" : "border-verde-profundo/20"}`} /> Libre
        </span>
      </div>

      {panelSector && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label={`Sector de ${panelSector.empresa}`}
          className="absolute top-0 right-0 z-10 w-72 max-w-[85vw] rounded-lg border border-verde-profundo/10 bg-crema p-5 shadow-xl"
        >
          <button
            type="button"
            onClick={() => setPanelSector(null)}
            className="absolute top-3 right-3 text-verde-profundo/50 hover:text-verde-profundo"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
          <p className="pr-6 font-medium text-verde-profundo">
            {panelSector.empresa}
            {panelSector.esDemo && (
              <span className="ml-2 rounded-full bg-dorado/20 px-2 py-0.5 text-xs font-normal text-dorado">
                demo
              </span>
            )}
          </p>
          <dl className="mt-3 space-y-1.5 text-sm text-verde-profundo/70">
            <div className="flex justify-between gap-3">
              <dt>Hectáreas</dt>
              <dd>{formatNumero(panelSector.hectareas)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Temporada</dt>
              <dd>{panelSector.temporada}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Especies</dt>
              <dd className="text-right">{panelSector.especies.join(", ")}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Auditoría</dt>
              <dd className="text-right">{panelSector.estadoAuditoria}</dd>
            </div>
          </dl>
          <Link
            href={`/sector/${panelSector.slug}`}
            className="mt-4 block rounded-full bg-esmeralda px-4 py-2 text-center text-sm font-medium text-verde-profundo hover:bg-esmeralda/90"
          >
            Ver sector público
          </Link>
        </div>
      )}
    </div>
  );
}
