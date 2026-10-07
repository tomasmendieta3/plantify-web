"use client";

import { useState, type FormEvent } from "react";
import { estimacionAporte } from "@/data/site";
import { formatNumero } from "@/lib/format";

const { montosSugeridosArs, montoMinimoArs, montoMaximoArs } = estimacionAporte;

// t CO₂ por cada peso aportado: (t por árbol por año × años de captura) / (USD por árbol × tipo de cambio).
const co2TnPorArs =
  (estimacionAporte.co2TnPorArbolPorAnio * estimacionAporte.aniosCaptura) /
  (estimacionAporte.costoPorArbolUsd * estimacionAporte.tipoCambioArsPorUsd);

export default function FormularioAporte({
  sectorSlug,
  sectorNombre,
}: {
  sectorSlug: string;
  sectorNombre: string;
}) {
  const [montoElegido, setMontoElegido] = useState<number | null>(montosSugeridosArs[0]);
  const [montoLibre, setMontoLibre] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const [errores, setErrores] = useState<Record<string, string>>({});

  const montoFinal = montoLibre ? Number(montoLibre) : montoElegido ?? 0;
  const co2EstimadoKg = Math.round(montoFinal * co2TnPorArs * 1000);
  const co2Texto =
    co2EstimadoKg >= 1000
      ? { valor: (co2EstimadoKg / 1000).toLocaleString("es-AR", { maximumFractionDigits: 1 }), unidad: "t" }
      : { valor: formatNumero(co2EstimadoKg), unidad: "kg" };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = String(form.get("nombre") || "").trim();
    const email = String(form.get("email") || "").trim();
    const honeypot = String(form.get("empresa_web") || "");

    const nuevosErrores: Record<string, string> = {};
    if (email && !email.includes("@")) nuevosErrores.email = "Ese email no nos cierra, revisalo.";
    if (!montoFinal || montoFinal < montoMinimoArs || montoFinal > montoMaximoArs) {
      nuevosErrores.monto = `Elegí un monto entre $${formatNumero(montoMinimoArs)} y $${formatNumero(montoMaximoArs)}.`;
    }

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    setEstado("enviando");
    try {
      const res = await fetch("/api/aporte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          monto: montoFinal,
          sector: sectorSlug,
          honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error();
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="rounded-xl border border-esmeralda/30 bg-esmeralda/10 p-6 text-verde-profundo">
        <p className="font-medium">Gracias por tu aporte a {sectorNombre}.</p>
        <p className="mt-1 text-sm text-verde-profundo/70">
          Te mandamos un mail con el comprobante y con las novedades de la reserva.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-3xl border border-verde-profundo/10 bg-card/40">
        <form onSubmit={onSubmit} noValidate className="space-y-5 p-6 sm:p-7">
          <input
            type="text"
            name="empresa_web"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px]"
            aria-hidden="true"
          />

          <div id="monto-aporte">
            <p className="text-lg font-bold text-verde-profundo">Monto del aporte</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {montosSugeridosArs.map((monto) => (
              <button
                key={monto}
                type="button"
                onClick={() => {
                  setMontoElegido(monto);
                  setMontoLibre("");
                }}
                className={`rounded-full border px-5 py-2.5 text-lg font-bold transition-colors ${
                  montoElegido === monto && !montoLibre
                    ? "border-esmeralda bg-esmeralda text-verde-profundo"
                    : "border-verde-profundo/15 text-verde-profundo/70 hover:border-esmeralda/50"
                }`}
              >
                ${formatNumero(monto)}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <label htmlFor="montoLibre" className="text-base font-semibold text-verde-profundo/80">
              O escribí tu monto (entre ${formatNumero(montoMinimoArs)} y ${formatNumero(montoMaximoArs)})
            </label>
            <input
              id="montoLibre"
              type="number"
              min={montoMinimoArs}
              max={montoMaximoArs}
              step={100}
              value={montoLibre}
              onChange={(e) => {
                setMontoLibre(e.target.value);
                setMontoElegido(null);
              }}
              className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-3 text-lg font-bold text-verde-profundo outline-none focus:border-esmeralda"
            />
          </div>
          {errores.monto && <p className="mt-1 text-sm text-red-700">{errores.monto}</p>}
        </div>

        <div>
          <label htmlFor="nombre" className="text-sm text-verde-profundo/70">Nombre (opcional)</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-verde-profundo/70">Email (opcional)</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
          />
          {errores.email && <p className="mt-1 text-sm text-red-700">{errores.email}</p>}
        </div>

        {montoFinal > 0 && (
          <div className="fondo-verde-animado rounded-2xl p-4 text-white shadow-[0_10px_24px_-6px_rgba(14,53,40,0.55)]">
            <div className={`grid ${co2EstimadoKg > 0 ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
              <div>
                <span className="inline-block rounded-full bg-white px-2.5 py-1 text-xs font-bold text-verde-profundo">
                  Tu aporte
                </span>
                <p className="mt-2 font-black text-4xl leading-none tracking-tight text-white">
                  ${formatNumero(montoFinal)}
                </p>
              </div>
              {co2EstimadoKg > 0 && (
                <div className="border-l border-white/30 pl-3">
                  <span className="inline-block rounded-full bg-white px-2.5 py-1 text-xs font-bold text-verde-profundo">
                    CO₂ estimado
                  </span>
                  <p className="mt-2 font-black text-4xl leading-none tracking-tight text-white">
                    ~{co2Texto.valor}<span className="text-xl"> {co2Texto.unidad}</span>
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-xs font-medium text-white/85">
              Estimación no verificada: ~{formatNumero(estimacionAporte.co2TnPorArbolPorAnio * 1000)} kg
              de CO₂ por árbol por año.
            </p>
          </div>
        )}

        {estado === "error" && (
          <p className="text-sm text-red-700">
            No pudimos procesar el aporte. Probá de nuevo en un rato.
          </p>
        )}

        {/* TODO: acá se integra Mercado Pago — el submit hoy solo registra la intención de aporte */}
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="w-full rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90 disabled:opacity-60"
        >
          {estado === "enviando"
            ? "Procesando..."
            : `Aportar${montoFinal ? ` — $${formatNumero(montoFinal)}` : ""}`}
        </button>
        </form>
      </div>
    </div>
  );
}
