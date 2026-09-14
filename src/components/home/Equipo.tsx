import Image from "next/image";
import { areasDeSoporte, equipo } from "@/data/site";

export default function Equipo() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Quiénes somos</p>
      <h2 className="mt-2 font-bold text-3xl text-verde-profundo sm:text-4xl">
        Un equipo especializado <span className="text-esmeralda italic">a tu disposición.</span>
      </h2>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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
