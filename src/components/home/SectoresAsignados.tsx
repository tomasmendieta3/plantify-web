import Link from "next/link";
import { sectores } from "@/data/site";
import { formatNumero } from "@/lib/format";

export default function SectoresAsignados() {
  if (sectores.length === 0) return null;

  return (
    <section className="bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">
          Sectores en la reserva
        </h2>
        <p className="mt-3 max-w-lg text-verde-profundo/70">
          Todavía estamos sumando empresas a Los Tualdos. Así se ve el primer sector, a modo de
          ejemplo, mientras cerramos los próximos.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectores.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sector/${sector.slug}`}
              className="block rounded-xl border border-verde-profundo/10 bg-crema p-6 transition-colors hover:border-esmeralda/40"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-verde-profundo">{sector.empresa}</p>
                {sector.esDemo && (
                  <span className="rounded-full bg-dorado/15 px-2 py-0.5 text-xs text-dorado">
                    ejemplo
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-verde-profundo/70">
                {formatNumero(sector.hectareas)} hectáreas · {sector.temporada}
              </p>
              <p className="mt-1 text-sm text-verde-profundo/60">{sector.especies.join(", ")}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
