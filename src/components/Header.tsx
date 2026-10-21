"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas" },
  { href: "/comunidad", label: "Los Tualdos" },
  { href: "/e/aeropuertos-argentina-2000", label: "Aeropuertos modelo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

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
      {/* fondo cristal blanco, el mismo del box del sello Plantify */}
      <div
        aria-hidden
        className="absolute inset-0 border-b border-white/70 bg-white/55 shadow-[0_8px_32px_rgba(14,53,40,0.12)] backdrop-blur-xl"
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Plantify — inicio" className="relative block h-9 w-[122px]">
          <Image src="/logo.svg" alt="Plantify" fill priority className="object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-verde-profundo/80 transition-colors hover:text-verde-profundo"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/aportar"
            className="rounded-full bg-esmeralda px-5 py-2.5 text-sm font-medium text-verde-profundo transition-colors hover:bg-esmeralda/90"
          >
            Sumá tu aporte
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-verde-profundo md:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((v) => !v)}
        >
          {menuAbierto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuAbierto && (
        <div className="fixed top-[65px] right-0 bottom-0 left-0 z-40 flex flex-col justify-center gap-10 bg-crema px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navegación mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-full border border-verde-profundo/10 bg-card/40 px-7 py-3 text-center text-lg text-verde-profundo transition-colors hover:border-esmeralda/40"
                onClick={() => setMenuAbierto(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/aportar"
            className="block rounded-full bg-esmeralda px-7 py-3.5 text-center text-base font-bold text-verde-profundo transition-colors hover:bg-esmeralda/90"
            onClick={() => setMenuAbierto(false)}
          >
            Sumá tu aporte
          </Link>
        </div>
      )}
    </header>
  );
}
