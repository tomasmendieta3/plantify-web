import Image from "next/image";
import { areasDeSoporte, equipo } from "@/data/site";

const RADIO = 40;

export default function Equipo() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
        Un equipo especializado a tu disposición.
      </h2>

      {/* Círculo de equipo, con el logo de Plantify en el centro */}
      <div className="relative mx-auto mt-16 mb-16 hidden aspect-square max-w-2xl lg:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-verde-profundo/20">
          <circle
            cx="50"
            cy="50"
            r={RADIO}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          {equipo.map((persona, i) => {
            const angulo = (360 / equipo.length) * i - 90;
            const rad = (angulo * Math.PI) / 180;
            const x = 50 + RADIO * Math.cos(rad);
            const y = 50 + RADIO * Math.sin(rad);
            return (
              <line
                key={persona.nombre}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-verde-profundo p-9">
          <div className="relative h-full w-full">
            <Image src="/logo-icon-blanco.png" alt="Plantify" fill className="object-contain" />
          </div>
        </div>

        {equipo.map((persona, i) => {
          const angulo = (360 / equipo.length) * i - 90;
          const rad = (angulo * Math.PI) / 180;
          const x = RADIO * Math.cos(rad);
          const y = RADIO * Math.sin(rad);
          return (
            <div
              key={persona.nombre}
              className="absolute flex w-36 -translate-x-1/2 flex-col items-center gap-2 text-center"
              style={{ left: `calc(50% + ${x}%)`, top: `calc(50% + ${y}% - 3rem)` }}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-crema ring-2 ring-esmeralda/60">
                <Image
                  src={persona.foto}
                  alt={persona.nombre}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="rounded-md bg-crema px-2 py-1">
                <p className="font-medium text-verde-profundo">{persona.nombre}</p>
                <p className="text-xs text-verde-profundo/60">{persona.rol}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grilla simple para pantallas chicas, donde el círculo no entra */}
      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:hidden">
        {equipo.map((persona) => (
          <div key={persona.nombre} className="text-center">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-esmeralda/60 sm:h-32 sm:w-32">
              <Image
                src={persona.foto}
                alt={persona.nombre}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-medium text-verde-profundo">{persona.nombre}</p>
            <p className="mt-1 text-sm text-verde-profundo/60">{persona.rol}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-verde-profundo/10 pt-8">
        <p className="text-center text-sm font-bold tracking-wide text-esmeralda uppercase">
          Áreas de soporte
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {areasDeSoporte.map((soporte) => (
            <div
              key={soporte.area}
              className="rounded-full bg-card/60 px-6 py-3 text-center text-sm text-verde-profundo"
            >
              <span className="font-medium">{soporte.area}</span>{" "}
              <span className="text-verde-profundo/60">{soporte.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
