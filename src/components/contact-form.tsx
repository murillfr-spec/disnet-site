"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors duration-150 focus:border-accent";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Mensaje enviado", {
        description: "Gracias por contactar con Disnet, te responderemos lo antes posible.",
      });
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input required name="name" placeholder="Nombre *" className={inputClass} />
      <input name="surname" placeholder="Apellidos" className={inputClass} />
      <input required type="email" name="email" placeholder="Correo electrónico *" className={inputClass} />
      <input name="phone" placeholder="Teléfono" className={inputClass} />
      <textarea
        required
        name="message"
        placeholder="Comentario o mensaje *"
        rows={5}
        className={`${inputClass} sm:col-span-2 resize-none`}
      />

      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
        <input required type="checkbox" className="mt-1 accent-[var(--color-accent)]" />
        Acepto los términos al clicar aquí.
      </label>
      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
        <input type="checkbox" className="mt-1 accent-[var(--color-accent)]" />
        Deseo recibir información que pueda ser de mi interés.
      </label>

      <motion.button
        type="submit"
        disabled={submitting}
        whileTap={{ scale: 0.96 }}
        transition={press}
        className="mt-2 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground disabled:opacity-60 sm:col-span-2"
      >
        {submitting ? "Enviando…" : "Enviar"}
      </motion.button>
    </form>
  );
}
