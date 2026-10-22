import Image from "next/image";
import Link from "next/link";
import { Award, Heart } from "lucide-react";
import GestionCalidad from "@/components/GestionCalidad";
import { aportarHistoria, primeraReserva, queEsPlantify } from "@/data/site";
import { images } from "@/lib/images";

const IMAGENES_HISTORIA = [images.reserva, images.comunidad, images.fauna, images.heroFondo];

// Bloques informativos de /aportar (qué es Plantify, Los Tualdos, empresas, calidad,
// recorrido del aporte y qué recibís). `oscuro` los adapta a fondo verde profundo,
// para las landings de empresa. `reserva` reemplaza el bloque de Los Tualdos por la
// reserva de la empresa (sin el botón a Los Tualdos).
export default function AportarInfo({
  oscuro = false,
  reserva,
}: {
  oscuro?: boolean;
  reserva?: { titulo: string; texto: string };
}) {
  return (
    <div className={oscuro ? "bg-verde-profundo" : ""}>
      <section className={oscuro ? "" : "bg-card/40"}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div data-aparecer-grupo className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
              <Image
                src={images.plantacion.src}
                alt={images.plantacion.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <div className="order-1 flex items-center justify-center text-center lg:order-2">
              <div>
                <h2 className={`text-3xl font-bold sm:text-4xl ${oscuro ? "text-crema" : "text-verde-profundo"}`}>{queEsPlantify.titulo}</h2>
                <p className="mt-5 text-2xl leading-loose font-bold">
                  <span
                    className={`box-decoration-clone px-2 py-1 ${
                      oscuro
                        ? "rounded-md border border-white/25 bg-white/15 text-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                        : "bg-verde-profundo text-white"
                    }`}
                  >
                    {queEsPlantify.texto}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div data-aparecer-grupo className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className={`text-3xl font-bold sm:text-4xl ${oscuro ? "text-crema" : "text-verde-profundo"}`}>{reserva?.titulo ?? primeraReserva.titulo}</h2>
            <p className={`mt-4 leading-relaxed ${oscuro ? "text-crema/75" : "text-verde-profundo/75"}`}>{reserva?.texto ?? primeraReserva.texto}</p>
            {!reserva && (
              <a
                href={primeraReserva.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
              >
                Conocé Los Tualdos
              </a>
            )}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.heroFondo.src}
              alt={images.heroFondo.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* el bloque de Empresas no va en las landings de empresa */}
      {!oscuro && (
        <section className="bg-verde-profundo text-crema">
          <div data-aparecer-grupo className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <p className="font-bold text-3xl sm:text-4xl">Empresas</p>
            <p className="mt-4 text-crema/75">
              Ayudamos a las empresas y a sus comunidades a plantar árboles y compensar sus actividades.
            </p>
            <Link
              href="/empresas"
              className="mt-8 inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
            >
              Conocé los planes para empresas
            </Link>
          </div>
        </section>
      )}

      <GestionCalidad oscuro={oscuro} />

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <h2 data-aparecer className={`text-center text-3xl font-bold sm:text-4xl ${oscuro ? "text-crema" : "text-verde-profundo"}`}>
          Este es el recorrido de <span className="text-esmeralda">TU</span> aporte
        </h2>

        <div className="relative mt-10">
          <div data-aparecer-grupo className="relative space-y-10">
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
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-crema bg-esmeralda text-xs font-bold text-verde-profundo">
                      {i + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-xl font-bold ${oscuro ? "text-crema" : "text-verde-profundo"}`}>{item.pregunta}</p>
                    <p className={`mt-2 leading-relaxed ${oscuro ? "text-crema/75" : "text-verde-profundo/75"}`}>{item.respuesta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        {/* en la landing (fondo oscuro) el box va en blanco y con un certificado en vez del corazón */}
        <div
          data-aparecer
          className={`relative mx-auto flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-2xl p-10 text-center ${
            oscuro ? "bg-white" : "bg-verde-profundo"
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-5 rounded-xl border ${
              oscuro ? "border-verde-profundo/20" : "border-white/50"
            }`}
          />
          {oscuro ? (
            <Award className="h-12 w-12 text-esmeralda" strokeWidth={1.75} />
          ) : (
            <Heart className="h-12 w-12 text-esmeralda" fill="currentColor" />
          )}
          <p className={`mt-5 font-bold text-3xl ${oscuro ? "text-verde-profundo" : "text-white"}`}>Qué recibís</p>
          <p className={`mt-3 ${oscuro ? "text-verde-profundo/75" : "text-white/85"}`}>
            Un comprobante de tu aporte y acceso a las fotos y novedades de la reserva.
          </p>
        </div>
      </section>
    </div>
  );
}
