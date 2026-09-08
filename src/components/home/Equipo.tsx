import { equipo } from "@/data/site";

export default function Equipo() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">
        Quiénes estamos atrás
      </h2>
      <p className="mt-3 max-w-lg text-verde-profundo/70">
        Trabajamos desde Los Tualdos, en Paranacito. Este es el equipo que planta, mide y audita
        tu sector.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {equipo.map((persona) => (
          <div key={persona.nombre}>
            <div
              className="aspect-square w-full rounded-xl bg-card"
              aria-hidden
            />
            <p className="mt-3 font-medium text-verde-profundo">{persona.nombre}</p>
            <p className="text-sm text-verde-profundo/60">{persona.rol}</p>
            <p className="mt-1 text-sm text-verde-profundo/70">{persona.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
