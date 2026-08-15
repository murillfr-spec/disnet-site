import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;
  const terms = formData.get("terms");
  const cv = formData.get("cv") as File | null;

  if (!name || !email || !subject || !message || !terms) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  try {
    const attachments = [];
    if (cv && cv.size > 0) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({ filename: cv.name, content: buffer });
    }

    await sendMail({
      subject: `Candidatura: ${subject} — ${name}`,
      replyTo: email,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "-"}`,
        `Asunto: ${subject}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email de candidatura:", error);
    return NextResponse.json({ error: "No se pudo enviar la candidatura." }, { status: 500 });
  }
}
