"use client";

import { useEffect, useRef, useState } from "react";

// Una sola instancia de /camino.png (sin repetir), estirada verticalmente para
// ir desde el hero de /aportar hasta el box de "Monto del aporte" del formulario.
export default function CaminoAporte() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [medida, setMedida] = useState<{ top: number; height: number; width: number } | null>(null);

  useEffect(() => {
    function medir() {
      const contenedor = contenedorRef.current;
      const inicio = document.getElementById("hero-aportar");
      const fin = document.getElementById("monto-aporte");
      if (!contenedor || !inicio || !fin) return;

      const baseTop = contenedor.getBoundingClientRect().top + window.scrollY;
      const top = inicio.getBoundingClientRect().top + window.scrollY - baseTop;
      const bottom = fin.getBoundingClientRect().top + window.scrollY - baseTop;
      const height = Math.max(0, bottom - top);
      setMedida({ top, height, width: height * (1125 / 2436) });
    }

    medir();
    window.addEventListener("resize", medir);
    const t = setTimeout(medir, 400);
    return () => {
      window.removeEventListener("resize", medir);
      clearTimeout(t);
    };
  }, []);

  return (
    <div ref={contenedorRef} className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      {medida && medida.height > 0 && (
        <img
          src="/camino.png"
          alt=""
          className="absolute left-1/2 -translate-x-1/2 opacity-30"
          style={{ top: medida.top, height: medida.height, width: medida.width }}
        />
      )}
    </div>
  );
}
