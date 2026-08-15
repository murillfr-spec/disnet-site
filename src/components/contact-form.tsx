"use client";

import { useState, type FormEvent } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { motion } from "motion/react";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors duration-150 focus:border-accent";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

export function ContactForm() {
  const { locale } = useParams<{ locale: Locale }>();
  const { ui } = getContent(locale);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(ui.contactFormToastTitle, {
        description: ui.contactFormToastDescription,
      });
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input required name="name" placeholder={ui.contactFormName} className={inputClass} />
      <input name="surname" placeholder={ui.contactFormSurname} className={inputClass} />
      <input required type="email" name="email" placeholder={ui.contactFormEmail} className={inputClass} />
      <input name="phone" placeholder={ui.contactFormPhone} className={inputClass} />
      <textarea
        required
        name="message"
        placeholder={ui.contactFormMessage}
        rows={5}
        className={`${inputClass} sm:col-span-2 resize-none`}
      />

      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
        <input required type="checkbox" className="mt-1 accent-[var(--color-accent)]" />
        {ui.contactFormTerms}
      </label>
      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
        <input type="checkbox" className="mt-1 accent-[var(--color-accent)]" />
        {ui.contactFormMarketing}
      </label>

      <motion.button
        type="submit"
        disabled={submitting}
        whileTap={{ scale: 0.96 }}
        transition={press}
        className="mt-2 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground disabled:opacity-60 sm:col-span-2"
      >
        {submitting ? ui.contactFormSubmitting : ui.contactFormSubmit}
      </motion.button>
    </form>
  );
}
