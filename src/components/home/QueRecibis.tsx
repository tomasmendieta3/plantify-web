import Image from "next/image";
import {
  MapPin,
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
  FileCheck2,
  BadgeCheck,
  Share2,
  Footprints,
  Megaphone,
  FileText,
};

function GrupoEntregables({ items, claro }: { items: typeof entregables; claro?: boolean }) {
  return (
    <ul data-aparecer-grupo className="mx-auto flex w-full max-w-sm flex-col gap-5 text-left">
      {items.map((item) => {
        const Icono = ICONOS[item.icono];
        return (
          <li key={item.texto} className="flex items-center gap-4">
            {Icono && <Icono className="shrink-0 text-esmeralda" size={28} strokeWidth={1.5} />}
            <p className={claro ? "text-crema/90" : "text-verde-profundo/85"}>{item.texto}</p>
          </li>
        );
      })}
    </ul>
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
    <div className="flex flex-col">
      <h3 className="font-black text-2xl uppercase tracking-wide text-verde-profundo sm:text-3xl">
        {titulo}
      </h3>
      <div className="relative mx-auto mt-6 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-3xl">
        <Image
          src={imagen.src}
          alt={imagen.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-transform duration-700 ease-out hover:scale-105 ${imagenClassName}`}
        />
      </div>
      <div className="mt-8">
        <GrupoEntregables items={items} />
      </div>
    </div>
  );
}

export default function QueRecibis() {
  const institucionales = entregables.filter((item) => item.categoria === "institucional");
  const marketing = entregables.filter((item) => item.categoria === "marketing");

  return (
    <section className="bg-card/40 px-5 py-20 text-center sm:px-8 lg:px-12">
      <h2 data-aparecer className="font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
        Qué recibís
      </h2>
      <p data-aparecer className="mx-auto mt-4 max-w-2xl text-lg text-verde-profundo/70">
        Una vez que sos parte, el equipo desarrolla todo en 2 bloques:{" "}
        <strong className="font-bold text-verde-profundo">comunicación interna y externa.</strong>
      </p>

      <div data-aparecer-grupo className="mx-auto mt-12 grid max-w-5xl items-start gap-16 lg:grid-cols-2 lg:gap-10">
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
