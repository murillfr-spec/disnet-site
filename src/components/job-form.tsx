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

export function JobForm() {
  const { locale } = useParams<{ locale: Locale }>();
  const { jobsCopy, ui } = getContent(locale);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(ui.jobFormToastTitle, {
        description: ui.jobFormToastDescription,
      });
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input required name="name" placeholder={ui.jobFormName} className={inputClass} />
      <input required type="email" name="email" placeholder={ui.jobFormEmail} className={inputClass} />
      <input name="phone" placeholder={ui.jobFormPhone} className={inputClass} />
      <input required name="subject" placeholder={ui.jobFormSubject} className={inputClass} />
      <textarea
        required
        name="message"
        placeholder={ui.jobFormMessage}
        rows={4}
        className={`${inputClass} sm:col-span-2 resize-none`}
      />
      <label className="flex flex-col gap-1 text-sm text-muted-foreground sm:col-span-2">
        {ui.jobFormCv}
        <input type="file" name="cv" accept=".doc,.docx,.pdf" className="text-sm" />
      </label>

      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
        <input required type="checkbox" className="mt-1 accent-[var(--color-accent)]" />
        {ui.jobFormTerms}
      </label>
      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
        <input type="checkbox" className="mt-1 accent-[var(--color-accent)]" />
        {ui.jobFormMarketing}
      </label>

      <motion.button
        type="submit"
        disabled={submitting}
        whileTap={{ scale: 0.96 }}
        transition={press}
        className="mt-2 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground disabled:opacity-60 sm:col-span-2"
      >
        {submitting ? ui.jobFormSubmitting : ui.jobFormSubmit}
      </motion.button>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80 sm:col-span-2">{jobsCopy.legal}</p>
    </form>
  );
}
