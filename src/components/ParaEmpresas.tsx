import Image from "next/image";
import Link from "next/link";
import { Share2, MapPin, BadgeCheck } from "lucide-react";
import { empresasAliadas, reserva, sectores } from "@/data/site";
import { formatNumero } from "@/lib/format";
import { images } from "@/lib/images";

const AL_CERRAR = [
  {
    icono: Share2,
    titulo: "Comunicación corporativa",
    texto: "Fotos, videos y material listo para tus redes y tu reporte de sostenibilidad.",
  },
  {
    icono: MapPin,
    titulo: "Seguimiento de árboles y sectores",
    texto: "Reportes georreferenciados de tu sector, temporada tras temporada.",
  },
  {
    icono: BadgeCheck,
    titulo: "El certificado",
    texto: "Certificado digital, auditado por Control Union.",
  },
];

const PASOS = [
  { numero: "1", titulo: "Elegís tu sector", texto: "Definimos el tamaño y la ubicación dentro de Los Tualdos." },
  { numero: "2", titulo: "Plantamos y auditamos", texto: "Plantamos las especies nativas y Control Union audita cada campaña." },
  { numero: "3", titulo: "Certificamos", texto: "Te entregamos el informe auditado y el certificado digital." },
  { numero: "4", titulo: "Lo mostrás", texto: "Usás las fotos, los datos y el certificado en tu reporte de sostenibilidad." },
];

const VALORES = [
  {
    titulo: "Trazabilidad real",
    texto: "Tu sector queda georreferenciado, con coordenadas GPS y auditoría anual de Control Union. No es una estimación: es un lugar que existe y se puede visitar.",
  },
  {
    titulo: "Credibilidad certificada",
    texto: "Certificado digital, informe auditado y la distinción honesta entre CO₂ proyectado y verificado, listos para tu reporte de sostenibilidad.",
  },
];

export default function ParaEmpresas() {
  const logos = [...empresasAliadas, ...empresasAliadas];
  const sectorEjemplo = sectores.find((s) => s.esDemo);

  return (
    <div className="border-b border-verde-profundo/10 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">Para empresas</p>
            <h1 className="mt-2 font-bold text-3xl leading-tight text-verde-profundo sm:text-4xl">
              Tus clientes esperan más. Un sector real dice más que una intención.
            </h1>
            <p className="mt-4 text-lg text-verde-profundo/75">
              Cada vez más gente busca marcas que prueben su compromiso ambiental, no que lo
              declaren. Con tu sector en Los Tualdos, georreferenciado y auditado por Control
              Union, tenés algo concreto para mostrar — no una promesa genérica.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.empresas.src}
              alt={images.empresas.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {empresasAliadas.length > 0 && (
          <div className="mask-scrollbar-none relative mt-12 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-crema to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-crema to-transparent sm:w-24" />
            <div className="marquee-track flex w-max items-center gap-12">
              {logos.map((empresa, i) => (
                <div
                  key={`${empresa.nombre}-${i}`}
                  className="relative h-10 w-28 shrink-0 opacity-70 grayscale"
                >
                  <Image
                    src={empresa.logo}
                    alt={empresa.nombre}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {!!reserva.arboles && (
            <div className="rounded-2xl border border-verde-profundo/10 bg-crema p-6">
              <p className="text-4xl font-black tracking-tight text-verde-profundo sm:text-5xl">
                +{formatNumero(reserva.arboles)}
              </p>
              <p className="mt-1 text-sm text-verde-profundo/60">árboles plantados</p>
            </div>
          )}
          {!!reserva.hectareas && (
            <div className="rounded-2xl border border-verde-profundo/10 bg-crema p-6">
              <p className="text-4xl font-black tracking-tight text-verde-profundo sm:text-5xl">
                {formatNumero(reserva.hectareas)}
              </p>
              <p className="mt-1 text-sm text-verde-profundo/60">hectáreas bajo custodia</p>
            </div>
          )}
          {!!reserva.aniosCustodia && (
            <div className="rounded-2xl border border-verde-profundo/10 bg-crema p-6">
              <p className="text-4xl font-black tracking-tight text-verde-profundo sm:text-5xl">
                {reserva.aniosCustodia}
              </p>
              <p className="mt-1 text-sm text-verde-profundo/60">años de auditoría por sector</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {VALORES.map((valor) => (
            <div key={valor.titulo} className="rounded-2xl bg-verde-profundo p-6 text-crema">
              <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
                {valor.titulo}
              </p>
              <p className="mt-2 text-crema/85">{valor.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-verde-profundo text-crema">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-bold text-2xl sm:text-3xl">Alto impacto, bajo esfuerzo</h2>
          <p className="mt-2 max-w-xl text-crema/70">
            Vos ponés el sector, nosotros ponemos el trabajo de campo y la auditoría.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((paso) => (
              <div key={paso.numero}>
                <p className="font-bold text-esmeralda">{paso.numero}</p>
                <p className="mt-2 font-medium text-crema">{paso.titulo}</p>
                <p className="mt-1 text-sm text-crema/70">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src={images.equipo.src}
              alt={images.equipo.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
              Cultura de equipo
            </p>
            <h2 className="mt-2 font-bold text-2xl text-verde-profundo sm:text-3xl">
              En Plantify no solo compensás: construís cultura empresarial.
            </h2>
            <p className="mt-4 text-verde-profundo/75">
              Llevá a tu equipo a pasar un día de campo en Los Tualdos: plantar árboles juntos,
              caminar la reserva y desconectar de la oficina. Es una jornada que suma al
              compromiso ambiental de tu empresa y a cómo tu equipo se siente parte de algo real.
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-block rounded-full bg-esmeralda px-6 py-3 text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
            >
              Coordinar un día de campo con mi equipo
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">
            Si cerrás con nosotros, te damos
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {AL_CERRAR.map((item) => (
              <div key={item.titulo} className="rounded-2xl border border-verde-profundo/10 bg-crema p-6">
                <item.icono className="text-esmeralda" size={26} />
                <p className="mt-3 font-medium text-verde-profundo">{item.titulo}</p>
                <p className="mt-1 text-sm text-verde-profundo/70">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {sectorEjemplo && (
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
            Así se ve un sector
          </p>
          <Link
            href={`/sector/${sectorEjemplo.slug}`}
            className="mt-4 grid gap-8 rounded-2xl border border-verde-profundo/10 bg-crema p-6 transition-colors hover:border-esmeralda/40 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:p-8"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={images.plantacion.src}
                alt={images.plantacion.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 rounded-full bg-dorado/90 px-3 py-1 text-xs font-medium text-verde-profundo">
                Ejemplo
              </span>
            </div>
            <div>
              <p className="font-bold text-xl text-verde-profundo">{sectorEjemplo.empresa}</p>
              <p className="mt-2 text-verde-profundo/70">
                {formatNumero(sectorEjemplo.hectareas)} hectáreas · {sectorEjemplo.temporada}
              </p>
              <p className="mt-1 text-verde-profundo/60">
                {sectorEjemplo.especies.join(", ")}
              </p>
              <p className="mt-4 text-sm text-verde-profundo/70">
                Todavía estamos sumando empresas a Los Tualdos — así se ve el primer sector,
                marcado como ejemplo, mientras cerramos los próximos.
              </p>
              <span className="mt-5 inline-block text-sm font-medium text-esmeralda underline underline-offset-4">
                Ver el sector completo
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
