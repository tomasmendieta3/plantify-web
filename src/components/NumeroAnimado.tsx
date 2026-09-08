"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumero } from "@/lib/format";

type Props = {
  valor: number;
  prefijo?: string;
  sufijo?: string;
};

export default function NumeroAnimado({ valor, prefijo = "", sufijo = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(valor);
  const yaAnimo = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefiereMenosMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefiereMenosMovimiento) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || yaAnimo.current) return;
        yaAnimo.current = true;

        const duracion = 1200;
        const inicio = performance.now();

        const paso = (ahora: number) => {
          const progreso = Math.min((ahora - inicio) / duracion, 1);
          const suavizado = 1 - Math.pow(1 - progreso, 3);
          setDisplay(Math.round(valor * suavizado));
          if (progreso < 1) requestAnimationFrame(paso);
          else setDisplay(valor);
        };

        setDisplay(0);
        requestAnimationFrame(paso);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [valor]);

  return (
    <span ref={ref}>
      {prefijo}
      {formatNumero(display)}
      {sufijo}
    </span>
  );
}
