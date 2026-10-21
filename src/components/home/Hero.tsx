import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] flex min-h-screen items-end overflow-hidden bg-verde-profundo">
      {/* video de fondo a sangre completa */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* degradé oscuro desde abajo a la izquierda para que el texto se lea */}
      <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/20 via-45% to-transparent" />

      <div className="relative z-10 w-full px-5 pt-[88px] pb-10 lg:px-10 lg:pb-14">
        <div className="text-left">
          <h1 className="text-[1.75rem] font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-[clamp(2.25rem,3.2vw,3.75rem)]">
            <span className="lg:whitespace-nowrap">Desarrollamos reservas forestales</span>
            <br className="hidden lg:block" />{" "}
            <span className="lg:whitespace-nowrap">nativas a la medida de tu empresa.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-white/90">
            Creamos reservas de forestación y conservación vinculadas a cada empresa, con
            seguimiento, auditorías y reportes que documentan su evolución.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-x-6 gap-y-3">
            <Link
              href="/contacto"
              className="rounded-full bg-[#2a8c64] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#237a57]"
            >
              Sumá tu empresa hoy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
