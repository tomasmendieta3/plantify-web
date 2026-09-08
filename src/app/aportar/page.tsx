import type { Metadata } from "next";
import Image from "next/image";
import FormularioAporte from "@/components/FormularioAporte";
import { aportarHistoria, aportarStorytelling, sectores } from "@/data/site";
import { images } from "@/lib/images";

const IMAGENES_HISTORIA = [images.reserva, images.comunidad, images.fauna, images.heroFondo];

export const metadata: Metadata = {
  title: "Aportar",
  description: "Sumá un aporte a Los Tualdos: cada aporte se convierte en un árbol nativo, plantado y cuidado durante catorce años.",
};

export default async function AportarPage({ searchParams }: PageProps<"/aportar">) {
  const params = await searchParams;
  const sectorParam = params?.sector;
  const slug = Array.isArray(sectorParam) ? sectorParam[0] : sectorParam;
  const sector = slug ? sectores.find((s) => s.slug === slug) : undefined;
  const linkRoto = !!slug && !sector;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl text-verde-profundo sm:text-5xl">Aportar</h1>

            {sector ? (
              <p className="mt-4 text-lg text-verde-profundo/75">
                Tu aporte suma directo al sector de{" "}
                <strong className="text-verde-profundo">{sector.empresa}</strong>, {sector.hectareas}{" "}
                hectáreas en Los Tualdos.
              </p>
            ) : linkRoto ? (
              <p className="mt-4 text-lg text-verde-profundo/75">
                No encontramos ese sector. Probá con el link que te compartieron o escribinos y te
                ayudamos a encontrarlo.
              </p>
            ) : (
              <p className="mt-4 text-lg text-verde-profundo/75">{aportarStorytelling.porQue}</p>
            )}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.aportar.src}
              alt={images.aportar.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="space-y-10">
          {aportarHistoria.map((item, i) => {
            const imagen = IMAGENES_HISTORIA[i % IMAGENES_HISTORIA.length];
            const imagenDerecha = i % 2 === 1;
            return (
              <div
                key={item.pregunta}
                className={`flex items-center gap-5 ${imagenDerecha ? "flex-row-reverse" : ""}`}
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-verde-profundo">{item.pregunta}</p>
                  <p className="mt-2 leading-relaxed text-verde-profundo/75">{item.respuesta}</p>
                </div>
              </div>
            );
          })}
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
            <div className="order-1 lg:order-2">
              <h2 className="font-bold text-2xl text-verde-profundo">Qué hacemos con tu aporte</h2>
              <div className="mt-6 space-y-5">
                {aportarStorytelling.pasos.map((paso, i) => (
                  <div key={paso.titulo} className="flex items-start gap-4">
                    <span className="mt-0.5 font-bold text-esmeralda">{i + 1}</span>
                    <div>
                      <p className="font-medium text-verde-profundo">{paso.titulo}</p>
                      <p className="mt-0.5 text-sm text-verde-profundo/70">{paso.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="rounded-xl border border-verde-profundo/10 bg-card/40 p-5 text-sm text-verde-profundo/70">
          <p className="font-medium text-verde-profundo">Qué recibís</p>
          <p className="mt-1">
            Un comprobante de tu aporte y acceso a las fotos y novedades del sector al que sumaste.
          </p>
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
