import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function JuntosMasFuertes() {
  return (
    <section className="bg-crema">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl">
            <Image
              src={images.teamBuilding.src}
              alt={images.teamBuilding.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
              Juntos somos más fuertes.
            </h2>
            <p className="font-bold text-verde-profundo">
              Sumarte a Plantify es una forma simple de multiplicar tu impacto ambiental, sin
              necesidad de armar un equipo propio ni gestionar terrenos, plantines o
              certificaciones.
            </p>
            <p className="font-bold text-verde-profundo">
              Trabajamos con vos para armar tu alianza a medida, combinando aportes monetarios,
              un sector forestal propio y programas para tu equipo.
            </p>
            <p className="text-verde-profundo/70">
              Impulsá tu impacto ambiental y fortalecé tu credibilidad con seguimiento satelital,
              auditorías y certificaciones de Control Union y Gold Standard.{" "}
              <span className="font-bold text-verde-profundo">
                Hablemos de cómo la alianza puede beneficiarte a vos y a Los Tualdos.
              </span>
            </p>
            <Link
              href="/contacto"
              className="block w-fit rounded-lg bg-verde-profundo px-6 py-5 text-lg font-bold text-crema transition-colors hover:bg-verde-profundo/90"
            >
              Contactá a un especialista en alianzas.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
