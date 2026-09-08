import { MapPin, Camera, FileCheck2, BadgeCheck, Share2, Footprints, type LucideIcon } from "lucide-react";
import { entregables } from "@/data/site";

const ICONOS: Record<string, LucideIcon> = {
  MapPin,
  Camera,
  FileCheck2,
  BadgeCheck,
  Share2,
  Footprints,
};

export default function QueRecibis() {
  return (
    <section className="bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">
          Qué recibís
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {entregables.map((item) => {
            const Icono = ICONOS[item.icono];
            return (
              <div key={item.texto} className="flex flex-col items-start gap-3">
                {Icono && <Icono className="shrink-0 text-esmeralda" size={40} strokeWidth={1.5} />}
                <p className="text-verde-profundo/85">{item.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
