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

      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-stretch lg:gap-16">
        <div>
          <h2 className="font-black text-3xl leading-tight text-white sm:text-4xl">
            ¿Qué hacemos?
          </h2>
          <p className="mt-6 text-base text-white lg:text-lg">
            Creamos reservas de forestación y conservación vinculadas a cada empresa, con
            seguimiento, auditorías y reportes que documentan su evolución, la superficie
            conservada o forestada y la captura de carbono.
          </p>
          <p className="mt-6 text-base font-bold text-white lg:text-lg">
            Además, desarrollamos la comunicación y el marketing de cada reserva para que la
            empresa pueda mostrar dónde está su aporte, qué acciones financia y qué resultados
            puede respaldar con información verificable.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-12 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4 lg:gap-x-14 lg:gap-y-16">
            {empresasAliadas.map((empresa) => (
              <div key={empresa.nombre} className="relative h-14 lg:h-20">
                <Image
                  src={LOGOS_BLANCOS[empresa.logo] ?? empresa.logo}
                  alt={empresa.nombre}
                  fill
                  sizes="300px"
                  className="object-contain object-center brightness-0 invert"
                />
              </div>
            ))}
          </div>

          <Link
            href="/empresas"
            className="mt-auto block rounded-lg bg-white px-6 py-4 text-center text-base font-bold lg:text-lg text-verde-profundo transition-colors hover:bg-white/90"
          >
            Sumá tu empresa ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
