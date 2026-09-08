import type { Metadata } from "next";
import FormularioContacto from "@/components/FormularioContacto";
import ParaEmpresas from "@/components/ParaEmpresas";
import { organizacion } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Pedí una propuesta para el sector de tu empresa en Los Tualdos.",
};

function primero(valor: string | string[] | undefined) {
  return Array.isArray(valor) ? valor[0] : valor;
}

export default async function ContactoPage({ searchParams }: PageProps<"/contacto">) {
  const params = await searchParams;
  const mensajeInicial = primero(params?.mensaje);
  const esVisita = primero(params?.motivo) === "visita";

  return (
    <div>
      {!esVisita && <ParaEmpresas />}

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        {esVisita ? (
          <h1 className="text-4xl text-verde-profundo">Coordinar tu visita</h1>
        ) : (
          <h2 className="font-bold text-2xl text-verde-profundo sm:text-3xl">Pedir una propuesta</h2>
        )}
        <p className="mt-4 text-verde-profundo/75">
          {esVisita
            ? "Contanos cuándo te gustaría venir y con cuántos son, y te confirmamos el día."
            : "Contanos de tu empresa y te armamos una propuesta con el sector y los tiempos."}
        </p>

        <div className="mt-10">
          <FormularioContacto mensajeInicial={mensajeInicial} esVisita={esVisita} />
        </div>

        <p className="mt-10 text-sm text-verde-profundo/50">
          También podés escribirnos directo a {organizacion.email} o por WhatsApp al{" "}
          {organizacion.telefono}.
        </p>
      </div>
    </div>
  );
}
