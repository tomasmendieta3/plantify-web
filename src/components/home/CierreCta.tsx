import Link from "next/link";

export default function CierreCta() {
  return (
    <section className="bg-verde-profundo text-crema">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="font-bold text-3xl sm:text-4xl">
          Armemos tu sector en Los Tualdos.
        </p>
        <p className="mt-4 text-crema/70">
          Te mandamos una propuesta con el sector, el precio y los tiempos. Sin vueltas.
        </p>
        <Link
          href="/contacto"
          className="mt-8 inline-block rounded-full bg-esmeralda px-7 py-3.5 text-base font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
        >
          Pedir una propuesta
        </Link>
      </div>
    </section>
  );
}
