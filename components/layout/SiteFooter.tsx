import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const footerLinks = [
  { href: "/programa-ingles", label: "Programa de inglés" },
  { href: "/destino/villa-la-angostura", label: "Villa La Angostura" },
  { href: "/itinerario-y-actividades", label: "Itinerario" },
  { href: "/seguridad-y-coordinacion", label: "Seguridad" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/guia-familias", label: "Guía para familias" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-subtle bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div>
          <Image
            src="/logo.png"
            alt="Patagonia Summer Camp — Explore Beyond"
            width={220}
            height={229}
            className="h-auto w-48 sm:w-56"
          />
          <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] text-main">
            Una aventura que también transforma el idioma.
          </h2>
          <p className="mt-7 flex items-center gap-3 text-sm text-muted"><MapPin aria-hidden="true" size={17} className="text-secondary-accent" /> Villa La Angostura, Neuquén, Patagonia</p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <p className="text-sm font-semibold text-main">Explorá</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-primary-accent">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-main">Sumate a la aventura</p>
          <p className="mt-5 text-sm leading-6 text-muted">
            Solicitá información sobre el programa para adolescentes de 13 a 17 años, las fechas, las actividades y la inscripción.
          </p>
          <Button href="/contacto" variant="secondary" className="mt-6">Consultar información</Button>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-subtle py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2027 Patagonia Summer Camp. Todos los derechos reservados.</p>
        <p>Diseñado para familias que buscan aprender explorando.</p>
      </Container>
    </footer>
  );
}
