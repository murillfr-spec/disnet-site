import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, surname, email, phone, message, terms } = body as {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    message?: string;
    terms?: boolean;
  };

  if (!name || !email || !message || !terms) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  try {
    await sendMail({
      subject: `Nuevo mensaje de contacto de ${name} ${surname || ""}`.trim(),
      replyTo: email,
      text: [
        `Nombre: ${name} ${surname || ""}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "-"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email de contacto:", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
