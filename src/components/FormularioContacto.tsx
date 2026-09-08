"use client";

import { useState, type FormEvent } from "react";

type Estado = "idle" | "enviando" | "ok" | "error";

export default function FormularioContacto({
  mensajeInicial,
  esVisita,
}: {
  mensajeInicial?: string;
  esVisita?: boolean;
}) {
  const [estado, setEstado] = useState<Estado>("idle");
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [mensajeError, setMensajeError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const nombre = String(form.get("nombre") || "").trim();
    const email = String(form.get("email") || "").trim();
    const empresa = String(form.get("empresa") || "").trim();
    const mensaje = String(form.get("mensaje") || "").trim();
    const honeypot = String(form.get("empresa_web") || "");

    const nuevosErrores: Record<string, string> = {};
    if (!nombre) nuevosErrores.nombre = "Nos falta tu nombre.";
    if (!email || !email.includes("@")) nuevosErrores.email = "Ese email no nos cierra, revisalo.";
    if (!mensaje) nuevosErrores.mensaje = "Contanos un poco qué estás buscando.";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, empresa, mensaje, honeypot }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Error");
      setEstado("ok");
    } catch {
      setMensajeError("Algo falló de nuestro lado. Probá de nuevo en un rato o escribinos por WhatsApp.");
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="rounded-xl border border-esmeralda/30 bg-esmeralda/10 p-6 text-verde-profundo">
        <p className="font-medium">Recibimos tu pedido.</p>
        <p className="mt-1 text-sm text-verde-profundo/70">
          {esVisita
            ? "Te contestamos en las próximas horas para confirmar el día de tu visita."
            : "Te contestamos en las próximas horas con una propuesta armada para tu empresa."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: campo invisible para bots, las personas nunca lo completan */}
      <input
        type="text"
        name="empresa_web"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="nombre" className="text-sm text-verde-profundo/70">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
        />
        {errores.nombre && <p className="mt-1 text-sm text-red-700">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-verde-profundo/70">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
        />
        {errores.email && <p className="mt-1 text-sm text-red-700">{errores.email}</p>}
      </div>

      {!esVisita && (
        <div>
          <label htmlFor="empresa" className="text-sm text-verde-profundo/70">Empresa</label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
          />
        </div>
      )}

      <div>
        <label htmlFor="mensaje" className="text-sm text-verde-profundo/70">
          {esVisita ? "Contanos con cuántos son y cuándo te gustaría venir" : "Contanos tu caso"}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          defaultValue={mensajeInicial}
          className="mt-1 w-full rounded-lg border border-verde-profundo/15 bg-crema px-4 py-2.5 text-verde-profundo outline-none focus:border-esmeralda"
        />
        {errores.mensaje && <p className="mt-1 text-sm text-red-700">{errores.mensaje}</p>}
      </div>

      {estado === "error" && <p className="text-sm text-red-700">{mensajeError}</p>}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="rounded-full bg-esmeralda px-7 py-3 text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90 disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando..." : esVisita ? "Coordinar visita" : "Pedir una propuesta"}
      </button>
    </form>
  );
}
