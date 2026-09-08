import Image from "next/image";
import Link from "next/link";
import { certificaciones } from "@/data/site";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] flex min-h-screen items-end overflow-hidden">
      <Image
        src={images.heroBosque.src}
        alt={images.heroBosque.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative w-full px-4 pt-24 pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="max-w-5xl">
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Desarrollamos tu reserva forestal.
            <br />
            Cuidando lo que más importa.
          </h1>
          <p className="mt-5 max-w-md text-lg font-semibold text-white/90">
            No es una donación genérica: es un sector forestal a tu nombre, con seguimiento
            auditado durante catorce años. Compensación de carbono con trazabilidad real, lista
            para tu reporte de sostenibilidad.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contacto"
              className="rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
            >
              Pedir una propuesta
            </Link>
            <Link href="#como-trabajamos" className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white">
              o mirá cómo funciona
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/20 pt-6">
            {certificaciones.map((cert) => (
              <div key={cert.nombre} className="max-w-[220px]">
                <p className="text-sm font-bold text-dorado">{cert.nombre}</p>
                <p className="mt-0.5 text-xs font-medium leading-relaxed text-white/75">
                  {cert.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
