"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { catalogoArboles, estimacionAporte } from "@/data/site";
import { images } from "@/lib/images";
import { formatNumero } from "@/lib/format";

const { montosSugeridosArs, montoMinimoArs, montoMaximoArs } = estimacionAporte;

export default function FormularioAporte({
  sectorSlug,
  sectorNombre,
  minimal = false,
}: {
  sectorSlug: string;
  sectorNombre: string;
  minimal?: boolean;
}) {
  const [arbolElegido, setArbolElegido] = useState<string | null>(null);
  const [montoElegido, setMontoElegido] = useState<number | null>(montosSugeridosArs[0]);
  const [montoLibre, setMontoLibre] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const [errores, setErrores] = useState<Record<string, string>>({});

  const montoFinal = montoLibre ? Number(montoLibre) : montoElegido ?? 0;
  const arbol = catalogoArboles.find((a) => a.slug === arbolElegido);
  const arbolImg = arbol ? images[arbol.imagen as keyof typeof images] : null;

  const cantidadArboles = montoFinal > 0
    ? Math.max(1, Math.round(montoFinal / estimacionAporte.costoPorArbolArs))
    : 0;
  const co2EstimadoKg = cantidadArboles * estimacionAporte.co2KgPorArbolEstimado;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = String(form.get("nombre") || "").trim();
    const email = String(form.get("email") || "").trim();
    const honeypot = String(form.get("empresa_web") || "");

    const nuevosErrores: Record<string, string> = {};
    if (!minimal && !arbolElegido) nuevosErrores.arbol = "Elegí a qué árbol va tu aporte.";
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
          arbol: arbolElegido,
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
          Te mandamos un mail con el comprobante{arbol ? ` de tu ${arbol.nombre}` : ""} y con las
          próximas fotos del sector.
        </p>
      </div>
    );
  }

  return (
    <div>
      {!minimal && (
        <div>
          <p className="text-sm text-verde-profundo/70">Elegí tu árbol</p>
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {catalogoArboles.map((a) => {
              const img = images[a.imagen as keyof typeof images];
              const activo = arbolElegido === a.slug;
              return (
                <button
                  key={a.slug}
                  type="button"
                  onClick={() => setArbolElegido(a.slug)}
                  aria-pressed={activo}
                  className={`overflow-hidden rounded-xl border bg-card/40 text-left transition-colors ${
                    activo ? "border-esmeralda" : "border-verde-profundo/15 hover:border-esmeralda/50"
                  }`}
                >
                  <div className="relative aspect-square">
                    <Image src={img.src} alt={img.alt} fill sizes="150px" className="object-cover" />
                  </div>
                  <p
                    className={`px-2 py-1.5 text-center text-sm ${
                      activo ? "font-medium text-verde-profundo" : "text-verde-profundo/70"
                    }`}
                  >
                    {a.nombre}
                  </p>
                </button>
              );
            })}
          </div>
          {errores.arbol && <p className="mt-1 text-sm text-red-700">{errores.arbol}</p>}
        </div>
      )}

      <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-3xl border border-verde-profundo/10 bg-card/40">
        {!minimal && arbol && arbolImg && (
          <div className="relative m-2 h-44 overflow-hidden rounded-2xl sm:h-56">
            <Image src={arbolImg.src} alt={arbolImg.alt} fill sizes="448px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-verde-profundo/85 via-verde-profundo/30 to-transparent p-4">
              <div>
                <p className="text-xs text-crema/75">Tu árbol</p>
                <p className="font-bold text-xl text-crema">{arbol.nombre}</p>
              </div>
              {co2EstimadoKg > 0 && (
                <div className="text-right">
                  <p className="font-bold text-esmeralda">~{formatNumero(co2EstimadoKg)} kg</p>
                  <p className="text-xs text-crema/75">CO₂ estimado</p>
                </div>
              )}
            </div>
          </div>
        )}

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
            <p className="text-sm text-verde-profundo/70">Monto del aporte</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {montosSugeridosArs.map((monto) => (
              <button
                key={monto}
                type="button"
                onClick={() => {
                  setMontoElegido(monto);
                  setMontoLibre("");
                }}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
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
            <label htmlFor="montoLibre" className="text-sm text-verde-profundo/70">
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
              className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
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
                    CO₂ que compensás
                  </span>
                  <p className="mt-2 font-black text-4xl leading-none tracking-tight text-white">
                    ~{formatNumero(co2EstimadoKg)}<span className="text-xl"> kg</span>
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-xs font-medium text-white/85">
              Estimación alométrica, no verificada. La cifra auditada llega con el informe de tu
              sector.
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
            : `Aportar${arbol ? ` para tu ${arbol.nombre}` : ""}${montoFinal ? ` — $${formatNumero(montoFinal)}` : ""}`}
        </button>
        </form>
      </div>
    </div>
  );
}
