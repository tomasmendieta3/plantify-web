import Image from "next/image";
import Link from "next/link";

export default function BuenoParaNegocios() {
  return (
    <section className="bg-crema">
      <div className="mx-auto max-w-6xl px-5 py-36 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center gap-6 lg:pr-10">
            <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
              Bueno para tu empresa, bueno para el planeta.
            </h2>
            <p className="text-verde-profundo/70">
              El compromiso ambiental impulsa el desempeño empresarial.
            </p>
            <div>
              <p className="font-bold text-verde-profundo">
                El 73 % de los consumidores prefiere comprarle a marcas con compromiso ambiental,
                y el 64 % la ubica entre sus tres principales criterios de compra.
              </p>
              <p className="mt-2 text-sm text-verde-profundo/60">
                Simon-Kucher, Global Sustainability Study 2024
              </p>
            </div>
            <Link
              href="/empresas"
              className="inline-block w-fit rounded-full bg-verde-profundo px-6 py-3 text-sm font-bold text-crema transition-colors hover:bg-verde-profundo/90"
            >
              Conocé cómo sumar tu empresa
            </Link>
          </div>

          {/* Señalador del sello: el círculo va sobre el sello de la etiqueta (50,4 % / 85,1 % de
              la foto). Desde 1440px el box de cristal sale del recuadro por la derecha y se une con
              una línea horizontal; en pantallas más chicas va debajo de la foto, con línea vertical.
              Debajo de lg la foto mantiene su proporción 3:4 para que el círculo no se corra. */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[820px]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <Image
                  src="/home/sello-plantify-producto.webp"
                  alt="Detergente con el sello «Somos parte de Plantify» en la etiqueta"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <span className="absolute left-[50.4%] top-[85.1%] size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_4px_rgba(255,255,255,0.25)] lg:size-24" />
                {/* línea vertical hasta el box de abajo (pantallas chicas) */}
                <span className="absolute bottom-0 left-[50.4%] top-[calc(85.1%+2rem)] w-0.5 -translate-x-1/2 bg-white lg:top-[calc(85.1%+3rem)] min-[1440px]:hidden" />
                <span className="absolute left-[50.4%] top-full h-6 w-0.5 -translate-x-1/2 bg-verde-profundo min-[1440px]:hidden" />
                {/* línea horizontal hasta el box de la derecha (desde 1440px) */}
                <span className="absolute left-[calc(50.4%+3rem)] right-[8rem] top-[85.1%] hidden h-0.5 -translate-y-1/2 bg-white min-[1440px]:block" />
              </div>
            </div>

            <div className="relative mt-6 rounded-3xl border border-white/70 bg-white/55 p-6 text-verde-profundo shadow-[0_8px_32px_rgba(14,53,40,0.18)] backdrop-blur-xl min-[1440px]:absolute min-[1440px]:left-[calc(100%-8rem)] min-[1440px]:top-[85.1%] min-[1440px]:mt-0 min-[1440px]:w-72 min-[1440px]:-translate-y-1/2">
              <p className="font-black text-2xl leading-none">Sello</p>
              <Image src="/logo.svg" alt="Plantify" width={686} height={203} className="mt-2 h-8 w-auto" />
              <p className="mt-4 text-sm font-semibold leading-snug">
                Sumando tu marca a Plantify, lanzamos una colaboración para que puedas comunicar a
                tus clientes y consumidores que tu marca es parte del cambio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
