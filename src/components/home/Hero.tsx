import Image from "next/image";
import Link from "next/link";
import { certificaciones } from "@/data/site";
import { images } from "@/lib/images";

const carrusel = [
  images.heroBosque,
  images.plantacion,
  images.reserva,
  images.heroFondo,
];

export default function Hero() {
  const tira = [...carrusel, ...carrusel];

  return (
    <section className="relative -mt-[72px] flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-slide-track flex h-full w-max">
          {tira.map((img, i) => (
            <div key={`${img.src}-${i}`} className="relative h-full w-screen shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative w-full px-4 pt-24 pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="max-w-5xl">
          <div className="flex flex-wrap gap-6 lg:translate-x-20 lg:-translate-y-20">
            {certificaciones.map((cert) => {
              const logo = images.logoControlUnion;
              return (
                <div key={cert.nombre} className="flex max-w-[260px] items-center gap-3">
                  <div className="relative h-20 w-20 shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{cert.nombre}</p>
                    <p className="mt-0.5 text-xs font-medium leading-relaxed text-white/75">
                      {cert.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:translate-x-20 lg:-translate-y-20">
            <h1 className="mt-8 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Desarrollamos tu reserva forestal.
              <br />
              Cuidando lo que más importa.
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold text-white/90">
              Tu inversión ambiental tiene ubicación, superficie y seguimiento. Asignamos un sector
              forestal a tu empresa y acompañamos su evolución durante 14 años, registrando el
              desarrollo de la plantación y su captura de carbono.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
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
        </div>
      </div>
    </section>
  );
}
