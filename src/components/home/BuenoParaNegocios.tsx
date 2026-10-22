import Image from "next/image";
import Link from "next/link";
import NumeroAnimado from "@/components/NumeroAnimado";

export default function BuenoParaNegocios() {
  return (
    <section className="overflow-x-clip bg-crema">
      <div className="mx-auto max-w-6xl px-5 py-36 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div data-aparecer-grupo className="flex flex-col justify-center gap-6 lg:pr-10">
            <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
              Bueno para tu empresa, bueno para el planeta.
            </h2>
            <p className="text-verde-profundo/70">
              El compromiso ambiental impulsa el desempeño empresarial.
            </p>
            <div>
              <p className="font-bold text-verde-profundo">
                El <NumeroAnimado valor={73} /> % de los consumidores prefiere comprarle a marcas con compromiso ambiental,
                y el <NumeroAnimado valor={64} /> % la ubica entre sus tres principales criterios de compra.
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

          {/* Señalador del sello: el círculo va sobre el sello «Somos parte de Plantify» de la caja
              (46,6 % / 66,1 % de la foto, ~24 % del ancho de la foto). La foto usa ese mismo punto
              como object-position, así cuando object-cover recorta (desde lg) el sello cae siempre
              en 46,6 % / 66,1 % del recuadro y el círculo no se corre. Debajo de lg la foto va 3:4
              entera y el círculo se mide en cqw; desde lg el alto es fijo (820px), la foto se
              escala por alto y el sello mide ~148px, así que el círculo va fijo en 160px. Desde 1440px el box de cristal sale del recuadro
              por la derecha y se une con una línea horizontal; en pantallas más chicas va debajo
              de la foto, con línea vertical. */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div data-deslizar className="@container relative aspect-[3/4] lg:aspect-auto lg:min-h-[820px]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <Image
                  src="/home/sello-plantify-cereal-detalle.webp"
                  alt="Caja de cereal con el sello «Somos parte de Plantify»"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[46.6%_66.1%]"
                />
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <span className="absolute left-[46.6%] top-[66.1%] size-[27cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_4px_rgba(255,255,255,0.25)] lg:size-40" />
                {/* línea vertical hasta el box de abajo (pantallas chicas) */}
                <span className="absolute bottom-0 left-[46.6%] top-[calc(66.1%+13.5cqw)] w-0.5 -translate-x-1/2 bg-white lg:top-[calc(66.1%+5rem)] min-[1440px]:hidden" />
                <span className="absolute left-[46.6%] top-full h-6 w-0.5 -translate-x-1/2 bg-verde-profundo min-[1440px]:hidden" />
                {/* línea horizontal hasta el box de la derecha (desde 1440px) */}
                <span className="absolute left-[calc(46.6%+5rem)] right-[8rem] top-[66.1%] hidden h-0.5 -translate-y-1/2 bg-white min-[1440px]:block" />
              </div>
            </div>

            <div data-deslizar className="relative mt-6 rounded-3xl border border-white/70 bg-white/55 p-6 text-verde-profundo shadow-[0_8px_32px_rgba(14,53,40,0.18)] backdrop-blur-xl min-[1440px]:absolute min-[1440px]:left-[calc(100%-8rem)] min-[1440px]:top-[66.1%] min-[1440px]:mt-0 min-[1440px]:w-72 min-[1440px]:-translate-y-1/2">
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
