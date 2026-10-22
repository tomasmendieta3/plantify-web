import { pasos } from "@/data/site";
import HeroVideo from "@/components/empresas/HeroVideo";

export default function ProcesoTimeline() {
  return (
    <section id="como-trabajamos" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-verde-profundo px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 data-aparecer className="max-w-lg font-black text-3xl leading-tight text-crema sm:text-4xl">
              Cómo trabajamos
            </h2>

            <div data-aparecer-grupo className="mt-10 border-b border-dorado/60">
              {pasos.map((paso, i) => (
                <div key={paso.anio} className="flex items-baseline gap-3 border-t border-crema/15 py-5">
                  <span className="text-base text-dorado">{i + 1}.</span>
                  <span className="text-lg font-bold text-crema sm:text-xl">{paso.titulo}</span>
                </div>
              ))}
            </div>

            <p data-aparecer className="mt-10 text-sm font-bold text-crema/85">Auditado por Control Union</p>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <HeroVideo src="/reserva/tualdos-hero.mp4" poster="/reserva/tualdos-hero-poster.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
