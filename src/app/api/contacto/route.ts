import { NextResponse } from "next/server";

type CuerpoContacto = {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
  honeypot?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as CuerpoContacto;

  // Honeypot anti-spam: si este campo viene lleno, es un bot.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!body.nombre || !body.email || !body.mensaje) {
    return NextResponse.json(
      { ok: false, error: "Nos falta algún dato para poder responderte." },
      { status: 400 }
    );
  }

  // TODO: enchufar acá el envío real (Resend, o el CRM de Plantify).
  console.log("[contacto] nueva propuesta pedida:", {
    nombre: body.nombre,
    email: body.email,
    empresa: body.empresa,
    mensaje: body.mensaje,
  });

  return NextResponse.json({ ok: true });
}
