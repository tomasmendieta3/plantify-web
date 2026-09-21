import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { organizacion } from "@/data/site";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(organizacion.sitio),
  title: {
    default: "Plantify — Reservas forestales certificadas para empresas",
    template: "%s · Plantify",
  },
  description:
    "Plantify desarrolla y opera reservas forestales certificadas en el Delta del Paraná. Tu empresa recibe un sector propio en Los Tualdos, con catorce años de cuidado, monitoreo y auditoría de Control Union.",
  alternates: {
    canonical: organizacion.sitio,
  },
  openGraph: {
    title: "Plantify — Reservas forestales certificadas para empresas",
    description:
      "Reforestación corporativa auditada en el Delta del Paraná. Compensación de carbono con trazabilidad por hectárea y catorce años de custodia.",
    locale: "es_AR",
    siteName: "Plantify",
    url: organizacion.sitio,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizacion.razonSocial,
    url: organizacion.sitio,
    email: organizacion.email,
    telephone: organizacion.telefono,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sinclair 3139, Piso 4 Dep. A",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      postalCode: "1425",
      addressCountry: "AR",
    },
  };

  return (
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-crema text-verde-profundo">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
