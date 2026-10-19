import NumeroAnimado from "@/components/NumeroAnimado";
import { reserva, co2 } from "@/data/site";

type Stat = { label: string; valor: number; prefijo?: string };

export default function ContadorImpacto() {
  const stats: Stat[] = [
    { label: "Árboles plantados", valor: reserva.arboles, prefijo: "+" },
    { label: "Hectáreas", valor: reserva.hectareas },
    { label: "Hectáreas asignadas\na empresas", valor: reserva.hectareasAsignadas },
  ].filter((s) => !!s.valor);

  const hayCo2 = !!co2.proyectadoTn || !!co2.verificadoTn;

  if (stats.length === 0) return null;

  return (
    <section className="border-y border-verde-profundo/10 bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8">
        <div className="flex flex-nowrap justify-center gap-x-16 sm:gap-x-32 lg:gap-x-64">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="whitespace-nowrap text-[clamp(1.75rem,8vw,7.5rem)] font-black leading-none tracking-tight tabular-nums text-verde-profundo">
                <NumeroAnimado valor={stat.valor} prefijo={stat.prefijo} solidificar />
              </p>
              <p className="mt-2 whitespace-pre leading-tight text-[clamp(0.625rem,2.7vw,2.5rem)] text-verde-profundo/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {hayCo2 && (
          <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-verde-profundo/10 pt-8">
            {!!co2.proyectadoTn && (
              <div>
                <p className="text-2xl font-bold tracking-tight text-verde-profundo/50">
                  <NumeroAnimado valor={co2.proyectadoTn} sufijo=" tn CO₂" />
                </p>
                <p className="mt-1 text-sm text-verde-profundo/60">Proyectado ({co2.metodologia})</p>
              </div>
            )}
            {!!co2.verificadoTn && (
              <div>
                <p className="text-2xl font-bold tracking-tight text-dorado">
                  <NumeroAnimado valor={co2.verificadoTn} sufijo=" tn CO₂" />
                </p>
                <p className="mt-1 text-sm text-verde-profundo/60">Verificado por Control Union</p>
              </div>
            )}
          </div>
        )}

        <p className="mt-8 text-xs text-verde-profundo/50">
          Datos a {reserva.fechaDato}.
        </p>
      </div>
    </section>
  );
}
