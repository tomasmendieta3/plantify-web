import type { Metadata } from "next";
import Image from "next/image";
import MapaSectores from "@/components/mapa/MapaSectores";
import { reserva, especies, calendarioPlantacion, comoVisitar, certificaciones } from "@/data/site";
import { formatNumero } from "@/lib/format";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "La reserva Los Tualdos",
  description:
    "Los Tualdos es la reserva forestal certificada de Plantify en Paranacito, Delta del Paraná: geografía, especies nativas, calendario de plantación y cómo visitarla.",
};

export default function ReservaPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8">
        <h1 className="text-4xl text-verde-profundo sm:text-5xl">{reserva.nombre}</h1>
        <p className="mt-4 max-w-2xl text-lg text-verde-profundo/75">
          Una reserva forestal certificada en {reserva.localidad}, {reserva.provincia}. Ahí
          plantamos, cuidamos y medimos el sector de cada empresa durante catorce años.
        </p>
      </section>

      <div className="relative h-72 w-full sm:h-96">
        <Image
          src={images.reserva.src}
          alt={images.reserva.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold tracking-tight text-verde-profundo">
              {formatNumero(reserva.hectareas)}
            </p>
            <p className="mt-1 text-sm text-verde-profundo/70">hectáreas bajo custodia</p>
          </div>
          <div>
            <p className="text-3xl font-bold tracking-tight text-verde-profundo">
              +{formatNumero(reserva.arboles)}
            </p>
            <p className="mt-1 text-sm text-verde-profundo/70">árboles plantados</p>
          </div>
          <div>
            <p className="text-3xl font-bold tracking-tight text-verde-profundo">
              {reserva.aniosCustodia}
            </p>
            <p className="mt-1 text-sm text-verde-profundo/70">años de custodia por sector</p>
          </div>
        </div>
      </section>

      <section id="mapa" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-3xl text-verde-profundo">Mapa de sectores</h2>
          <p className="mt-3 max-w-lg text-verde-profundo/70">
            Así está distribuida hoy la reserva: los sectores ya asignados a empresas, los que
            estamos plantando esta temporada y los que siguen libres.
          </p>
          <div className="mt-8 rounded-2xl border border-verde-profundo/10 bg-crema p-6 sm:p-8">
            <MapaSectores />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-3xl text-verde-profundo">Especies</h2>
        <p className="mt-3 max-w-lg text-verde-profundo/70">
          Priorizamos especies nativas del Delta, adaptadas al régimen de crecientes de la zona.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {especies.map((especie) => (
            <div key={especie.nombre} className="rounded-xl border border-verde-profundo/10 p-5">
              <p className="font-medium text-verde-profundo">{especie.nombre}</p>
              <p className="text-sm italic text-verde-profundo/50">{especie.nombreCientifico}</p>
              <p className="mt-2 text-sm text-verde-profundo/70">{especie.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:grid-cols-2">
          <div>
            <h2 className="font-bold text-2xl text-verde-profundo">
              Calendario de plantación
            </h2>
            <p className="mt-3 text-sm font-medium text-verde-profundo">
              {calendarioPlantacion.temporadas}
            </p>
            <p className="mt-2 text-sm text-verde-profundo/70">{calendarioPlantacion.descripcion}</p>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-verde-profundo">Cómo la monitoreamos</h2>
            <p className="mt-3 text-sm text-verde-profundo/70">
              {certificaciones.find((c) => c.nombre === "Control Union")?.detalle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo">Cómo visitarla</h2>
        <p className="mt-3 max-w-lg text-sm text-verde-profundo/70">{comoVisitar.descripcion}</p>
        <p className="mt-2 text-sm text-verde-profundo/50">{comoVisitar.duracion}</p>
      </section>
    </div>
  );
}
