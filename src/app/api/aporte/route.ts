import { NextResponse } from "next/server";

type CuerpoAporte = {
  nombre?: string;
  email?: string;
  monto: number;
  sector: string;
  arbol?: string;
  honeypot?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as CuerpoAporte;

  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!body.monto || body.monto <= 0) {
    return NextResponse.json(
      { ok: false, error: "Revisá el monto del aporte." },
      { status: 400 }
    );
  }

  // TODO: acá va la integración real de cobro con Mercado Pago (crear preferencia
  // de pago con body.monto y redirigir al init_point que devuelva la API).
  console.log("[aporte] nuevo aporte registrado:", {
    nombre: body.nombre,
    email: body.email,
    monto: body.monto,
    sector: body.sector,
    arbol: body.arbol,
  });

  return NextResponse.json({ ok: true });
}
