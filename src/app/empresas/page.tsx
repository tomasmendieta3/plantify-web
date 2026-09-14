import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Leaf,
  FileCheck2,
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe,
  Repeat,
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
import ContadorImpacto from "@/components/home/ContadorImpacto";
import HeroVideo from "@/components/empresas/HeroVideo";
import {
  acuerdoModelos,
  alianzaCompleta,
  auditoriaControlUnion,
  capasEmpresa,
  empresasAliadas,
  empresasHero,
  empresasMision,
  experienciasEmpresa,
  marketingForestal,
  modeloGoldStandard,
  organizacion,
  pasosReserva,
  recorridoAportante,
} from "@/data/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Desarrollamos reservas forestales a medida para empresas: reserva, marketing forestal, experiencias y un acuerdo certificado por Control Union o Gold Standard.",
};

const ICONOS_PASO_RESERVA: LucideIcon[] = [Sprout, Leaf, FileCheck2, BadgeCheck];
const ICONOS_GOLD_STANDARD: LucideIcon[] = [Award, Globe, Repeat];
const ICONOS_MARKETING: LucideIcon[] = [Signpost, QrCode, BadgeCheck, Share2, ImageIcon, BarChart3];
const ICONOS_EXPERIENCIAS: LucideIcon[] = [Sprout, GraduationCap, Users];
const ICONOS_RECORRIDO: LucideIcon[] = [QrCode, Sprout, Leaf, FileCheck2, BadgeCheck, Share2];
// En el mismo orden que alianzaCompleta.bullets.
const ICONOS_ALIANZA: LucideIcon[] = [
  Signpost,
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  QrCode,
  ImageIcon,
  GraduationCap,
  Users,
];

