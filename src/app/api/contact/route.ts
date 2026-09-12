import { NextResponse } from "next/server";
import { sendContactNotification, sendContactConfirmation } from "@/lib/mailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, surname, email, phone, message, terms, locale } = body as {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    message?: string;
    terms?: boolean;
    locale?: string;
  };

  if (!name || !email || !message || !terms) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  const submission = { name, surname, email, phone, message };

  try {
    await sendContactNotification(submission);
  } catch (error) {
    console.error("Error enviando email de contacto:", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }

  // La copia de confirmación al visitante no debe bloquear ni fallar la
  // respuesta: el mensaje ya ha llegado a Disnet, que es lo importante.
  try {
    await sendContactConfirmation(submission, locale || "es");
  } catch (error) {
    console.error("Error enviando copia de confirmación al visitante:", error);
  }

  return NextResponse.json({ ok: true });
}
