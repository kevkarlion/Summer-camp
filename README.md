# Patagonia Summer Camp 2027

Sitio institucional y landing page de conversión para el Summer Camp 2027 de Villa La Angostura, Patagonia Argentina.

## Stack

- Next.js 16 con App Router
- React 19 y TypeScript estricto
- Tailwind CSS 4 con design tokens en `app/globals.css`
- Motion para animaciones accesibles y GPU-friendly
- Lucide React para iconografía

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Comandos

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servidor de producción
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
```

## Rutas públicas

- `/`
- `/programa-ingles`
- `/programa-ingles/ninos`
- `/programa-ingles/adolescentes`
- `/destino/villa-la-angostura`
- `/itinerario-y-actividades`
- `/seguridad-y-coordinacion`
- `/preguntas-frecuentes`
- `/guia-familias`
- `/sobre-nosotros`

## SEO

Cada ruta define metadata, canonical URL, Open Graph y JSON-LD según su intención de búsqueda. `app/sitemap.ts`, `app/robots.ts` y `app/manifest.json` configuran el descubrimiento técnico del sitio.

Para URLs absolutas en producción, configurá:

```bash
NEXT_PUBLIC_SITE_URL=https://www.patagoniasummercamp.com
```

## Convenciones

- Mobile-first estricto: estilos base sin prefijo y breakpoints solo para escalar.
- Tokens centralizados en `app/globals.css`.
- Componentes atómicos en `components/ui`.
- Animaciones limitadas a `transform` y `opacity`, con soporte para `prefers-reduced-motion`.
- Metadatos y datos estructurados se incorporan junto con cada página.
