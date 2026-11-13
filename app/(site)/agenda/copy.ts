import type { Language } from "@/components/home/dictionary";
import type { AgendaFormCopy, AgendaPhoto } from "@/components/forms/video-call-types";

export type { AgendaFormCopy, AgendaPhoto } from "@/components/forms/video-call-types";

export type AgendaCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    facts: { value: string; note: string }[];
    primaryCta: string;
    secondaryCta: string;
    image: { src: string; alt: string };
  };
  slots: {
    headingLines: string[];
    lead: string;
    dayLabel: string;
    timeLabel: string;
    timezoneNote: string;
    empty: string;
    chosen: string;
    continueCta: string;
  };
  form: AgendaFormCopy;
  call: {
    headingLines: string[];
    lead: string;
    items: { title: string; text: string }[];
    photos: AgendaPhoto[];
  };
  faq: {
    headingLines: string[];
    lead: string;
    items: { question: string; answer: string }[];
  };
  closing: {
    headingLines: string[];
    text: string;
    button: string;
    link: string;
  };
};

const en: AgendaCopy = {
  meta: {
    title: "Book your video call | Patagonia Summer Camp 2027",
    description:
      "Book a 30-minute video call with the Patagonia Summer Camp team: programme, residence, daily life and every question you have.",
  },
  hero: {
    titleLines: ["Book your video call"],
    lead: "Thirty minutes with the camp team to settle, live, everything you want to know about the programme, the residence and life in the Patagonia.",
    facts: [
      { value: "30 minutes", note: "A short, concrete call." },
      { value: "UTC−3", note: "Every slot is Argentina time." },
      { value: "English or Spanish", note: "You choose the language of the call." },
    ],
    primaryCta: "Choose your slot",
    secondaryCta: "See the programme",
    image: {
      src: "/camp-media/residencia-y-parque.png",
      alt: "The camp residence in Villa La Angostura with the park and the lenga forest behind it",
    },
  },
  slots: {
    headingLines: ["Pick a day", "and time"],
    lead: "Every slot lasts 30 minutes, Monday to Friday. Once you pick one, the team sends the call link by email.",
    dayLabel: "Day",
    timeLabel: "Time",
    timezoneNote: "Argentina time (UTC−3)",
    empty: "You have not picked a slot yet.",
    chosen: "Your slot: {day} at {time}.",
    continueCta: "Continue with your details",
  },
  form: {
    fields: {
      name: "Name",
      namePlaceholder: "Who are we talking to?",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      phoneOptional: "Optional",
      topic: "What do you want to talk about?",
      topicOptions: [
        "The programme and the English",
        "The residence and accommodation",
        "Safety and supervision",
        "Costs and enrolment",
        "Something else",
      ],
      language: "Language of the call",
      languageOptions: ["Spanish", "English"],
      message: "Anything else we should know?",
      messagePlaceholder: "Optional. Tell us what you want to cover in the call.",
    },
    errors: {
      name: "Tell us your name.",
      email: "Check the email address.",
      topic: "Pick a topic.",
      slot: "Pick a day and time before sending.",
    },
    submit: {
      button: "Request the slot",
      sending: "Preparing the request…",
      note: "This is the front end: the request does not travel to a server yet.",
    },
    success: {
      title: "Slot ready",
      text: "Your request is assembled on this device. When the form is connected to the server, it leaves with exactly this shape.",
      summaryLabel: "Request summary",
      again: "Pick another slot",
    },
  },
  call: {
    headingLines: ["In a single", "call"],
    lead: "It is not a presentation: it is a walk through the camp that answers your questions.",
    items: [
      {
        title: "The programme and the English",
        text: "What the participants do every day and how the English works in practice.",
      },
      {
        title: "The residence",
        text: "Where they sleep, what the house is like and how the daily life runs.",
      },
      {
        title: "Safety and supervision",
        text: "The leaders, the transfers and how every group is coordinated.",
      },
      {
        title: "Costs and enrolment",
        text: "What the stay includes and how the booking works.",
      },
      {
        title: "Everything else",
        text: "The trip, the food, the forest: ask whatever you need.",
      },
    ],
    photos: [
      {
        src: "/camp-media/senderismo-con-villa-al-fondo.webp",
        alt: "A walk through the lenga forest with Villa La Angostura in the background",
        caption: "Senderismo con Villa La Angostura al fondo",
      },
      {
        src: "/camp-media/actividad-nocturna.jpg",
        alt: "Camp activity at night",
        caption: "Actividad nocturna",
      },
      {
        src: "/camp-media/almuerzo-camp.jpg",
        alt: "Lunch at the camp",
        caption: "Almuerzo en el campamento",
      },
      {
        src: "/camp-media/noche-estrellada-cordillera.jpg",
        alt: "Starry night over the mountain range",
        caption: "Noche estrellada sobre la cordillera",
      },
    ],
  },
  faq: {
    headingLines: ["Frequent", "questions"],
    lead: "What families ask before they decide.",
    items: [
      {
        question: "How long is the video call?",
        answer: "Thirty minutes. If topics are left, we keep going by email.",
      },
      {
        question: "Which language do we speak?",
        answer: "The one you pick when booking. If you prefer another, say it in the message and we will sort it out.",
      },
      {
        question: "How do I receive the link?",
        answer: "The team sends it by email once the slot is confirmed.",
      },
      {
        question: "Is the call recorded?",
        answer: "No. It is a thirty-minute conversation.",
      },
      {
        question: "What if that time does not work?",
        answer: "You can pick another slot on the sheet above, or write to us through the contact form.",
      },
      {
        question: "What should I have clear beforehand?",
        answer: "The dates (4 to 12 December 2027), the age (13 to 17) and whether the trip is on your own. The rest we see on the call.",
      },
    ],
  },
  closing: {
    headingLines: ["Rather write", "to us?"],
    text: "If writing is easier for you, send us a message through the contact form. We answer in Spanish and English.",
    button: "Write to the camp",
    link: "Read the families questions",
  },
};

