import type { Metadata } from "next";
import { contactCopy } from "@/lib/content";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contacto | Disnet",
  description: contactCopy.subtitle,
};

export default function ContactoPage() {
  return <ContactSection headingLevel="h1" />;
}
