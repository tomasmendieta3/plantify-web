import Image from "next/image";
import { empresasAliadas } from "@/data/site";

// Logos con fondo opaco (sin canal alfa) a los que no se les puede aplicar invert:
// se muestran tal cual, sobre una tarjeta clara si su fondo original es claro.
const FONDO_CLARO = ["entre-rios-crushing.jpg"];
// Variantes recortadas a solo el isotipo, en blanco sobre transparente, para esta sección.
const REEMPLAZOS: Record<string, string> = {
  "padilla-serrano.png": "/logos-empresas/padilla-serrano-white.png",
};

export default function ClientesMarquee() {
  if (empresasAliadas.length === 0) return null;

  return (
    <div className="w-full overflow-hidden pt-16 pb-28">
      <p className="mb-16 text-center font-black text-2xl text-crema sm:text-3xl">
        Ellos ya son parte del impacto. ¿Te sumás?
      </p>

      <div className="marquee-track flex w-max items-center gap-32">
        {[...empresasAliadas, ...empresasAliadas].map((empresa, i) => {
          const archivo = empresa.logo.split("/").pop() ?? "";
          const esFondoClaro = FONDO_CLARO.includes(archivo);
          const src = REEMPLAZOS[archivo] ?? empresa.logo;

          return (
            <div
              key={`${empresa.nombre}-${i}`}
              className={
                esFondoClaro
                  ? "relative h-24 w-72 shrink-0 overflow-hidden rounded-2xl bg-crema p-4 sm:h-32 sm:w-96"
                  : "relative h-24 w-72 shrink-0 sm:h-32 sm:w-96"
              }
            >
              <Image
                src={src}
                alt={empresa.nombre}
                fill
                className={esFondoClaro ? "object-contain p-2" : "object-contain brightness-0 invert"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
