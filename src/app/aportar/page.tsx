import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Heart, Leaf, ShieldCheck, Sprout } from "lucide-react";
import FormularioAporte from "@/components/FormularioAporte";
import CaminoAporte from "@/components/CaminoAporte";
import { aportarHistoria, aportarStorytelling, sectores } from "@/data/site";
import { images } from "@/lib/images";

const LOGROS_APORTE = [
  { icono: Sprout, titulo: "Más bosque nativo", texto: "Suma a la plantación de nuevos árboles en Los Tualdos." },
  { icono: ShieldCheck, titulo: "Cuidado de la reserva", texto: "Financia el mantenimiento y la custodia de la reserva." },
  { icono: Leaf, titulo: "Captura de CO₂", texto: "Cada árbol captura cerca de 0,9 t de CO₂ por año." },
  { icono: Camera, titulo: "Seguimiento real", texto: "Monitoreo, auditoría de Control Union y novedades de la reserva." },
];

const IMAGENES_HISTORIA = [images.reserva, images.comunidad, images.fauna, images.heroFondo];

export const metadata: Metadata = {
  title: "Aportar",
  description: "Sumá un aporte a Los Tualdos: tu aporte desarrolla la reserva, con plantación, cuidado y monitoreo.",
};

export default async function AportarPage({ searchParams }: PageProps<"/aportar">) {
  const params = await searchParams;
  const sectorParam = params?.sector;
  const slug = Array.isArray(sectorParam) ? sectorParam[0] : sectorParam;
  const sector = slug ? sectores.find((s) => s.slug === slug) : undefined;
  const linkRoto = !!slug && !sector;

  return (
    <div className="relative isolate">
      <CaminoAporte />

      <section className="relative overflow-hidden bg-crema">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 sm:pt-14 sm:pb-10">
          <div
            id="hero-aportar"
            className="relative h-[calc(100dvh-114px)] w-full overflow-hidden rounded-2xl sm:aspect-[16/9] sm:h-auto"
          >
            <video
              src="/reserva/aportar-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 flex items-center justify-center p-6 text-center sm:p-10">
              <div className="max-w-xl">
                <h1 className="text-5xl font-extrabold text-white leading-[1.7] sm:text-6xl sm:leading-[1.7]">
                  <span className="resaltado resaltado-fino">¿Plantamos tu árbol?</span>
                </h1>

                {sector ? (
                  <p className="mt-4 text-lg leading-[1.75] text-white/90">
                    <span className="resaltado">
                      Tu aporte suma directo al sector de{" "}
                      <strong className="text-white">{sector.empresa}</strong>, {sector.hectareas}{" "}
                      hectáreas en Los Tualdos.
                    </span>
                  </p>
                ) : linkRoto ? (
                  <p className="mt-4 text-lg leading-[1.75] text-white/90">
                    <span className="resaltado">
                      No encontramos ese sector. Probá con el link que te compartieron o escribinos y te
                      ayudamos a encontrarlo.
                    </span>
                  </p>
                ) : (
                  <p className="mt-4 text-lg leading-[1.75] text-white/90">
                    <span className="resaltado">
                      {aportarStorytelling.porQue}{" "}
                      <strong className="font-bold text-white">{aportarStorytelling.porQueDestacado}</strong>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <h2 className="text-center text-3xl font-bold text-verde-profundo sm:text-4xl">
          Este es el recorrido de <span className="text-esmeralda">TU</span> aporte
        </h2>

        <div className="relative mt-10">
          <div className="relative space-y-10">
            {aportarHistoria.map((item, i) => {
              const imagen = IMAGENES_HISTORIA[i % IMAGENES_HISTORIA.length];
              const imagenDerecha = i % 2 === 1;
              return (
                <div
                  key={item.pregunta}
                  className={`flex items-center gap-8 sm:w-[46%] ${
                    imagenDerecha ? "flex-row-reverse sm:ml-auto" : "sm:mr-auto"
                  }`}
                >
                  <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-esmeralda sm:h-44 sm:w-44">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                    <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-crema bg-esmeralda text-xs font-bold text-verde-profundo">
                      {i + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl font-bold text-verde-profundo">{item.pregunta}</p>
                    <p className="mt-2 leading-relaxed text-verde-profundo/75">{item.respuesta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
              <Image
                src={images.plantacion.src}
                alt={images.plantacion.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 flex items-center justify-center text-center lg:order-2">
              <p className="text-2xl leading-loose font-bold">
                <span className="box-decoration-clone bg-verde-profundo px-2 py-1 text-white">
                  Con tu aporte, podemos dar un paso fundamental para poder impulsar el
                  crecimiento de la reserva. Vas a ser parte del cambio, con muy poquito.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="relative mx-auto flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-2xl bg-verde-profundo p-10 text-center">
          <div className="pointer-events-none absolute inset-5 rounded-xl border border-white/50" />
          <Heart className="h-12 w-12 text-esmeralda" fill="currentColor" />
          <p className="mt-5 font-bold text-3xl text-white">Qué recibís</p>
          <p className="mt-3 text-white/85">
            Un comprobante de tu aporte y acceso a las fotos y novedades de la reserva.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-verde-profundo/10 bg-card/40 p-8 text-center sm:p-10">
          <p className="font-bold text-2xl text-verde-profundo">Lo que logra tu aporte</p>
          <ul className="mt-8 grid gap-6 text-left sm:grid-cols-2">
            {LOGROS_APORTE.map(({ icono: Icono, titulo, texto }) => (
              <li key={titulo} className="flex items-start gap-3">
                <Icono className="mt-0.5 shrink-0 text-esmeralda" size={24} strokeWidth={1.75} />
                <div>
                  <p className="font-medium text-verde-profundo">{titulo}</p>
                  <p className="mt-1 text-sm text-verde-profundo/70">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#monto-aporte"
            className="mt-8 inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
          >
            Quiero aportar
          </a>
        </div>

        <div className="mt-10">
          <FormularioAporte
            sectorSlug={sector?.slug ?? "general"}
            sectorNombre={sector?.empresa ?? "Los Tualdos"}
          />
        </div>
      </section>
    </div>
  );
}
