import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AportarInfo from "@/components/AportarInfo";
import FormularioAporte from "@/components/FormularioAporte";
import { empresasLanding } from "@/data/site";

export async function generateStaticParams() {
  return empresasLanding.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/e/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const empresaLanding = empresasLanding.find((e) => e.slug === slug);
  if (!empresaLanding) return { title: "Aportar" };
  return {
    title: `Plantify + ${empresaLanding.empresa}`,
    description: empresaLanding.frase,
    robots: { index: false, follow: false },
  };
}

export default async function EmpresaLandingPage({
  params,
}: PageProps<"/e/[slug]">) {
  const { slug } = await params;
  const empresaLanding = empresasLanding.find((e) => e.slug === slug);
  if (!empresaLanding) notFound();

  return (
    <div className="relative bg-verde-profundo">
      {/* video del hero de la home de fondo: queda fijo en pantalla mientras se scrollea el formulario */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      </div>

      <div data-aparecer-grupo className="relative mx-auto flex min-h-screen max-w-md flex-col items-center px-5 py-10 text-center">
        <div
          className="relative h-16 w-full"
          style={{ width: empresaLanding.logoAncho }}
        >
          <Image
            src={empresaLanding.logo}
            alt={empresaLanding.empresa}
            fill
            sizes="220px"
            className="object-contain"
            priority
          />
        </div>
        <p className="mt-3 text-xs text-crema/60">
          Reserva de {empresaLanding.empresa}
        </p>

        <h1 className="mt-5 text-3xl font-bold text-crema sm:text-4xl">
          Aportá a la reserva de {empresaLanding.empresaCorto ?? empresaLanding.empresa}
        </h1>
        <p className="mt-2 text-lg font-medium text-crema/80">
          {empresaLanding.frase}
        </p>

        <div className="mt-6 w-full text-left">
          <FormularioAporte
            sectorSlug={empresaLanding.slug}
            sectorNombre={empresaLanding.empresa}
            fondoBlanco
          />
        </div>
      </div>

      {/* misma info que /aportar, en fondo verde oscuro (tapa el video de fondo) */}
      <div className="relative">
        <AportarInfo oscuro reserva={empresaLanding.reserva} />
      </div>
    </div>
  );
}
