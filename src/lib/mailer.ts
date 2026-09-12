import nodemailer from "nodemailer";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

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

// Colores de marca (ver src/app/globals.css: --accent / --accent-secondary)
const BRAND = {
  red: "#cc0000",
  blue: "#1369cf",
  ink: "#1b1e24",
  muted: "#6b7280",
  border: "#e6e6e6",
  bg: "#f4f4f4",
};

const LOGO_URL = "https://www.disnet.es/images/logo-disnet.jpg";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nl2br(str: string): string {
  return escapeHtml(str).replace(/\n/g, "<br />");
}

function emailShell(bodyHtml: string): string {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:${BRAND.bg};font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BRAND.border};">
            <tr>
              <td style="padding:24px 32px;background:${BRAND.ink};">
                <img src="${LOGO_URL}" alt="Disnet" height="32" style="display:block;height:32px;width:auto;border:0;border-radius:6px;background:#fff;padding:4px 8px;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:${BRAND.bg};border-top:1px solid ${BRAND.border};">
                <p style="margin:0;font-size:12px;color:${BRAND.muted};">
                  Disnet Sistemas de Distribución S.A. · C/ Pla del Fonollar, 15 – 08205 – Sabadell · disnet.es
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.muted};width:110px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;border-bottom:1px solid ${BRAND.border};font-size:14px;color:${BRAND.ink};vertical-align:top;">${value}</td>
  </tr>`;
}

export type ContactSubmission = {
  name: string;
  surname?: string;
  email: string;
  phone?: string;
  message: string;
};

async function send(options: {
  to: string;
  cc?: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transporter = getTransporter();
  await transporter.sendMail(options);
}

/** Notificación interna para el equipo de Disnet (y CC) con los datos del formulario. */
export async function sendContactNotification(submission: ContactSubmission) {
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  const to = process.env.CONTACT_TO_EMAIL || "teomediavilla@disnet.es";
  const cc = process.env.CONTACT_CC_EMAIL || "murillfr@gmail.com";
  const fullName = `${submission.name} ${submission.surname || ""}`.trim();

  const bodyHtml = `
    <h1 style="margin:0 0 4px;font-size:20px;color:${BRAND.ink};">Nuevo mensaje de contacto</h1>
    <p style="margin:0 0 24px;font-size:14px;color:${BRAND.muted};">Recibido a través del formulario de disnet.es</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${row("Nombre", escapeHtml(fullName))}
      ${row("Email", `<a href="mailto:${escapeHtml(submission.email)}" style="color:${BRAND.blue};text-decoration:none;">${escapeHtml(submission.email)}</a>`)}
      ${submission.phone ? row("Teléfono", `<a href="tel:${escapeHtml(submission.phone)}" style="color:${BRAND.blue};text-decoration:none;">${escapeHtml(submission.phone)}</a>`) : ""}
    </table>
    <p style="margin:0 0 8px;font-size:13px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.03em;">Mensaje</p>
    <p style="margin:0;padding:16px;background:${BRAND.bg};border-radius:8px;font-size:14px;line-height:1.6;color:${BRAND.ink};white-space:pre-wrap;">${nl2br(submission.message)}</p>
    <p style="margin:24px 0 0;">
      <a href="mailto:${escapeHtml(submission.email)}" style="display:inline-block;background:${BRAND.red};color:#fff;text-decoration:none;font-size:14px;font-weight:bold;padding:10px 20px;border-radius:999px;">Responder por email</a>
    </p>
  `;

  const text = [
    `Nuevo mensaje de contacto de ${fullName}`,
    `Email: ${submission.email}`,
    `Teléfono: ${submission.phone || "-"}`,
    "",
    "Mensaje:",
    submission.message,
  ].join("\n");

  await send({
    from,
    to,
    cc,
    replyTo: submission.email,
    subject: `Nuevo mensaje de contacto de ${fullName}`,
    text,
    html: emailShell(bodyHtml),
  });
}

const CONFIRMATION_COPY: Record<
  Locale,
  { subject: string; greeting: (name: string) => string; body1: string; body2: string; messageLabel: string; sign: string }
> = {
  es: {
    subject: "Hemos recibido tu mensaje — Disnet",
    greeting: (name) => `Hola ${name},`,
    body1: "Gracias por ponerte en contacto con Disnet. Hemos recibido tu mensaje correctamente y nuestro equipo te responderá lo antes posible.",
    body2: "Aquí tienes una copia de lo que nos has enviado:",
    messageLabel: "Tu mensaje",
    sign: "Un saludo,<br />El equipo de Disnet",
  },
  en: {
    subject: "We've received your message — Disnet",
    greeting: (name) => `Hi ${name},`,
    body1: "Thank you for contacting Disnet. We've received your message and our team will get back to you as soon as possible.",
    body2: "Here's a copy of what you sent us:",
    messageLabel: "Your message",
    sign: "Best regards,<br />The Disnet team",
  },
  ca: {
    subject: "Hem rebut el teu missatge — Disnet",
    greeting: (name) => `Hola ${name},`,
    body1: "Gràcies per contactar amb Disnet. Hem rebut el teu missatge correctament i el nostre equip et respondrà com més aviat millor.",
    body2: "Aquí tens una còpia del que ens has enviat:",
    messageLabel: "El teu missatge",
    sign: "Una salutació,<br />L'equip de Disnet",
  },
  fr: {
    subject: "Nous avons bien reçu votre message — Disnet",
    greeting: (name) => `Bonjour ${name},`,
    body1: "Merci d'avoir contacté Disnet. Nous avons bien reçu votre message et notre équipe vous répondra dans les plus brefs délais.",
    body2: "Voici une copie de ce que vous nous avez envoyé :",
    messageLabel: "Votre message",
    sign: "Cordialement,<br />L'équipe Disnet",
  },
};

/** Copia de confirmación para la persona que ha rellenado el formulario, en su idioma. */
export async function sendContactConfirmation(submission: ContactSubmission, rawLocale: string) {
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const copy = CONFIRMATION_COPY[locale];
  const { company } = getContent(locale);
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;

  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:15px;color:${BRAND.ink};">${escapeHtml(copy.greeting(submission.name))}</p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:${BRAND.ink};">${copy.body1}</p>
    <p style="margin:0 0 8px;font-size:13px;color:${BRAND.muted};">${copy.body2}</p>
    <p style="margin:0 0 24px;padding:16px;background:${BRAND.bg};border-radius:8px;font-size:14px;line-height:1.6;color:${BRAND.ink};white-space:pre-wrap;">${nl2br(submission.message)}</p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:${BRAND.ink};">${copy.sign}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;padding-top:16px;border-top:1px solid ${BRAND.border};">
      <tr><td style="font-size:13px;color:${BRAND.muted};padding:2px 0;">${escapeHtml(company.address)}</td></tr>
      <tr><td style="font-size:13px;padding:2px 0;"><a href="${escapeHtml(company.phoneHref)}" style="color:${BRAND.blue};text-decoration:none;">${escapeHtml(company.phone)}</a></td></tr>
      <tr><td style="font-size:13px;padding:2px 0;"><a href="mailto:${escapeHtml(company.email)}" style="color:${BRAND.blue};text-decoration:none;">${escapeHtml(company.email)}</a></td></tr>
    </table>
  `;

  const text = [
    copy.greeting(submission.name),
    "",
    copy.body1,
    "",
    copy.body2,
    submission.message,
    "",
    company.address,
    company.phone,
    company.email,
  ].join("\n");

  await send({
    from,
    to: submission.email,
    subject: copy.subject,
    text,
    html: emailShell(bodyHtml),
  });
}
