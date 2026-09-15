import Image from "next/image";
import Link from "next/link";
import { empresasAliadas } from "@/data/site";

export default function AliadosEmpresas() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:items-stretch">
        <div>
          <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
            ¿Qué hacemos?
          </h2>
          <p className="mt-4 text-verde-profundo/70">
            Ayudamos a empresas a convertir su inversión ambiental en un proyecto que pueden
            mostrar y respaldar.
          </p>
          <p className="mt-4 text-verde-profundo/70">
            Financiamos junto a ellas sectores de forestación y conservación en Los Tualdos
            durante 14 años, con seguimiento satelital, auditorías y reportes sobre su evolución,
            superficie y captura de carbono.
          </p>
          <p className="mt-4 font-bold text-verde-profundo">
            La empresa sabe dónde está su aporte, qué está financiando y qué resultados puede
            documentar.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {empresasAliadas.map((empresa) => (
              <div key={empresa.nombre} className="relative h-16">
                <Image
                  src={empresa.logo}
                  alt={empresa.nombre}
                  fill
                  sizes="200px"
                  className="object-contain object-center grayscale"
                />
              </div>
            ))}
          </div>

          <Link
            href="/empresas"
            className="mt-auto block rounded-lg bg-verde-profundo px-6 py-5 text-center text-lg font-bold text-crema transition-colors hover:bg-verde-profundo/90"
          >
            Sumá tu empresa ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
