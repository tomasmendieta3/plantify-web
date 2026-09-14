"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/empresas", label: "Empresas" },
  { href: "/reserva", label: "Los Tualdos" },
  { href: "/comunidad", label: "Visitas" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const esHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solo la home tiene un hero oscuro detrás: en el resto de las páginas el
  // navbar siempre va con el fondo cristal y el texto oscuro, aunque no se haya scrolleado.
  const sobreHeroOscuro = esHome && !scrolled;

  useEffect(() => {
    if (!menuAbierto) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAbierto(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuAbierto]);

  return (
    <header className="sticky top-0 z-50">
      <div
        aria-hidden
        className={`absolute inset-0 border-b border-verde-profundo/10 bg-crema/70 shadow-sm backdrop-blur-xl transition-opacity duration-500 ${
          sobreHeroOscuro ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Plantify — inicio" className="relative block h-9 w-[122px]">
          <Image
            src="/logo-blanco.svg"
            alt="Plantify"
            fill
            priority
            className={`object-contain object-left transition-opacity duration-500 ${
              sobreHeroOscuro ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/logo.svg"
            alt="Plantify"
            fill
            priority
            className={`object-contain object-left transition-opacity duration-500 ${
              sobreHeroOscuro ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-500 ${
                sobreHeroOscuro
                  ? "text-white/90 hover:text-white"
                  : "text-verde-profundo/80 hover:text-verde-profundo"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/aportar"
            className={`text-sm transition-colors duration-500 ${
              sobreHeroOscuro ? "text-white/90 hover:text-white" : "text-verde-profundo/80 hover:text-verde-profundo"
            }`}
          >
            Aportar
          </Link>
          <Link
            href="/contacto"
            className="rounded-full bg-esmeralda px-5 py-2.5 text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
          >
            Pedir una propuesta
          </Link>
        </div>

        <button
          type="button"
          className={`p-2 transition-colors duration-500 md:hidden ${
            sobreHeroOscuro ? "text-white" : "text-verde-profundo"
          }`}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((v) => !v)}
        >
          {menuAbierto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuAbierto && (
        <div className="fixed top-[65px] right-0 bottom-0 left-0 z-40 flex flex-col bg-crema p-6 md:hidden">
          <nav className="flex flex-col gap-6" aria-label="Navegación mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl text-verde-profundo"
                onClick={() => setMenuAbierto(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/aportar"
              className="text-2xl text-verde-profundo"
              onClick={() => setMenuAbierto(false)}
            >
              Aportar
            </Link>
          </nav>
          <Link
            href="/contacto"
            className="mt-auto rounded-full bg-esmeralda px-5 py-4 text-center text-base font-medium text-verde-profundo"
            onClick={() => setMenuAbierto(false)}
          >
            Pedir una propuesta
          </Link>
        </div>
      )}
    </header>
  );
}
