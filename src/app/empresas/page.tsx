import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Leaf,
  FileCheck2,
  BadgeCheck,
  CheckCircle2,
  Signpost,
  QrCode,
  Share2,
  ImageIcon,
  BarChart3,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import FormularioContacto from "@/components/FormularioContacto";
import HeroVideo from "@/components/empresas/HeroVideo";
import RecorridoPasos from "@/components/empresas/RecorridoPasos";
import GestionCalidad from "@/components/GestionCalidad";
import {
  auditoriaControlUnion,
  capasEmpresa,
  empresasHero,
  empresasMision,
  experienciasEmpresa,
  marketingForestal,
  organizacion,
  pasosReserva,
  planesEmpresa,
  recorridoAportante,
} from "@/data/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Desarrollamos la reserva forestal de tu empresa: mínimo 1 hectárea por año y compromiso mínimo de 15 años. Plan a medida de tu empresa.",
};

const ICONOS_PASO_RESERVA: LucideIcon[] = [Sprout, Leaf, FileCheck2, BadgeCheck];
const ICONOS_MARKETING: LucideIcon[] = [Signpost, QrCode, BadgeCheck, Share2, ImageIcon, BarChart3];
const ICONOS_EXPERIENCIAS: LucideIcon[] = [Sprout, GraduationCap, Users];

