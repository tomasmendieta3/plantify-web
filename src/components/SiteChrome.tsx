"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

// Landings de empresa (/e/[slug]) son de una sola acción: no llevan navegación
// ni ningún otro link que no sea aportar.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const esLandingEnfocada = pathname?.startsWith("/e/");

  if (esLandingEnfocada) return <>{children}</>;

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
