import Image from "next/image";
import {
  MapPin,
  Camera,
  FileCheck2,
  BadgeCheck,
  Share2,
  Footprints,
  Megaphone,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { entregables } from "@/data/site";
import { images } from "@/lib/images";

const ICONOS: Record<string, LucideIcon> = {
  MapPin,
  Camera,
  FileCheck2,
  BadgeCheck,
  Share2,
  Footprints,
  Megaphone,
  FileText,
};

function GrupoEntregables({ items, claro }: { items: typeof entregables; claro?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
      {items.map((item) => {
        const Icono = ICONOS[item.icono];
        return (
          <div key={item.texto} className="flex flex-col items-center gap-3">
            {Icono && <Icono className="shrink-0 text-esmeralda" size={40} strokeWidth={1.5} />}
            <p className={claro ? "text-crema/90" : "text-verde-profundo/85"}>{item.texto}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function QueRecibis() {
  const institucionales = entregables.filter((item) => item.categoria === "institucional");
  const marketing = entregables.filter((item) => item.categoria === "marketing");

  return (
    <section className="bg-card/40 pt-20 text-center">
      <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
        Qué recibís
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-0">
        <div>
          <h3 className="font-black text-xl text-verde-profundo uppercase tracking-wide">
            Institucional
          </h3>
          <div className="relative mt-6 min-h-[520px] overflow-hidden px-6 py-16">
            <Image
              src={images.cartelNativas.src}
              alt={images.cartelNativas.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-verde-profundo/80" />
            <div className="relative">
              <GrupoEntregables items={institucionales} claro />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-black text-xl text-verde-profundo uppercase tracking-wide">
            Marketing Plantify
          </h3>
          <div className="relative mt-6 min-h-[520px] overflow-hidden px-6 py-16">
            <Image
              src={images.qrEscritorio.src}
              alt={images.qrEscritorio.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-verde-profundo/80" />
            <div className="relative">
              <GrupoEntregables items={marketing} claro />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
