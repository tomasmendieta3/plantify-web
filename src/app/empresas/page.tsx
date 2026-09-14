import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Leaf,
  FileCheck2,
  BadgeCheck,
  MapPin,
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
import ProcesoModelo from "@/components/empresas/ProcesoModelo";
import {
  acuerdoModelos,
  alianzaCompleta,
  auditoriaControlUnion,
  capasEmpresa,
  comoVisitar,
  empresasHero,
  empresasMision,
  experienciasEmpresa,
  fauna,
  marketingForestal,
  modeloGoldStandard,
  organizacion,
  pasosReserva,
  procesosModelos,
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

const procesoControlUnion = procesosModelos.find((m) => m.slug === "control-union")!;
const procesoGoldStandard = procesosModelos.find((m) => m.slug === "gold-standard")!;

export default function EmpresasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src={images.heroFondo.src}
          alt={images.heroFondo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative w-full px-5 pt-24 pb-14 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
              {empresasHero.eyebrow}
            </p>
            <h1 className="mt-2 max-w-2xl font-extrabold text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {empresasHero.titulo}
            </h1>
            <p className="mt-5 max-w-lg text-lg font-medium text-white/90">{empresasHero.bajada}</p>
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
      </section>

      {/* Tres capas, una sola alianza */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">{empresasMision.eyebrow}</p>
        <h2 className="mt-2 max-w-2xl font-bold text-2xl text-verde-profundo sm:text-3xl">
          {empresasMision.titulo}
        </h2>
        <p className="mt-3 max-w-2xl text-verde-profundo/70">{empresasMision.bajada}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capasEmpresa.map((capa, i) => (
            <div
              key={capa.numero}
              className={`rounded-2xl p-6 ${
                i === 0 ? "bg-verde-profundo text-crema" : "bg-card/50 text-verde-profundo"
              }`}
            >
              <p className={`text-xs font-bold italic ${i === 0 ? "text-esmeralda" : "text-esmeralda"}`}>
                {capa.numero}
              </p>
              <p className="mt-2 font-bold">{capa.titulo}</p>
              <p className={`mt-1 text-sm italic ${i === 0 ? "text-crema/70" : "text-verde-profundo/60"}`}>
                {capa.bajada}
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-crema/85" : "text-verde-profundo/70"}`}>
                {capa.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capa 01 · La reserva */}
      <section id="capa-01" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 01 · La reserva</p>
          <h2 className="mt-2 font-bold text-2xl text-verde-profundo sm:text-3xl">
            De la idea a tu espacio asignado.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {pasosReserva.map((paso, i) => {
                const Icono = ICONOS_PASO_RESERVA[i];
                return (
                  <div key={paso.numero}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-profundo">
                      <Icono className="text-esmeralda" size={22} strokeWidth={1.75} />
                    </div>
                    <p className="mt-3 text-xs font-bold text-esmeralda">{paso.numero}</p>
                    <p className="mt-1 font-medium text-verde-profundo">{paso.titulo}</p>
                    <p className="mt-1 text-sm text-verde-profundo/70">{paso.texto}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-4">
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
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
              Capa 01 · La reserva — certificación Control Union
            </p>
            <h2 className="mt-2 font-bold text-2xl text-verde-profundo sm:text-3xl">
              {auditoriaControlUnion.titulo}
            </h2>
            <p className="mt-3 max-w-2xl text-verde-profundo/70">{auditoriaControlUnion.bajada}</p>
          </div>
          <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
            <Image src={images.logoControlUnion.src} alt={images.logoControlUnion.alt} fill className="object-contain" />
          </div>
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

        <div className="mt-8">
          <p className="mb-3 text-sm text-verde-profundo/60">
            El detalle completo: quién hace qué, en cada etapa.
          </p>
          <ProcesoModelo modelo={procesoControlUnion} />
        </div>
      </section>

      {/* Modelo Gold Standard */}
      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
                Capa 01 · La reserva — certificación Gold Standard
              </p>
              <h2 className="mt-2 font-bold text-2xl text-verde-profundo sm:text-3xl">
                {modeloGoldStandard.titulo}
              </h2>
              <p className="mt-3 max-w-2xl text-verde-profundo/70">{modeloGoldStandard.bajada}</p>
            </div>
            <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
              <Image
                src={images.logoGoldStandard.src}
                alt={images.logoGoldStandard.alt}
                fill
                className="object-contain"
              />
            </div>
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

          <div className="mt-8">
            <p className="mb-3 text-sm text-verde-profundo/60">
              El detalle completo: quién hace qué, en cada etapa.
            </p>
            <ProcesoModelo modelo={procesoGoldStandard} />
          </div>
        </div>
      </section>

      {/* Capa 02 · Marketing forestal */}
      <section id="capa-02" className="scroll-mt-24 bg-verde-profundo text-crema">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 02 · Marketing</p>
          <h2 className="mt-2 max-w-2xl font-bold text-2xl sm:text-3xl">{marketingForestal.titulo}</h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
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
      <section id="capa-03" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 03 · Experiencias</p>
        <h2 className="mt-2 max-w-2xl font-bold text-2xl text-verde-profundo sm:text-3xl">
          {experienciasEmpresa.titulo}
        </h2>
        <p className="mt-3 max-w-2xl text-verde-profundo/70">{experienciasEmpresa.bajada}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {experienciasEmpresa.items.map((item, i) => {
            const Icono = ICONOS_EXPERIENCIAS[i];
            return (
              <div key={item.titulo}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-profundo">
                  <Icono className="text-esmeralda" size={22} strokeWidth={1.75} />
                </div>
                <p className="mt-4 font-medium text-verde-profundo">{item.titulo}</p>
                <p className="mt-1 text-sm text-verde-profundo/70">{item.texto}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capa 04 · Acuerdo */}
      <section id="capa-04" className="scroll-mt-24 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Capa 04 · Acuerdo</p>
          <h2 className="mt-2 font-bold text-2xl text-verde-profundo sm:text-3xl">{acuerdoModelos.titulo}</h2>
          <p className="mt-3 max-w-2xl text-verde-profundo/70">{acuerdoModelos.bajada}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-crema p-6 sm:p-8">
              <div className="relative h-12 w-32">
                <Image
                  src={images.logoControlUnion.src}
                  alt={images.logoControlUnion.alt}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-4 font-bold text-lg text-verde-profundo">{acuerdoModelos.controlUnion.titulo}</p>
              <ul className="mt-4 space-y-2">
                {acuerdoModelos.controlUnion.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-verde-profundo/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-esmeralda" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-crema p-6 sm:p-8">
              <div className="relative h-12 w-32">
                <Image
                  src={images.logoGoldStandard.src}
                  alt={images.logoGoldStandard.alt}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-4 font-bold text-lg text-verde-profundo">{acuerdoModelos.goldStandard.titulo}</p>
              <p className="mt-1 font-medium text-esmeralda">{acuerdoModelos.goldStandard.subtitulo}</p>
              <p className="mt-3 text-sm text-verde-profundo/75">{acuerdoModelos.goldStandard.texto}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-esmeralda px-6 py-5 text-center">
            <p className="font-bold text-verde-profundo">{acuerdoModelos.flexibilidad}</p>
          </div>
        </div>
      </section>

      {/* Una alianza completa */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">{alianzaCompleta.titulo}</h2>
        <p className="mt-3 max-w-2xl text-verde-profundo/70">{alianzaCompleta.bajada}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {alianzaCompleta.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-2 text-verde-profundo/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-esmeralda" />
              {bullet}
            </div>
          ))}
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

      {/* Elegí tu sector */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl border border-verde-profundo/10 bg-crema p-6 sm:flex-row sm:items-center sm:p-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-esmeralda/15">
            <MapPin className="text-esmeralda" size={30} />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-xl text-verde-profundo sm:text-2xl">
              Elegí tu sector en el mapa real de la reserva
            </h2>
            <p className="mt-2 text-verde-profundo/70">
              Vas a ver qué está asignado, qué estamos plantando esta temporada y qué sigue
              libre — un mapa real de Los Tualdos, no una ilustración.
            </p>
          </div>
          <Link
            href="/reserva#mapa"
            className="shrink-0 rounded-full bg-verde-profundo px-6 py-3 text-sm font-medium text-crema transition-colors hover:bg-verde-profundo/90"
          >
            Ver el mapa completo
          </Link>
        </div>
      </section>

      {/* Visitá Los Tualdos */}
      <section className="border-y border-verde-profundo/10 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.fauna.src}
              alt={images.fauna.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
              Llevá a tu equipo
            </p>
            <h2 className="mt-2 font-bold text-2xl text-verde-profundo sm:text-3xl">
              ¿Tu propósito es que tu equipo lo viva de cerca?
            </h2>
            <p className="mt-4 text-verde-profundo/75">{comoVisitar.descripcion}</p>
            <p className="mt-2 text-verde-profundo/75">
              De paso, vas a cruzarte con la fauna del Delta — {fauna[0].nombre.toLowerCase()},{" "}
              {fauna[2].nombre.toLowerCase()} y, con suerte, algún {fauna[1].nombre.toLowerCase()}.
            </p>
            <p className="mt-2 text-sm text-verde-profundo/60">{comoVisitar.duracion}</p>
            <Link
              href="/contacto?motivo=visita"
              className="mt-6 inline-block rounded-full bg-esmeralda px-6 py-3 text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
            >
              Coordinar una visita
            </Link>
          </div>
        </div>
      </section>

      <ContadorImpacto />

      {/* Formulario */}
      <section id="propuesta" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">
            ¡Pedí tu propuesta!
          </h2>
          <p className="mt-4 text-verde-profundo/75">
            Contanos de tu empresa y te armamos una propuesta con el sector, el precio y los
            tiempos.
          </p>

          <div className="mt-10">
            <FormularioContacto />
          </div>

          <p className="mt-10 text-sm text-verde-profundo/50">
            También podés escribirnos directo a {organizacion.email} o por WhatsApp al{" "}
            {organizacion.telefono}.
          </p>
        </div>
      </section>
    </div>
  );
}
