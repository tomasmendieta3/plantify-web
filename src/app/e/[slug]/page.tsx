import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import FormularioAporte from "@/components/FormularioAporte";
import { empresasLanding } from "@/data/site";

export async function generateStaticParams() {
  return empresasLanding.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/e/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const empresaLanding = empresasLanding.find((e) => e.slug === slug);
  if (!empresaLanding) return { title: "Aportar" };
  return {
    title: `Aportar — ${empresaLanding.empresa}`,
    description: empresaLanding.frase,
    robots: { index: false, follow: false },
  };
}

export default async function EmpresaLandingPage({ params }: PageProps<"/e/[slug]">) {
  const { slug } = await params;
  const empresaLanding = empresasLanding.find((e) => e.slug === slug);
  if (!empresaLanding) notFound();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center px-5 py-10 text-center">
      <div className="relative h-16 w-full" style={{ maxWidth: empresaLanding.logoAncho }}>
        <Image
          src={empresaLanding.logo}
          alt={empresaLanding.empresa}
          fill
          sizes="220px"
          className="object-contain"
          priority
        />
      </div>
      <p className="mt-3 text-xs text-verde-profundo/60">Reserva de {empresaLanding.empresa}</p>

      <h1 className="mt-5 text-3xl font-bold text-verde-profundo sm:text-4xl">{empresaLanding.frase}</h1>

      <div className="relative mt-6 w-full overflow-hidden rounded-2xl">
        <video
          src={empresaLanding.video}
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-verde-profundo/85 via-verde-profundo/20 to-transparent p-3">
          <p className="text-sm font-medium text-crema">{empresaLanding.explicacion}</p>
        </div>
      </div>

      <div className="mt-8 w-full text-left">
        <FormularioAporte sectorSlug={empresaLanding.slug} sectorNombre={empresaLanding.empresa} minimal />
      </div>
    </div>
  );
}
