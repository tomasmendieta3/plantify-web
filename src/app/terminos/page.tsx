import type { Metadata } from "next";
import { organizacion } from "@/data/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
};

// TODO: reemplazar con el texto legal final (lo revisa Gastón).
// Cada sección es un párrafo; agregar/quitar entradas según el texto que llegue.
const secciones: { titulo: string; texto: string }[] = [];

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="font-black text-4xl text-verde-profundo sm:text-5xl">Términos y condiciones</h1>
      <p className="mt-3 text-sm text-verde-profundo/60">{organizacion.razonSocial}</p>

      {secciones.length > 0 ? (
        <div className="mt-10 space-y-8">
          {secciones.map((seccion) => (
            <section key={seccion.titulo}>
              <h2 className="font-bold text-xl text-verde-profundo">{seccion.titulo}</h2>
              <p className="mt-2 leading-relaxed whitespace-pre-line text-verde-profundo/75">{seccion.texto}</p>
            </section>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-verde-profundo/70">Texto en revisión.</p>
      )}
    </div>
  );
}
