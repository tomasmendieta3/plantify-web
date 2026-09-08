import { faqs } from "@/data/site";

export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 className="font-bold text-3xl text-verde-profundo sm:text-4xl">
        Preguntas frecuentes
      </h2>

      <div className="mt-8 divide-y divide-verde-profundo/10">
        {faqs.map((faq) => (
          <details key={faq.pregunta} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-verde-profundo">
              <span className="font-medium">{faq.pregunta}</span>
              <span className="shrink-0 text-verde-profundo/40 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-verde-profundo/70">{faq.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
