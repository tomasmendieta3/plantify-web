import Image from "next/image";
import Link from "next/link";
import { empresasAliadas } from "@/data/site";

// Variantes en blanco sobre transparente para logos con fondo opaco, así todos
// pueden ir en blanco sobre el fondo oscuro.
const LOGOS_BLANCOS: Record<string, string> = {
  "/logos-empresas/padilla-serrano.png": "/logos-empresas/padilla-serrano-white.png",
  "/logos-empresas/entre-rios-crushing.jpg": "/logos-empresas/entre-rios-crushing-white.png",
};

export default function AliadosEmpresas() {
  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/que-hacemos-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/que-hacemos.mp4" type="video/mp4" />
      </video>
      {/* velo oscuro casi total: el video queda de textura y el contenido va en blanco */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-verde-profundo/90" />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-[340px_1fr] lg:items-stretch">
        <div>
          <h2 className="font-black text-3xl leading-tight text-white sm:text-4xl">
            ¿Qué hacemos?
          </h2>
          <p className="mt-4 text-white/75">
            Ayudamos a empresas a convertir su inversión ambiental en un proyecto que pueden
            mostrar y respaldar.
          </p>
          <p className="mt-4 text-white/75">
            Financiamos junto a ellas sectores de forestación y conservación en Los Tualdos
            con seguimiento satelital, auditorías y reportes sobre su evolución,
            superficie y captura de carbono.
          </p>
          <p className="mt-4 font-bold text-white">
            La empresa sabe dónde está su aporte, qué está financiando y qué resultados puede
            documentar.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {empresasAliadas.map((empresa) => (
              <div key={empresa.nombre} className="relative h-16">
                <Image
                  src={LOGOS_BLANCOS[empresa.logo] ?? empresa.logo}
                  alt={empresa.nombre}
                  fill
                  sizes="200px"
                  className="object-contain object-center brightness-0 invert"
                />
              </div>
            ))}
          </div>

          <Link
            href="/empresas"
            className="mt-auto block rounded-lg bg-white px-6 py-5 text-center text-lg font-bold text-verde-profundo transition-colors hover:bg-white/90"
          >
            Sumá tu empresa ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
