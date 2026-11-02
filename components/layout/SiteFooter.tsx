import { Instagram, Mail, MapPin } from "lucide-react";
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
];

export function SiteFooter() {
  return (
    <footer className="border-t border-subtle bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-secondary-accent">PATAGONIA SUMMER CAMP 2027</p>
          <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] text-main">
            Una aventura que también transforma el idioma.
          </h2>
          <div className="mt-7 flex flex-col gap-3 text-sm text-muted">
            <p className="flex items-center gap-3"><MapPin aria-hidden="true" size={17} /> Villa La Angostura, Neuquén</p>
            <p className="flex items-center gap-3"><Mail aria-hidden="true" size={17} /> hola@patagoniasummercamp.com</p>
          </div>
        </div>

        <nav aria-label="Navegación del pie de página">
          <p className="text-sm font-semibold text-main">Explorá</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-primary-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-main">Sumate a la aventura</p>
          <p className="mt-5 text-sm leading-6 text-muted">
            Pedí información, conocé el programa y reservá tu lugar para una experiencia que se recuerda para siempre.
          </p>
          <Button href="/preguntas-frecuentes" variant="secondary" className="mt-6">
            Consultar por lugar
          </Button>
          <Link
            href="https://instagram.com"
            aria-label="Instagram de Patagonia Summer Camp"
            className="mt-6 inline-flex size-11 items-center justify-center rounded-full border border-subtle text-muted transition-colors hover:border-primary/50 hover:text-main"
          >
            <Instagram aria-hidden="true" size={18} />
          </Link>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-subtle py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2027 Patagonia Summer Camp. Todos los derechos reservados.</p>
        <p>Diseñado para familias que buscan aprender ventureando.</p>
      </Container>
    </footer>
  );
}
