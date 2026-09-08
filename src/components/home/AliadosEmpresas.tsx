import Image from "next/image";
import Link from "next/link";
import { empresasAliadas } from "@/data/site";

const RADIO = 200;
const BADGE = 88;
const OFFSET = RADIO - BADGE / 2;

export default function AliadosEmpresas() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-esmeralda uppercase">
          Aliados de confianza
        </p>
        <h2 className="mt-2 font-bold text-3xl text-verde-profundo sm:text-4xl">
          Empresas generando impacto
        </h2>
        <p className="mt-3 text-verde-profundo/70">
          Estas organizaciones ya son parte de Los Tualdos.
        </p>
      </div>

      <div className="relative mx-auto mt-14 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.58] sm:scale-[0.81] lg:scale-100">
          <div className="absolute left-1/2 top-1/2 z-10 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-verde-profundo shadow-xl ring-4 ring-crema">
            <Image src="/logo-icon.svg" alt="Plantify" width={56} height={56} />
          </div>

          {empresasAliadas.map((empresa, i) => {
            const angle = (360 / empresasAliadas.length) * i;
            return (
              <div
                key={empresa.nombre}
                className="orbit-pivot absolute left-1/2 top-1/2 h-0 w-0"
                style={{ "--angle": `${angle}deg` } as React.CSSProperties}
              >
                <div
                  className="absolute"
                  style={{ transform: `translate(${OFFSET}px, ${-BADGE / 2}px)` }}
                >
                  <div
                    className="orbit-badge flex items-center justify-center rounded-full border border-verde-profundo/10 bg-crema p-3 shadow-md"
                    style={{ height: BADGE, width: BADGE }}
                  >
                    <Image
                      src={empresa.logo}
                      alt={empresa.nombre}
                      width={72}
                      height={72}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/contacto"
          className="inline-block rounded-full bg-esmeralda px-10 py-4 text-lg font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
        >
          Sumá tu empresa ahora
        </Link>
      </div>
    </section>
  );
}
