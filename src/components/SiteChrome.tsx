"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

// Landings de empresa (/e/[slug]) son de una sola acción: no llevan header ni
// WhatsApp, solo el footer completo del sitio.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const esLandingEnfocada = pathname?.startsWith("/e/");

  if (esLandingEnfocada)
    return (
      <>
        <main className="flex-1">{children}</main>
        <Footer />
      </>
    );

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
