import { company } from "@/lib/content";
import { MotionLink } from "@/components/motion-link";
import { Reveal } from "@/components/reveal";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

export function CtaBanner() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              ¿Hablamos de tu cadena de suministro?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Escríbenos y te ayudamos a encontrar la solución logística adecuada para tu negocio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <MotionLink
              href="/contacto"
              whileTap={{ scale: 0.96 }}
              transition={press}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
            >
              Contacta con nosotros
            </MotionLink>
            <a
              href={company.phoneHref}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