export default function EmpresasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-verde-profundo">
        <div className="mx-auto max-w-6xl px-5 pt-24 pb-14 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
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

            <HeroVideo src="/reserva/tualdos-hero.mp4" poster="/reserva/tualdos-hero-poster.jpg" />
          </div>
        </div>
      </section>

      {/* Cuatro capas, una sola alianza */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">{empresasMision.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
          {empresasMision.titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{empresasMision.bajada}</p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 01 · La reserva</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            De la idea a tu espacio asignado.
          </h2>

          <div className="mt-10 grid gap-10 text-left lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <div className="grid gap-4 sm:grid-cols-2 lg:h-full lg:grid-rows-2">
              {pasosReserva.map((paso, i) => {
                const Icono = ICONOS_PASO_RESERVA[i];
                return (
                  <div
                    key={paso.numero}
                    className="rounded-2xl bg-crema p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Icono className="shrink-0 text-verde-profundo" size={32} strokeWidth={1.75} />
                      <span className="text-3xl font-black text-esmeralda">{paso.numero}</span>
                    </div>
                    <p className="mt-4 font-medium text-verde-profundo">{paso.titulo}</p>
                    <p className="mt-1 text-sm text-verde-profundo/70">{paso.texto}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid h-full gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={images.heroFondo.src}
                  alt={images.heroFondo.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={images.plantacion.src}
                  alt={images.plantacion.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo Control Union */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <div className="relative mx-auto h-20 w-20 sm:h-24 sm:w-24">
            <Image src={images.logoControlUnion.src} alt={images.logoControlUnion.alt} fill className="object-contain" />
          </div>
          <p className="mt-4 text-sm font-bold tracking-wide text-esmeralda uppercase">
            Capa 01 · La reserva — certificación Control Union
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            {auditoriaControlUnion.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{auditoriaControlUnion.bajada}</p>
        </div>

        <p className="mt-8 text-sm font-bold tracking-wide text-esmeralda uppercase">
          {auditoriaControlUnion.eyebrow}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {auditoriaControlUnion.items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-card/50 px-4 py-3.5">
              <CheckCircle2 className="shrink-0 text-esmeralda" size={20} />
              <p className="font-medium text-verde-profundo">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modelo Gold Standard */}
      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="text-center">
            <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40">
              <Image
                src={images.logoGoldStandard.src}
                alt={images.logoGoldStandard.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-bold tracking-wide text-esmeralda uppercase">
              Capa 01 · La reserva — certificación Gold Standard
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
              {modeloGoldStandard.titulo}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{modeloGoldStandard.bajada}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {modeloGoldStandard.items.map((item, i) => {
              const Icono = ICONOS_GOLD_STANDARD[i];
              return (
                <div key={item.titulo} className="rounded-2xl bg-crema p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-profundo">
                    <Icono className="text-esmeralda" size={22} strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 font-medium text-verde-profundo">{item.titulo}</p>
                  <p className="mt-1 text-sm text-verde-profundo/70">{item.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Así viaja tu aporte */}
      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 className="mx-auto max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            {recorridoAportante.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{recorridoAportante.bajada}</p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {recorridoAportante.pasos.map((paso, i) => {
              const Icono = ICONOS_RECORRIDO[i];
              return (
                <div
                  key={paso.titulo}
                  className="rounded-2xl bg-crema p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Icono className="shrink-0 text-verde-profundo" size={28} strokeWidth={1.75} />
                    <span className="text-2xl font-black text-esmeralda">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-4 font-medium text-verde-profundo">{paso.titulo}</p>
                  <p className="mt-1 text-sm text-verde-profundo/70">{paso.texto}</p>
                </div>
              );
            })}
          </div>
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
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 02 · Marketing</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {marketingForestal.titulo}
          </h2>

          <div className="mt-10 grid gap-8 text-left sm:grid-cols-2">
            {marketingForestal.items.map((item, i) => {
              const Icono = ICONOS_MARKETING[i];
              return (
                <div key={item.titulo} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crema/10">
                    <Icono className="text-esmeralda" size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-medium text-crema">{item.titulo}</p>
                    <p className="mt-1 text-sm text-crema/70">{item.texto}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capa 03 · Experiencias */}
      <section id="capa-03" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 03 · Experiencias</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
          {experienciasEmpresa.titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{experienciasEmpresa.bajada}</p>

        <div className="mt-10 grid gap-10 text-left lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {experienciasEmpresa.items.map((item, i) => {
              const Icono = ICONOS_EXPERIENCIAS[i];
              return (
                <div key={item.titulo} className="lg:flex lg:items-start lg:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-verde-profundo">
                    <Icono className="text-esmeralda" size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="mt-4 font-medium text-verde-profundo lg:mt-0">{item.titulo}</p>
                    <p className="mt-1 text-sm text-verde-profundo/70">{item.texto}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.teamBuilding.src}
              alt={images.teamBuilding.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capa 04 · Acuerdo */}
      <section id="capa-04" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 04 · Acuerdo</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
            {acuerdoModelos.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-verde-profundo/70">{acuerdoModelos.bajada}</p>

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-crema p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="relative h-16 w-40">
                <Image
                  src={images.logoControlUnion.src}
                  alt={images.logoControlUnion.alt}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-6 font-black text-2xl text-verde-profundo">{acuerdoModelos.controlUnion.titulo}</p>
              <p className="mt-1 font-bold text-esmeralda">{acuerdoModelos.controlUnion.subtitulo}</p>
              <p className="mt-3 text-verde-profundo/75">{acuerdoModelos.controlUnion.texto}</p>
            </div>

            <div className="rounded-2xl bg-crema p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="relative h-16 w-40">
                <Image
                  src={images.logoGoldStandard.src}
                  alt={images.logoGoldStandard.alt}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-6 font-black text-2xl text-verde-profundo">{acuerdoModelos.goldStandard.titulo}</p>
              <p className="mt-1 font-bold text-esmeralda">{acuerdoModelos.goldStandard.subtitulo}</p>
              <p className="mt-3 text-verde-profundo/75">{acuerdoModelos.goldStandard.texto}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-esmeralda px-6 py-5 text-center">
            <p className="font-bold text-verde-profundo">{acuerdoModelos.flexibilidad}</p>
          </div>
        </div>
      </section>

      {/* Una alianza completa */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
          {alianzaCompleta.titulo}
        </h2>
        <p className="mt-4 max-w-2xl text-verde-profundo/70">{alianzaCompleta.bajada}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {alianzaCompleta.bullets.map((bullet, i) => {
            const Icono = ICONOS_ALIANZA[i];
            return (
              <div key={bullet} className="flex items-center gap-3 text-verde-profundo/80">
                <Icono className="shrink-0 text-esmeralda" size={24} strokeWidth={1.75} />
                {bullet}
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl bg-verde-profundo px-6 py-8 text-crema sm:grid-cols-4 sm:px-10">
          {alianzaCompleta.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-bold text-xl sm:text-2xl">{stat.valor}</p>
              <p className="mt-1 text-xs tracking-wide text-crema/60 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ContadorImpacto />

      {/* Logos de empresas aliadas */}
      {empresasAliadas.length > 0 && (
        <div className="border-t border-verde-profundo/10 bg-card/40 py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mask-scrollbar-none relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-24" />
              <div className="marquee-track flex w-max items-center gap-16">
                {[...empresasAliadas, ...empresasAliadas].map((empresa, i) => (
                  <div key={`${empresa.nombre}-${i}`} className="relative h-16 w-44 shrink-0 opacity-70 grayscale">
                    <Image src={empresa.logo} alt={empresa.nombre} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formulario */}
      <section id="propuesta" className="scroll-mt-24">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center bg-verde-profundo px-5 py-16 text-crema sm:px-8 lg:py-24">
            <div className="mx-auto w-full max-w-md">
              <div className="relative h-9 w-[122px]">
                <Image src="/logo-blanco.svg" alt="Plantify" fill className="object-contain object-left" />
              </div>
              <h2 className="mt-8 font-black text-3xl leading-tight sm:text-4xl">
                Armemos tu sector en Los Tualdos.
              </h2>
              <p className="mt-4 text-crema/80">
                Te mandamos una propuesta con el sector, el precio y los tiempos. Sin vueltas.
              </p>
              <p className="mt-10 text-sm text-crema/60">
                También podés escribirnos directo a {organizacion.email} o por WhatsApp al{" "}
                {organizacion.telefono}.
              </p>
            </div>
          </div>

          <div className="flex items-center px-5 py-16 sm:px-8 lg:py-24">
            <div className="mx-auto w-full max-w-md">
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