const es: AgendaCopy = {
  meta: {
    title: "Agenda tu videollamada | Patagonia Summer Camp 2027",
    description:
      "Pedí una videollamada de 30 minutos con el equipo de Patagonia Summer Camp 2027: programa, residencia, día a día y todas tus preguntas.",
  },
  hero: {
    titleLines: ["Agenda tu videollamada"],
    lead: "Treinta minutos con el equipo del campamento para resolver, en vivo, todo lo que quieras saber del programa, la residencia y la vida en la Patagonia.",
    facts: [
      { value: "30 minutos", note: "Una llamada corta y concreta." },
      { value: "UTC−3", note: "Todos los horarios son de Argentina." },
      { value: "Español o inglés", note: "Elegís el idioma de la llamada." },
    ],
    primaryCta: "Elegí tu turno",
    secondaryCta: "Ver el programa",
    image: {
      src: "/camp-media/residencia-y-parque.png",
      alt: "La residencia del campamento en Villa La Angostura, con el parque y el bosque de lenga detrás",
    },
  },
  slots: {
    headingLines: ["Elegí día", "y hora"],
    lead: "Los turnos son de 30 minutos, de lunes a viernes. Cuando elijas uno, el equipo te manda el enlace de la videollamada por email.",
    dayLabel: "Día",
    timeLabel: "Horario",
    timezoneNote: "Horarios de Argentina (UTC−3)",
    empty: "Todavía no elegiste un turno.",
    chosen: "Tu turno: {day} a las {time}.",
    continueCta: "Continuar con tus datos",
  },
  form: {
    fields: {
      name: "Nombre",
      namePlaceholder: "¿Con quién hablamos?",
      email: "Email",
      emailPlaceholder: "vos@email.com",
      phone: "Teléfono",
      phoneOptional: "Opcional",
      topic: "¿Sobre qué querés hablar?",
      topicOptions: [
        "El programa y el inglés",
        "La residencia y el alojamiento",
        "La seguridad y el acompañamiento",
        "Los costos y la inscripción",
        "Otra cosa",
      ],
      language: "Idioma de la llamada",
      languageOptions: ["Español", "Inglés"],
      message: "¿Algo más que debamos saber?",
      messagePlaceholder: "Opcional. Contanos qué querés ver en la llamada.",
    },
    errors: {
      name: "Escribí tu nombre.",
      email: "Revisá el email.",
      topic: "Elegí un motivo.",
      slot: "Elegí día y hora antes de enviar.",
    },
    submit: {
      button: "Pedir el turno",
      sending: "Preparando el pedido…",
      note: "Esta es la parte de front: el pedido todavía no viaja a ningún servidor.",
    },
    success: {
      title: "Turno preparado",
      text: "Tu pedido quedó armado en este dispositivo. Cuando el formulario se conecte al servidor, se envía con esta misma forma.",
      summaryLabel: "Resumen del pedido",
      again: "Elegir otro turno",
    },
  },
  call: {
    headingLines: ["En una sola", "llamada"],
    lead: "No es una presentación: es un recorrido por el campamento para responder tus preguntas.",
    items: [
      {
        title: "El programa y el inglés",
        text: "Qué hacen los participantes cada día y cómo se trabaja el inglés en la práctica.",
      },
      {
        title: "La residencia",
        text: "Dónde duermen, cómo es la casa y cómo se vive el día a día.",
      },
      {
        title: "La seguridad y el acompañamiento",
        text: "Los mayores, los traslados y la coordinación de cada grupo.",
      },
      {
        title: "Los costos y la inscripción",
        text: "Qué incluye la estadía y cómo se reserva.",
      },
      {
        title: "Todo lo demás",
        text: "El viaje, la comida, el bosque: preguntá lo que quieras.",
      },
    ],
    photos: [
      {
        src: "/camp-media/senderismo-con-villa-al-fondo.webp",
        alt: "Caminata por el bosque de lenga con Villa La Angostura al fondo",
        caption: "Senderismo con Villa La Angostura al fondo",
      },
      {
        src: "/camp-media/actividad-nocturna.jpg",
        alt: "Actividad del campamento de noche",
        caption: "Actividad nocturna",
      },
      {
        src: "/camp-media/almuerzo-camp.jpg",
        alt: "Almuerzo en el campamento",
        caption: "Almuerzo en el campamento",
      },
      {
        src: "/camp-media/noche-estrellada-cordillera.jpg",
        alt: "Noche estrellada sobre la cordillera",
        caption: "Noche estrellada sobre la cordillera",
      },
    ],
  },
  faq: {
    headingLines: ["Preguntas", "frecuentes"],
    lead: "Lo que preguntan las familias antes de decidir.",
    items: [
      {
        question: "¿Cuánto dura la videollamada?",
        answer: "Treinta minutos. Si quedan temas, los seguimos por email.",
      },
      {
        question: "¿En qué idioma la hacemos?",
        answer: "En el que elijas al agendar. Si preferís otro, decilo en el mensaje y lo arreglamos.",
      },
      {
        question: "¿Cómo recibo el enlace?",
        answer: "El equipo te lo manda por email al confirmar el turno.",
      },
      {
        question: "¿Se graba la llamada?",
        answer: "No. Es una conversación de treinta minutos.",
      },
      {
        question: "¿Y si ese horario no me sirve?",
        answer: "Podés elegir otro turno en la hoja de arriba o escribirnos por el formulario de contacto.",
      },
      {
        question: "¿Qué debería tener claro antes?",
        answer: "Las fechas (4 al 12 de diciembre de 2027), la edad (13 a 17 años) y si el viaje corre por tu cuenta. El resto lo vemos en la llamada.",
      },
    ],
  },
  closing: {
    headingLines: ["¿Preferís", "escribir?"],
    text: "Si te queda más cómodo, escribinos por el formulario de contacto. Contestamos en español e inglés.",
    button: "Escribir al campamento",
    link: "Ver las preguntas de las familias",
  },
};

export const agendaCopy: Record<Language, AgendaCopy> = { en, es };
