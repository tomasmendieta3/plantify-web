import Image from "next/image";
import { gestionCalidad } from "@/data/site";

export default function GestionCalidad({ oscuro = false }: { oscuro?: boolean }) {
  return (
        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <h2 data-aparecer className={`text-center text-3xl font-bold sm:text-4xl ${oscuro ? "text-crema" : "text-verde-profundo"}`}>
            {gestionCalidad.titulo}
          </h2>
          <div data-aparecer-grupo className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={`rounded-2xl border border-verde-profundo/10 p-8 ${oscuro ? "bg-crema" : "bg-card/40"}`}>
              <div className="relative h-12 w-40">
                <Image src="/certificaciones/control-union.webp" alt="Control Union" fill sizes="160px" className="object-contain object-left" />
              </div>
              <p className="mt-5 leading-relaxed text-verde-profundo/80">{gestionCalidad.texto}</p>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-dorado/50 bg-crema p-8">
              <div className="relative h-12 w-40">
                <Image src="/certificaciones/gold-standard.webp" alt="Gold Standard" fill sizes="160px" className="object-contain object-left" />
              </div>
              <p className="mt-5 font-bold text-verde-profundo">{gestionCalidad.goldStandard.titulo}</p>
              <p className="mt-1 leading-relaxed text-verde-profundo/80">{gestionCalidad.goldStandard.texto}</p>
            </div>
          </div>
        </section>
  );
}
