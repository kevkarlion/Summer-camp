import type { Dictionary } from "./dictionary-types";

export const es: Dictionary = {
  nav: {
    items: [
      { href: "/", label: "Inicio" },
      { href: "/programa-ingles", label: "Programa" },
      { href: "/programa-ingles/adolescentes", label: "13–17 años" },
      { href: "/itinerario-y-actividades", label: "Experiencias" },
      { href: "/destino/villa-la-angostura", label: "Destino" },
      { href: "/seguridad-y-coordinacion", label: "Seguridad" },
      { href: "/guia-familias", label: "Guía" },
      { href: "/preguntas-frecuentes", label: "FAQ" },
      { href: "/sobre-nosotros", label: "Nosotros" },
      { href: "/contacto", label: "Contacto" },
    ],
    groups: [
      {
        label: "La experiencia",
        hrefs: ["/programa-ingles", "/programa-ingles/adolescentes", "/itinerario-y-actividades", "/destino/villa-la-angostura"],
      },
      {
        label: "Para las familias",
        hrefs: ["/seguridad-y-coordinacion", "/guia-familias", "/preguntas-frecuentes"],
      },
      {
        label: "El proyecto",
        hrefs: ["/sobre-nosotros", "/contacto"],
      },
    ],
    home: "Inicio",
    primaryLabel: "Patagonia Summer Camp 2027, inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    contactCta: "Consultar información",
    languageLabel: "Idioma",
    primaryNavLabel: "Navegación principal",
    mobileNavLabel: "Navegación móvil",
  },
  hero: {
    displayLines: ["Inglés para vivir", "en Patagonia"],
    lead:
      "Patagonia Summer Camp 2027 es un campamento residencial de verano en inglés en Villa La Angostura, Patagonia: del 4 al 12 de diciembre de 2027.",
    ctaPrimary: "Consultar disponibilidad",
    ctaSecondary: "Conocer el programa",
    factsLabel: "Datos principales del campamento",
    facts: [
      { label: "Años", value: "13–17" },
      { label: "Fechas", value: "4–12 dic. 2027" },
      { label: "Formato", value: "Residencial" },
      { label: "Lugar", value: "Villa La Angostura" },
    ],
    imageAlt: "Vista panorámica de Villa La Angostura: lago turquesa, bosque nativo y montañas",
    imageCaption: "Villa La Angostura, sobre el lago Nahuel Huapi.",
  },
  experience: {
    heading: "Una experiencia, tres entradas.",
    lead:
      "Un campamento residencial de inglés es idioma, paisaje y vida de grupo trabajando juntos. Estas son las tres cosas que hacen que un día cuente.",
    columns: [
      {
        title: "Aprendizaje activo",
        text: "Inglés en situación real: la misión diaria, las indicaciones en el sendero y las conversaciones en la mesa le dan al idioma una razón de uso.",
      },
      {
        title: "Entorno natural",
        text: "Villa La Angostura y el lago Nahuel Huapi: trekking, kayak y el bosque nativo rodean cada actividad con un paisaje que merece ser recorrido.",
      },
      {
        title: "Comunidad y edades",
        text: "De 13 a 17 años, en autonomía y trabajo en equipo: cada participante asume responsabilidades, cuida al grupo y comparte una semana residencial.",
      },
    ],
    link: "Ver el programa para adolescentes",
  },
  day: {
    heading: "Un día típico",
    lead:
      "La rutina de un día de campamento, de la primera luz a la actividad nocturna. Los horarios son aproximados y dependen del clima y de la organización de cada día.",
    aside: "El horario definitivo se comunicará con el programa.",
  },
  residence: {
    heading: "Entre el lago y el bosque.",
    lead:
      "La residencia está a 2 km del centro de Villa La Angostura y cuenta con 26 hectáreas de parque y bosque nativo, orilla del lago Nahuel Huapi, un área deportiva y un comedor amplio.",
    linkDestination: "Conocer el destino",
    linkActivities: "Ver actividades",
    galleryAlts: [
      "Residencia de piedra y madera junto a un área abierta, imagen editorial de referencia",
      "Construcción de piedra y madera integrada en un entorno boscoso, imagen editorial de referencia",
      "Lago al atardecer con montañas de Patagonia al fondo",
    ],
    galleryCaptions: ["La residencia y su parque", "Piedra, madera y bosque", "El lago al atardecer"],
    galleryDisclaimer:
      "Imágenes editoriales de referencia para ilustrar la experiencia envisioned; no muestran la residencia real.",
  },
  about: {
    heading: "De Laponia a Patagonia.",
    promise:
      "Hernán Paulitti, fundador de Patagonia Summer Camp, trabajó en Laponia bajo las auroras boreales; en Patagonia mantiene esa promesa con un campamento para adolescentes.",
    link: "Conocer nuestra historia",
    imageAlt: "Hernán Paulitti bajo las auroras boreales en Laponia",
    imageCaption: "Hernán Paulitti en Laponia, la experiencia que inspiró Patagonia Summer Camp.",
  },
  packing: {
    heading: "Qué llevar",
    lead: "Una lista breve para preparar el viaje. La guía para familias tiene todos los detalles.",
    note: "No traigas objetos de valor ni equipamiento especializado sin consulta previa. Esperá las instrucciones del equipo antes de comprar o rentar equipamiento para kayak, rafting u otras actividades.",
    cards: [
      {
        title: "Ropa y abrigo",
        icon: "shirt",
        items: [
          "Ropa interior y calcetines para toda la estadía",
          "Camisetas y pantalones cómodos",
          "Ropa deportiva",
          "Polar o capa cálida",
          "Campera impermeable y cortaviento",
          "Pantalón largo y ropa cómoda para los momentos libres",
          "Pijama",
          "Bañador",
          "Gorro para el sol y anteojos",
        ],
      },
      {
        title: "Calzado",
        icon: "footprints",
        items: [
          "Zapatillas cómodas para caminar",
          "Calzado de trekking, según las indicaciones previas",
          "Sandalias o calzado para las instalaciones de la residencia",
        ],
      },
      {
        title: "Equipamiento de aventura",
        icon: "backpack",
        items: [
          "Mochila pequeña",
          "Botella de agua reutilizable",
          "Protector solar",
          "Repelente de insectos",
          "Anteojos",
          "Toalla personal y, si corresponde, toalla de actividad",
          "Bolsa para ropa mojada o usada",
        ],
      },
      {
        title: "Documentación e higiene",
        icon: "fileText",
        items: [
          "Cepillo de dientes y pasta",
          "Shampoo y jabón",
          "Desodorante",
          "Otros productos personales necesarios",
          "Documento de identidad",
          "Información de cobertura médica",
          "Medicamentos e instrucciones, si corresponde",
          "Autorizaciones y formularios solicitados por la organización",
        ],
      },
    ],
    link: "Abrir la guía completa para las familias",
  },
  safety: {
    heading: "Coordinamos cada etapa.",
    lead:
      "Un equipo acompaña la experiencia, las actividades se evalúan según las condiciones y los procedimientos de emergencia, seguro y comunicación se confirman antes del campamento.",
    cta: "Ver la guía para las familias",
    linkSafety: "Conocer la seguridad",
    linkGuide: "Abrir la guía completa para las familias",
    linkFaq: "Ver preguntas frecuentes",
  },
  guide: {
    title: "Guía para las familias",
    intro:
      "La orientación operativa que las familias necesitan antes del campamento. Los procedimientos pendientes se confirman antes de la experiencia.",
    close: "Cerrar",
    groups: [
      {
        title: "Dinero personal",
        items: [
          "Se recomienda llevar una cantidad moderada de dinero para gastos personales pequeños, si fuera necesario.",
          "No deben traerse objetos de valor, dispositivos caros, joyería ni objetos innecesarios.",
          "Los procedimientos para dinero, objetos y pertenencias perdidas se comunicarán antes del campamento.",
        ],
      },
      {
        title: "Custodia de celulares",
        items: [
          "Las reglas de uso privilegiarán la participación, el descanso y la interacción cara a cara, sin cortar la comunicación familiar.",
          "Los horarios finales y las reglas de custodia se comunicarán antes del campamento.",
        ],
      },
      {
        title: "Convivencia",
        items: [
          "Respetar a pares, equipo y proveedores; seguir instrucciones de seguridad; cuidar instalaciones, equipos y naturaleza; y respetar horarios y reglas de convivencia.",
          "No se permite acoso, discriminación, intimidación, violencia ni el consumo de alcohol, drogas, tabaco u otras conductas que comprometan la seguridad o el bienestar.",
        ],
      },
      {
        title: "Información médica y contactos de emergencia",
        items: [
          "Las familias deben informar alergias, condiciones médicas, medicamentos e instrucciones, restricciones alimentarias, restricciones de actividad, cobertura médica y contactos de emergencia.",
          "Los medicamentos deben llegar identificados y acompañados de instrucciones claras.",
          "El procedimiento de almacenamiento, administración y supervisión se comunicará antes del campamento.",
          "Las familias serán contactadas lo antes posible cuando una situación médica o de seguridad lo requiera.",
        ],
      },
      {
        title: "Preparación del viaje",
        items: [
          "La coordinación recibe a los participantes en el lugar y horario que se comuniquen previamente. Al llegar, el equipo organiza el equipaje, presenta a los coordinadores y las instalaciones y explica las reglas de convivencia.",
          "Cada familia arregla y paga su transporte a Villa La Angostura. La coordinación de los viajes de regreso se comunicará antes del campamento.",
          "La coordinación centraliza las novedades y los canales de comunicación se comunicarán antes de la experiencia.",
          "El procedimiento de emergencia cubrirá la comunicación familiar, el acceso a asistencia médica y las responsabilidades de coordinadores y proveedores.",
        ],
      },
    ],
    footnote: "La guía completa para las familias sigue disponible en su propia página.",
    footnoteLink: "Abrir la guía completa para las familias",
  },
  closing: {
    heading: "¿Cómo viven la semana?",
    text: "En Villa La Angostura, cada familia puede consultar el programa, las fechas y la disponibilidad para adolescentes de 13 a 17 años.",
    cta: "Consultar disponibilidad",
  },
};
