import type { Language } from "@/components/home/dictionary";

export type ContactoPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type ContactoFormCopy = {
  errors: {
    name: string;
    email: string;
    message: string;
  };
  success: {
    title: string;
    text: string;
    button: string;
  };
  fields: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phoneOptional: string;
    interest: string;
    interestPlaceholder: string;
    interestOptions: string[];
    message: string;
    messagePlaceholder: string;
    messageHelp: string;
  };
  submit: {
    consent: string;
    sending: string;
    button: string;
  };
};

export type ContactoCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    cta: string;
    image: { src: string; alt: string };
  };
  body: {
    titleLines: string[];
    text: string;
    facts: string[];
  };
  gallery: {
    heading: string;
    lead: string;
    photos: ContactoPhoto[];
  };
  closing: {
    heading: string;
    text: string;
    button: string;
  };
  form: ContactoFormCopy;
};

const en: ContactoCopy = {
  meta: {
    title: "Contact | Patagonia Summer Camp 2027",
    description:
      "Contact us to learn about Patagonia Summer Camp 2027: dates, English programme, activities, accommodation, safety and enrolment for teenagers aged 13 to 17.",
  },
  hero: {
    titleLines: ["One conversation can be", "the beginning of everything."],
    lead: "Ask us about Patagonia Summer Camp 2027. We will help you understand the programme, the dates and the next steps for your family.",
    cta: "Write to us",
    image: {
      src: "/hero-villa-la-angostura.webp",
      alt: "Panoramic view of Villa La Angostura: turquoise lake, native forest and mountains",
    },
  },
  body: {
    titleLines: ["Tell us what you need", "to know."],
    text: "You can ask us about any aspect of the experience. Pending details —such as price, cover, rooms and final organisation— are confirmed before enrolment.",
    facts: [
      "Questions about the English programme and the experiences",
      "Planned dates: 4 to 12 December 2027",
      "For teenagers aged 13 to 17",
      "Residential experience in Villa La Angostura, Neuquén",
    ],
  },
  gallery: {
    heading: "The camp you are about to discover",
    lead: "The team, the territory and the shared experience that make a week in Villa La Angostura possible.",
    photos: [
      {
        src: "/camp-media/grupo-caminando.webp",
        alt: "Real camp photograph: a group walking with backpacks along a forest trail",
        caption: "The group in the mountains",
      },
      {
        src: "/camp-media/productores-locales.webp",
        alt: "Real camp photograph: visiting local producers and their craft",
        caption: "Encounters with the territory",
      },
      {
        src: "/camp-media/kayak-en-el-lago.webp",
        alt: "Real camp photograph: a group kayaking on the lake with mountains behind",
        caption: "The water as a classroom",
      },
    ],
  },
  closing: {
    heading: "Ready to start a conversation?",
    text: "Ask us about Patagonia Summer Camp 2027 and the next steps for your family.",
    button: "Send an inquiry",
  },
  form: {
    errors: {
      name: "Enter the family name.",
      email: "Enter a valid email address.",
      message: "Tell us briefly what information you need.",
    },
    success: {
      title: "Message prepared",
      text: "The form has been completed. Sending will be enabled when the real contact channel is connected.",
      button: "Write another message",
    },
    fields: {
      name: "Family name",
      namePlaceholder: "How can we address you?",
      email: "Email address",
      emailPlaceholder: "name@example.com",
      phone: "Phone",
      phoneOptional: "(optional)",
      interest: "What would you like to know?",
      interestPlaceholder: "Select an option",
      interestOptions: [
        "Dates and availability",
        "English programme",
        "Activities and experiences",
        "Accommodation and transport",
        "Safety and the family guide",
        "Another inquiry",
      ],
      message: "Message",
      messagePlaceholder: "Tell us what information you need",
      messageHelp: "Price, cover and logistics details are confirmed before enrolment.",
    },
    submit: {
      consent: "By sending, you agree that the organisation will use these details only to answer your inquiry.",
      sending: "Sending",
      button: "Send inquiry",
    },
  },
};

const es: ContactoCopy = {
  meta: {
    title: "Contacto | Patagonia Summer Camp 2027",
    description:
      "Contactanos para conocer Patagonia Summer Camp 2027: fechas, inglés, actividades, alojamiento, seguridad e inscripción para adolescentes de 13 a 17 años.",
  },
  hero: {
    titleLines: ["Una conversación puede ser", "el comienzo de todo."],
    lead: "Consultanos por Patagonia Summer Camp 2027. Te ayudaremos a entender el programa, las fechas y los próximos pasos para tu familia.",
    cta: "Escribinos",
    image: {
      src: "/hero-villa-la-angostura.webp",
      alt: "Vista panorámica de Villa La Angostura: lago turquesa, bosque nativo y montañas",
    },
  },
  body: {
    titleLines: ["Contanos qué necesitás", "saber."],
    text: "Podés preguntarnos por cualquier aspecto de la experiencia. Los datos pendientes —como precio, cobertura, habitaciones y organización final— se confirman antes de la inscripción.",
    facts: [
      "Consultas sobre el programa de inglés y las experiencias",
      "Fechas previstas: 4 al 12 de diciembre de 2027",
      "Para adolescentes de 13 a 17 años",
      "Experiencia residencial en Villa La Angostura, Neuquén",
    ],
  },
  gallery: {
    heading: "El campamento que estás por conocer",
    lead: "El equipo, el territorio y la convivencia que hacen posible una semana en Villa La Angostura.",
    photos: [
      {
        src: "/camp-media/grupo-caminando.webp",
        alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
        caption: "El grupo en la montaña",
      },
      {
        src: "/camp-media/productores-locales.webp",
        alt: "Fotografía real del campamento: visita a productores locales y su oficio",
        caption: "Encuentros con el territorio",
      },
      {
        src: "/camp-media/kayak-en-el-lago.webp",
        alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
        caption: "El agua como aula",
      },
    ],
  },
  closing: {
    heading: "¿Listos para comenzar una conversación?",
    text: "Consultanos por Patagonia Summer Camp 2027 y por los próximos pasos para tu familia.",
    button: "Enviar consulta",
  },
  form: {
    errors: {
      name: "Ingresá el nombre de la familia.",
      email: "Ingresá un correo electrónico válido.",
      message: "Contanos brevemente qué información necesitás.",
    },
    success: {
      title: "Mensaje preparado",
      text: "La interfaz quedó completada. El envío se habilitará cuando se conecte el canal real de contacto.",
      button: "Escribir otro mensaje",
    },
    fields: {
      name: "Nombre de la familia",
      namePlaceholder: "Cómo podemos llamarte",
      email: "Correo electrónico",
      emailPlaceholder: "nombre@ejemplo.com",
      phone: "Teléfono",
      phoneOptional: "(opcional)",
      interest: "¿Qué te gustaría conocer?",
      interestPlaceholder: "Seleccioná una opción",
      interestOptions: [
        "Fechas y disponibilidad",
        "Programa de inglés",
        "Actividades y experiencias",
        "Alojamiento y transporte",
        "Seguridad y guía para familias",
        "Otra consulta",
      ],
      message: "Mensaje",
      messagePlaceholder: "Contanos qué información necesitás",
      messageHelp: "Los detalles de precio, cobertura y logística se confirman antes de la inscripción.",
    },
    submit: {
      consent: "Al enviar, aceptás que la organización use estos datos únicamente para responder tu consulta.",
      sending: "Enviando",
      button: "Enviar consulta",
    },
  },
};

export const contactoCopy: Record<Language, ContactoCopy> = { en, es };
