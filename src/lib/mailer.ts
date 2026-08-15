import nodemailer from "nodemailer";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error(
      "Faltan variables de entorno SMTP (SMTP_HOST, SMTP_USER, SMTP_PASSWORD). Revisa .env.local o la configuración de Vercel."
    );
  }
  const port = Number(SMTP_PORT) || 587;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function sendMail(options: {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER!;

  await transporter.sendMail({
    from,
    to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    attachments: options.attachments,
  });
}
