import type { Metadata } from "next";
import AportarInfo from "@/components/AportarInfo";
import FormularioAporte from "@/components/FormularioAporte";
import { aportarStorytelling, sectores } from "@/data/site";

export const metadata: Metadata = {
  title: "Aportar",
  description: "Plantá un árbol y compensá tu huella. Tu aporte desarrolla nuestra reserva de especies nativas.",
};

export default async function AportarPage({ searchParams }: PageProps<"/aportar">) {
  const params = await searchParams;
  const sectorParam = params?.sector;
  const slug = Array.isArray(sectorParam) ? sectorParam[0] : sectorParam;
  const sector = slug ? sectores.find((s) => s.slug === slug) : undefined;
  const linkRoto = !!slug && !sector;

  return (
    <div className="relative isolate">

      <section className="relative overflow-hidden bg-crema">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 sm:pt-14 sm:pb-10">
          <div
            id="hero-aportar"
            className="relative h-[calc(100dvh-114px)] w-full overflow-hidden rounded-2xl sm:aspect-[16/9] sm:h-auto"
          >
            <video
              src="/reserva/aportar-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 flex items-center justify-center p-6 text-center sm:p-10">
              <div className="max-w-xl">
                <h1 className="text-5xl font-extrabold text-white leading-[1.7] sm:text-6xl sm:leading-[1.7]">
                  Plantá tu árbol
                </h1>

                {sector ? (
                  <p className="mt-4 text-lg leading-[1.75] text-white/90">
                    <span>
                      Tu aporte suma directo al sector de{" "}
                      <strong className="text-white">{sector.empresa}</strong>, {sector.hectareas}{" "}
                      hectáreas en Los Tualdos.
                    </span>
                  </p>
                ) : linkRoto ? (
                  <p className="mt-4 text-lg leading-[1.75] text-white/90">
                    <span>
                      No encontramos ese sector. Probá con el link que te compartieron o escribinos y te
                      ayudamos a encontrarlo.
                    </span>
                  </p>
                ) : (
                  <p className="mt-4 text-lg leading-[1.75] text-white/90">
                    <span>
                      {aportarStorytelling.porQue}{" "}
                      <strong className="font-bold text-white">{aportarStorytelling.porQueDestacado}</strong>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <FormularioAporte
          sectorSlug={sector?.slug ?? "general"}
          sectorNombre={sector?.empresa ?? "Los Tualdos"}
        />
      </section>

      <AportarInfo />
    </div>
  );
}
