import type { Metadata } from "next";
import { services } from "@/lib/content";
import { CtaBanner } from "@/components/cta-banner";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Servicios | Disnet",
  description:
    "Recepción, manipulación, almacenaje, preparación de pedidos, empaquetado, e-commerce, transporte y logística inversa.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="border-b border-border">
        <Reveal className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-h1">Servicios que ofrecemos</h1>
          <p className="mt-5 text-muted-foreground">
            En Disnet, además de los servicios estándar, atendemos cualquier necesidad de logística de
            nuestros clientes con el objetivo de que no tengan que ocuparse, si así lo desean, de ningún
            aspecto relacionado con la distribución física de sus productos.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