export default function EmpresasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-verde-profundo">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-empresas.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* degradé oscuro desde abajo a la izquierda para que el texto se lea, como en la home */}
        <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/30 via-50% to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 sm:px-8 lg:pt-32 lg:pb-28">
          <div>
            <div data-aparecer-grupo>
              <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
                {empresasHero.eyebrow}
              </p>
              <h1 className="mt-2 max-w-2xl font-extrabold text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {empresasHero.titulo}
              </h1>
              <p className="mt-5 max-w-lg text-lg font-medium text-white/90">
                {empresasHero.bajada} <strong className="font-bold">{empresasHero.bajadaDestacada}</strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="#propuesta"
                  className="rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
                >
                  Pedir una propuesta
                </Link>
                <Link
                  href="#capa-01"
                  className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                >
                  o mirá cómo lo hacemos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuatro capas, una sola alianza */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <p data-aparecer className="text-sm font-bold tracking-wide text-esmeralda uppercase">{empresasMision.eyebrow}</p>
        <h2 data-aparecer className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
          {empresasMision.titulo}
        </h2>
        <p data-aparecer className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{empresasMision.bajada}</p>

        <div data-aparecer-grupo className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {capasEmpresa.map((capa, i) => (
            <div
              key={capa.numero}
              className={`group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                i === 0 ? "bg-verde-profundo text-crema" : "bg-card/50 text-verde-profundo"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={images[capa.imagen].src}
                  alt={images[capa.imagen].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-esmeralda italic">{capa.numero}</p>
                <p className="mt-2 font-bold">{capa.titulo}</p>
                <p className={`mt-1 text-sm italic ${i === 0 ? "text-crema/70" : "text-verde-profundo/60"}`}>
                  {capa.bajada}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-crema/85" : "text-verde-profundo/70"}`}>
                  {capa.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capa 01 · La reserva */}
      <section id="capa-01" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <p data-aparecer className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 01 · La reserva</p>
          <h2 data-aparecer className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            De la idea a tu espacio.
          </h2>

          {/* video vertical a la izquierda, los 4 pasos al lado */}
          <div data-aparecer-grupo className="mt-10 grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <HeroVideo src="/reserva/tualdos-hero.mp4" poster="/reserva/tualdos-hero-poster.jpg" />
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {pasosReserva.map((paso, i) => {
                const Icono = ICONOS_PASO_RESERVA[i];
                return (
                  <div
                    key={paso.numero}
                    className="rounded-2xl bg-crema p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Icono className="shrink-0 text-verde-profundo" size={56} strokeWidth={1.5} />
                      <span className="text-6xl font-black text-esmeralda">{paso.numero}</span>
                    </div>
                    <p className="mt-6 text-xl font-bold text-verde-profundo">{paso.titulo}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Especies nativas */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:py-20">
          {/* espacios duros para que "se" e "y a" no queden sueltos al final de una línea */}
          <p data-aparecer className="text-left font-black text-3xl leading-tight text-balance text-verde-profundo sm:text-4xl lg:text-5xl">
            Priorizamos <span className="text-esmeralda">especies nativas</span>: las que
            mejor se&nbsp;adaptan al suelo, al clima y&nbsp;a&nbsp;la fauna de cada región.
          </p>
          {/* plantín y árbol joven (mismas imágenes que la sección de crecimiento del home) */}
          <div data-aparecer-grupo className="flex items-end justify-end gap-4">
            <Image
              src="/home/arboles/arbol-1.webp"
              alt="Plantín nativo"
              width={363}
              height={900}
              sizes="160px"
              className="h-[220px] w-auto sm:h-[280px]"
            />
            <Image
              src="/home/arboles/arbol-2.webp"
              alt="Árbol nativo joven"
              width={577}
              height={900}
              sizes="260px"
              className="h-[300px] w-auto sm:h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Modelo Control Union */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <p data-aparecer className="text-sm font-bold tracking-wide text-esmeralda uppercase">
            Capa 01 · La reserva — certificación Control Union
          </p>
          <h2 data-aparecer className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            {auditoriaControlUnion.titulo}
          </h2>
          <p data-aparecer className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{auditoriaControlUnion.bajada}</p>
        </div>

        <p data-aparecer className="mt-8 text-sm font-bold tracking-wide text-esmeralda uppercase">
          {auditoriaControlUnion.eyebrow}
        </p>
        <div data-aparecer-grupo className="mt-4 grid gap-3 sm:grid-cols-2">
          {auditoriaControlUnion.items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-card/50 px-4 py-3.5">
              <CheckCircle2 className="shrink-0 text-esmeralda" size={20} />
              <p className="font-medium text-verde-profundo">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <GestionCalidad />

      {/* Así viaja tu aporte */}
      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 data-aparecer className="mx-auto max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            {recorridoAportante.titulo}
          </h2>
          <p data-aparecer className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{recorridoAportante.bajada}</p>

          <RecorridoPasos pasos={recorridoAportante.pasos} />
        </div>
      </section>

      {/* Capa 02 · Marketing forestal */}
      <section id="capa-02" className="scroll-mt-24 relative bg-verde-profundo text-crema">
        <div className="pointer-events-none absolute inset-y-0 left-2 hidden w-36 items-center xl:flex 2xl:left-6 2xl:w-44">
          <div className="relative aspect-[2/3] w-full -rotate-6">
            <Image
              src={images.bannerMockup.src}
              alt={images.bannerMockup.alt}
              fill
              sizes="180px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-2 hidden w-36 items-center justify-end xl:flex 2xl:right-6 2xl:w-44">
          <div className="relative aspect-[3/4] w-full rotate-6">
            <Image
              src={images.qrMockup.src}
              alt={images.qrMockup.alt}
              fill
              sizes="180px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <p data-aparecer className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 02 · Marketing</p>
          <h2 data-aparecer className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {marketingForestal.titulo}
          </h2>

          <div data-aparecer-grupo className="mt-10 grid gap-8 text-left sm:grid-cols-2">
            {marketingForestal.items.map((item, i) => {
              const Icono = ICONOS_MARKETING[i];
              return (
                <div key={item.titulo} className="flex items-center gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-crema/10">
                    <Icono className="text-esmeralda" size={30} strokeWidth={1.75} />
                  </div>
                  <p className="text-xl font-bold text-crema lg:text-2xl">{item.titulo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capa 03 · Experiencias */}
      <section id="capa-03" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <p data-aparecer className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 03 · Experiencias</p>
        <h2 data-aparecer className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
          {experienciasEmpresa.titulo}
        </h2>
        <p data-aparecer className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{experienciasEmpresa.bajada}</p>

        <div className="mt-10 grid gap-10 text-left lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div data-aparecer-grupo className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {experienciasEmpresa.items.map((item, i) => {
              const Icono = ICONOS_EXPERIENCIAS[i];
              return (
                <div key={item.titulo} className="lg:flex lg:items-center lg:gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-verde-profundo">
                    <Icono className="text-esmeralda" size={30} strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 text-xl font-bold text-verde-profundo lg:mt-0 lg:text-2xl">{item.titulo}</p>
                </div>
              );
            })}
          </div>

          <div data-aparecer className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.teamBuilding.src}
              alt={images.teamBuilding.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Capa 04 · Planes */}
      <section id="capa-04" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <p data-aparecer className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 04 · Planes</p>
          <h2 data-aparecer className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            {planesEmpresa.titulo}
          </h2>

          <div data-aparecer className="mx-auto mt-10 flex max-w-3xl flex-col items-center rounded-2xl bg-crema p-10 sm:p-12">
            <p className="max-w-xl text-lg text-verde-profundo/75">
              {planesEmpresa.oferta.texto.antes}
              <strong className="font-bold text-verde-profundo">
                {planesEmpresa.oferta.texto.destacado}
              </strong>
              {planesEmpresa.oferta.texto.despues}
            </p>
            <Link
              href="#propuesta"
              className="mt-8 inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
            >
              {planesEmpresa.oferta.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="propuesta" className="scroll-mt-24">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center bg-verde-profundo px-5 py-16 text-crema sm:px-8 lg:py-24">
            <div data-aparecer-grupo className="mx-auto w-full max-w-md">
              <div className="relative h-9 w-[122px]">
                <Image src="/logo-blanco.svg" alt="Plantify" fill className="object-contain object-left" />
              </div>
              <h2 className="mt-8 font-black text-3xl leading-tight sm:text-4xl">
                Armemos tu sector en Los Tualdos.
              </h2>
              <p className="mt-4 text-crema/80">
                Contanos de tu empresa y armamos juntos una propuesta a medida.
              </p>
              <p className="mt-10 text-sm text-crema/60">
                También podés escribirnos directo a {organizacion.email} o por WhatsApp al{" "}
                {organizacion.telefono}.
              </p>
            </div>
          </div>

          <div className="flex items-center px-5 py-16 sm:px-8 lg:py-24">
            <div data-aparecer-grupo className="mx-auto w-full max-w-md">
              <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">
                ¡Pedí tu propuesta!
              </h2>
              <p className="mt-4 text-verde-profundo/75">Contanos un poco de tu empresa y arrancamos.</p>

              <div className="mt-10">
                <FormularioContacto />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
