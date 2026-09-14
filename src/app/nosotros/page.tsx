import type { Metadata } from "next";
import Image from "next/image";
import Equipo from "@/components/home/Equipo";
import { certificaciones, co2, mision, reserva } from "@/data/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes somos en Plantify, cómo certificamos Los Tualdos con Control Union y Gold Standard, y cómo medimos el CO₂ con metodología alométrica IPCC.",
};

export default function NosotrosPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8">
        <h1 className="text-4xl text-verde-profundo sm:text-5xl">Nosotros</h1>
        <p className="mt-4 max-w-2xl text-lg text-verde-profundo/75">
          Somos el equipo que planta, cuida y audita Los Tualdos, en {reserva.localidad}.
        </p>
      </section>

      <div className="relative h-72 w-full sm:h-96">
        <Image
          src={images.comunidad.src}
          alt={images.comunidad.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-xl leading-relaxed text-verde-profundo/85">{mision.frase}</p>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-2xl text-verde-profundo">Objetivo general</h2>
          <p className="mt-3 max-w-2xl text-verde-profundo/75">{mision.objetivoGeneral}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {mision.objetivosParticulares.map((objetivo) => (
              <div key={objetivo.titulo}>
                <p className="font-medium text-verde-profundo">{objetivo.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-verde-profundo/70">{objetivo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo">Cómo empezamos</h2>
        <p className="mt-4 text-verde-profundo/75 leading-relaxed">
          Plantify nació para resolver un problema concreto: las empresas quieren compensar y
          reforestar, pero no tienen dónde hacerlo con seriedad ni cómo mostrarlo. Armamos Los
          Tualdos para que cada empresa tenga un sector propio, con seguimiento real durante
          catorce años, no una promesa de árboles que nadie vuelve a ver.
        </p>
      </section>

      <Equipo />

      <section id="certificaciones" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-2xl text-verde-profundo">Certificaciones</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {certificaciones.map((cert) => (
              <div key={cert.nombre}>
                <p className="text-lg font-medium text-dorado">{cert.nombre}</p>
                <p className="mt-1 text-sm text-verde-profundo/60">{cert.descripcion}</p>
                <p className="mt-3 text-sm leading-relaxed text-verde-profundo/75">{cert.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo">
          Cómo medimos el CO₂
        </h2>
        <p className="mt-4 text-verde-profundo/75 leading-relaxed">{co2.metodologia}.</p>
        <p className="mt-3 text-verde-profundo/75 leading-relaxed">
          Siempre distinguimos entre CO₂ <span className="text-verde-profundo/50">proyectado</span> —
          una estimación sobre el crecimiento esperado— y CO₂{" "}
          <span className="text-dorado">verificado</span> — lo que ya pasó por la auditoría anual
          de Control Union. No presentamos una proyección como si fuera un dato verificado.
        </p>
      </section>
    </div>
  );
}
