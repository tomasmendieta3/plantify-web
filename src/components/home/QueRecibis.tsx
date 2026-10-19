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

function BoxEntregables({
  titulo,
  imagen,
  items,
  imagenClassName = "",
}: {
  titulo: string;
  imagen: { src: string; alt: string };
  items: typeof entregables;
  imagenClassName?: string;
}) {
  return (
    <div className="relative isolate flex min-h-[600px] flex-col overflow-hidden rounded-3xl px-6 py-14 sm:px-10 lg:py-16">
      <Image
        src={imagen.src}
        alt={imagen.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`-z-20 object-cover ${imagenClassName}`}
      />
      <div className="absolute inset-0 -z-10 bg-verde-profundo/80" />
      <h3 className="font-black text-2xl uppercase tracking-wide text-crema sm:text-3xl">
        {titulo}
      </h3>
      <div className="mt-12 flex flex-1 items-center">
        <div className="w-full">
          <GrupoEntregables items={items} claro />
        </div>
      </div>
    </div>
  );
}

export default function QueRecibis() {
  const institucionales = entregables.filter((item) => item.categoria === "institucional");
  const marketing = entregables.filter((item) => item.categoria === "marketing");

  return (
    <section className="bg-card/40 px-5 py-20 text-center sm:px-8 lg:px-12">
      <h2 className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
        Qué recibís
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-verde-profundo/70">
        Una vez que sos parte, el equipo desarrolla todo en 2 bloques:{" "}
        <strong className="font-bold text-verde-profundo">comunicación interna y externa.</strong>
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <BoxEntregables
          titulo="Institucional"
          imagen={images.cartelNativas}
          items={institucionales}
          imagenClassName="object-[center_35%]"
        />
        <BoxEntregables titulo="Marketing Plantify" imagen={images.qrEscritorio} items={marketing} />
      </div>
    </section>
  );
}
