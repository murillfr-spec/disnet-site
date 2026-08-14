import Link from "next/link";
import Image from "next/image";
import { company, navLinks, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-white p-2.5">
            <Image src="/images/logo-disnet.jpg" alt={company.name} width={1400} height={843} quality={100} className="h-16 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {company.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegación</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Servicios</h3>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{company.address}</li>
            <li>
              <a href={company.phoneHref} className="transition-colors duration-150 hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="transition-colors duration-150 hover:text-accent">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <span>Aviso legal</span>
            <span>Política de privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
