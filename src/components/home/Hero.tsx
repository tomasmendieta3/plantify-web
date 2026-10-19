import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] flex min-h-screen items-center overflow-hidden bg-verde-profundo">
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-[88px] pb-4 sm:px-6 lg:px-8 lg:pt-28 lg:pb-12">
        {/* mobile: box redondeado con la foto de fondo; desktop: texto a la izquierda y foto en box a la derecha */}
        <div className="relative grid min-h-[calc(100svh-104px)] items-center gap-10 overflow-hidden rounded-3xl px-6 py-14 lg:min-h-0 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16 lg:overflow-visible lg:rounded-none lg:p-0">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[clamp(1.75rem,3.1vw,3rem)]">
              <span className="sm:whitespace-nowrap">Desarrollamos reservas forestales</span>
              <br className="hidden sm:block" />{" "}
              <span className="sm:whitespace-nowrap">nativas a la medida de tu empresa.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-white/90 lg:mx-0">
              Creamos reservas de forestación y conservación vinculadas a cada empresa, con
              seguimiento, auditorías y reportes que documentan su evolución.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <Link
                href="/contacto"
                className="rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
              >
                Sumá tu empresa hoy
              </Link>
              <Link href="#como-trabajamos" className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white">
                o mirá cómo funciona
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 lg:relative lg:inset-auto lg:aspect-[4/5] lg:max-h-[75vh] lg:w-full lg:overflow-hidden lg:rounded-3xl">
            <Image
              src={images.heroPlantando.src}
              alt={images.heroPlantando.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_60%]"
            />
            <div className="absolute inset-0 bg-verde-profundo/75 lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
