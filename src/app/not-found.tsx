import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-start justify-center px-5 py-24 sm:px-8">
      <p className="font-bold text-5xl text-verde-profundo">404</p>
      <h1 className="mt-4 text-2xl text-verde-profundo">No encontramos esta página</h1>
      <p className="mt-3 text-verde-profundo/70">
        Puede que el link esté roto o que la página se haya movido. Probá desde acá:
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href="/" className="rounded-full bg-esmeralda px-5 py-2.5 text-sm font-medium text-verde-profundo hover:bg-esmeralda/90">
          Ir al inicio
        </Link>
        <Link href="/contacto" className="rounded-full border border-verde-profundo/15 px-5 py-2.5 text-sm text-verde-profundo hover:border-esmeralda/50">
          Contactarnos
        </Link>
      </div>
    </div>
  );
}
