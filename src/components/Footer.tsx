import Image from "next/image";
import Link from "next/link";
import { organizacion } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-crema/10 bg-verde-profundo text-crema/80">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Image src="/logo-blanco.svg" alt="Plantify" width={122} height={36} />
            <p className="mt-3 text-sm leading-relaxed">
              Plantamos y cuidamos reservas forestales certificadas para empresas, en el Delta del
              Paraná.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-crema">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/comunidad" className="hover:text-crema">Visitas</Link></li>
              <li><Link href="/nosotros" className="hover:text-crema">Nosotros</Link></li>
              <li><Link href="/aportar" className="hover:text-crema">Aportar</Link></li>
              <li><Link href="/contacto" className="hover:text-crema">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-crema">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{organizacion.direccion}</li>
              <li>
                <a href={`tel:${organizacion.telefono.replace(/\s/g, "")}`} className="hover:text-crema">
                  {organizacion.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${organizacion.email}`} className="hover:text-crema">
                  {organizacion.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-crema">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{organizacion.razonSocial}</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-crema/10 pt-6 text-xs text-crema/50">
          © {new Date().getFullYear()} {organizacion.razonSocial}
        </p>
      </div>
    </footer>
  );
}
