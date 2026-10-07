import Link from "next/link";
import { Award } from "lucide-react";
import { goldStandard } from "@/data/site";

// Cucarda de validación: Gold Standard va separado de Control Union y solo con
// los datos del listado. En producción no se muestra hasta tener todos los datos.
export default function CucardaGoldStandard() {
  const { numeroListado, hectareasElegibles, periodo } = goldStandard;
  const completo = !!numeroListado && !!periodo && !!hectareasElegibles;
  if (!completo && process.env.NODE_ENV === "production") return null;

  const datos = [
    { label: "N° de listado", valor: numeroListado || "A confirmar" },
    { label: "Hectáreas elegibles", valor: `${hectareasElegibles} ha` },
    { label: "Período", valor: periodo || "A confirmar" },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border-2 border-dorado/50 bg-crema p-6 text-left sm:flex-row sm:p-8">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-dorado bg-dorado/10">
        <Award className="text-dorado" size={36} strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold tracking-wide text-dorado uppercase">Validación</p>
        <p className="mt-1 font-bold text-xl text-verde-profundo">Proyecto listado en Gold Standard</p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-3">
          {datos.map((dato) => (
            <div key={dato.label}>
              <dt className="text-xs text-verde-profundo/60">{dato.label}</dt>
              <dd className="mt-0.5 font-bold text-verde-profundo">{dato.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Link
        href="/contacto?motivo=gold-standard"
        className="shrink-0 rounded-full bg-esmeralda px-5 py-2.5 text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
      >
        Consultar
      </Link>
    </div>
  );
}
