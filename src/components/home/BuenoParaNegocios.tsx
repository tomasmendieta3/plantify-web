import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function BuenoParaNegocios() {
  return (
    <section className="bg-crema">
      <div className="mx-auto max-w-6xl px-5 py-36 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center gap-6 lg:pr-10">
            <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
              Bueno para tu empresa, bueno para el planeta.
            </h2>
            <p className="text-verde-profundo/70">
              El compromiso ambiental impulsa el desempeño empresarial.
            </p>
            <div>
              <p className="font-bold text-verde-profundo">
                El 73 % de los consumidores prefiere comprarle a marcas con compromiso ambiental,
                y el 64 % la ubica entre sus tres principales criterios de compra.
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

          <div className="relative min-h-[820px] overflow-hidden rounded-3xl">
            <Image
              src={images.heroFondo.src}
              alt={images.heroFondo.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-verde-profundo via-verde-profundo/10 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-8 text-lg font-bold leading-snug text-crema">
              Catorce años de seguimiento, trazabilidad y reportes verificables para cada sector
              forestal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
