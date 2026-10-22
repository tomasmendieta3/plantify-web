"use client";

import { useEffect } from "react";

const SELECTOR = "[data-aparecer], [data-aparecer-grupo], [data-deslizar]";

// Marca con data-aparecio los elementos con data-aparecer / data-aparecer-grupo / data-deslizar
// cuando entran en pantalla (la animación vive en globals.css). Usa un atributo y no una clase
// porque React reescribe className al re-renderizar y borraría la marca. Un MutationObserver
// suma los elementos que se montan después (navegación, re-renders).
// data-deslizar: entra desde el borde derecho de la pantalla hasta su lugar.
export default function AparecerAlScroll() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-deslizar"))
            el.style.setProperty("--desde", `${window.innerWidth - el.getBoundingClientRect().left}px`);
          el.setAttribute("data-aparecio", "");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observarNuevos = () =>
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (!el.hasAttribute("data-aparecio")) obs.observe(el);
      });

    observarNuevos();
    const mut = new MutationObserver(observarNuevos);
    mut.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mut.disconnect();
    };
  }, []);

  return null;
}
