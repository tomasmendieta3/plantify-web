import Image from "next/image";

// Tres etapas del mismo árbol, de menor a mayor, apoyadas sobre una misma base.
// Los textos salen de las etapas del proceso (pasos en data/site.ts).
const ARBOLES = [
  {
    src: "/home/arboles/arbol-1.webp",
    width: 363,
    height: 900,
    alto: "h-[160px] sm:h-[240px] lg:h-[300px]",
    alt: "Plantín recién plantado",
    etapa: "2 meses",
    titulo: "Diseñamos y plantamos",
    texto: "Plantamos en la temporada correspondiente.",
  },
  {
    src: "/home/arboles/arbol-2.webp",
    width: 577,
    height: 900,
    alto: "h-[220px] sm:h-[330px] lg:h-[420px]",
    alt: "Árbol joven en crecimiento",
    etapa: "Años 1-3",
    titulo: "Cuidamos la reserva",
    texto: "Seguimiento de prendimiento y control del crecimiento temprano.",
  },
  {
    src: "/home/arboles/arbol-3.webp",
    width: 661,
    height: 900,
    alto: "h-[300px] sm:h-[450px] lg:h-[560px]",
    alt: "Árbol nativo adulto",
    etapa: "15 años",
    titulo: "Cerramos el ciclo",
    texto: "Medición final e informe con todo lo plantado, cuidado y verificado.",
  },
];

export default function CrecimientoArboles() {
  return (
    <section className="px-4 pt-8 sm:px-8 lg:px-12">
      <h2 data-aparecer className="mb-12 text-center font-black text-3xl leading-tight text-verde-profundo sm:text-4xl">
        Somos parte de todo el proceso
      </h2>
      <div data-aparecer-grupo className="flex w-full items-start justify-between gap-3">
        {ARBOLES.map((arbol) => (
          <figure key={arbol.src} className="flex flex-col items-center">
            <div className="flex h-[300px] items-end sm:h-[450px] lg:h-[560px]">
              <Image
                src={arbol.src}
                alt={arbol.alt}
                width={arbol.width}
                height={arbol.height}
                sizes="(min-width: 1024px) 420px, 33vw"
                className={`${arbol.alto} w-auto`}
              />
            </div>
            <figcaption className="mt-6 max-w-[15rem] text-center sm:max-w-[19rem] lg:max-w-[22rem]">
              <p className="text-sm font-bold uppercase tracking-wider text-esmeralda sm:text-base lg:text-lg">{arbol.etapa}</p>
              <p className="mt-1 text-base font-black leading-tight text-verde-profundo sm:text-xl lg:text-2xl">{arbol.titulo}</p>
              <p className="mt-2 hidden text-base leading-relaxed text-verde-profundo/85 sm:block lg:text-lg">{arbol.texto}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
