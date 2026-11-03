import type { Language } from "@/components/home/dictionary";

export type PackingIcon = "shirt" | "footprints" | "backpack" | "fileText";

export type FamiliasCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    image: { src: string; alt: string };
    photos: { src: string; alt: string; caption: string }[];
  };
  faq: {
    heading: string;
    lead: string;
    aside: string;
    items: { question: string; answer: string }[];
  };
  packing: {
    heading: string;
    lead: string;
    note: string;
    groups: { icon: PackingIcon; title: string; items: string[] }[];
  };
  policies: {
    heading: string;
    lead: string;
    groups: { title: string; items: string[] }[];
  };
  download: {
    heading: string;
    text: string;
    button: string;
    fileLabel: string;
    note: string;
  };
  closing: {
    heading: string;
    text: string;
    button: string;
  };
};

const en: FamiliasCopy = {
  meta: {
    title: "Families | Patagonia Summer Camp 2027",
    description:
      "Frequent questions, what to pack, the rules of living together and the family guide for the residential English camp for teenagers aged 13 to 17.",
  },
  hero: {
    titleLines: ["Trust before departure"],
    lead: "A concrete guide to organise the arrival, the health, the safety, the coexistence and the luggage of every participant.",
    image: {
      src: "/camp-media/grupo-caminando.webp",
      alt: "Real camp photograph: a group walking with backpacks along a forest trail",
    },
    photos: [
      {
        src: "/camp-media/grupo-jugando.webp",
        alt: "Real camp photograph: camp participants playing volleyball outdoors",
        caption: "An outdoor game with the mountains behind.",
      },
      {
        src: "/camp-media/kayak-en-el-lago.webp",
        alt: "Real camp photograph: four people paddling kayaks on Lake Nahuel Huapi",
        caption: "Kayaking on Lake Nahuel Huapi.",
      },
      {
        src: "/camp-media/fogata-en-el-bosque.webp",
        alt: "Real camp photograph: people roasting marshmallows around a campfire",
        caption: "The campfire at the end of the day.",
      },
    ],
  },
  faq: {
    heading: "The questions families ask most",
    lead: "These answers summarise the confirmed information. The pending details will be communicated before enrolment and before travelling.",
    aside: "Before making a decision",
    items: [
      {
        question: "What is Patagonia Summer Camp?",
        answer:
          "It is a residential summer experience for teenagers that combines outdoor adventure, English immersion and discovering Patagonia.",
      },
      {
        question: "Which ages is it for?",
        answer: "The programme is exclusively for teenagers aged 13 to 17.",
      },
      {
        question: "When does it take place?",
        answer: "The planned dates are 4 to 12 December 2027.",
      },
      {
        question: "Where does it take place?",
        answer:
          "The programme takes place in a residential base in Villa La Angostura, minutes from the centre. The residence is 2 km from the centre of the town.",
      },
      {
        question: "Is a level of English required?",
        answer:
          "No fixed level is promised. The recommended level and the support for different levels will be communicated before enrolment.",
      },
      {
        question: "How is English used?",
        answer:
          "Every morning there are short, participatory English sessions. The language is also present in the activities, the conversations and daily life.",
      },
      {
        question: "What activities are included?",
        answer:
          "The programme confirms kayak, trekking, visits to local producers, living together and exploring the natural surroundings.",
      },
      {
        question: "Is previous outdoor experience needed?",
        answer:
          "Not in general. Each activity may have specific requirements, which will be communicated together with the necessary equipment.",
      },
      {
        question: "How is supervision carried out?",
        answer:
          "Participants are accompanied by a coordination team. The organisation, the supervision and the rules of living together will be provided before enrolment.",
      },
      {
        question: "How is a medical incident handled?",
        answer:
          "The emergency procedures, the medical assistance measures, the insurance conditions and the family communication channels will be communicated before enrolment.",
      },
      {
        question: "What are the accommodation and the meals like?",
        answer:
          "The experience is residential in Villa La Angostura. The room distribution, the meals, the included services and other details will be provided with the definitive programme.",
      },
      {
        question: "Is the travel included?",
        answer:
          "Each family arranges and pays for its own transport to Villa La Angostura. Transport from other provinces is not included in the programme price.",
      },
      {
        question: "Which regions can take part and what is the price?",
        answer:
          "The programme is open to teenagers from Buenos Aires and other provinces. The value and the enrolment conditions will be communicated to families, with the included services and the additional costs.",
      },
      {
        question: "How do I request the programme?",
        answer:
          "Families can ask the organisation for the programme and for information about dates, activities, accommodation, costs and enrolment.",
      },
    ],
  },
  packing: {
    heading: "What to pack",
    lead: "Check the list before every activity. Label clothing and personal items with the participant's full name.",
    note: "Do not bring valuable objects or specialised equipment without prior consultation. Wait for the team instructions before buying or hiring equipment for kayak, rafting or other activities.",
    groups: [
      {
        icon: "shirt",
        title: "Clothes",
        items: [
          "Underwear and socks for the whole stay",
          "Comfortable t-shirts and trousers",
          "Sportswear",
          "Fleece or warm layer",
          "Waterproof and windproof jacket",
          "Long trousers and comfortable clothes for free time",
          "Pyjamas",
          "Swimsuit",
          "Sun hat and sunglasses",
        ],
      },
      {
        icon: "footprints",
        title: "Footwear",
        items: [
          "Comfortable walking shoes",
          "Trekking footwear, as previously indicated",
          "Sandals or footwear for the residence facilities",
        ],
      },
      {
        icon: "backpack",
        title: "Outdoor activities",
        items: [
          "Small backpack",
          "Reusable water bottle",
          "Sunscreen",
          "Insect repellent",
          "Sunglasses",
          "Personal towel and, if needed, an activity towel",
          "Bag for wet or used clothing",
        ],
      },
      {
        icon: "fileText",
        title: "Hygiene and documents",
        items: [
          "Toothbrush and toothpaste",
          "Shampoo and soap",
          "Deodorant",
          "Any other personal products you need",
          "Identity document",
          "Medical cover information",
          "Medication and instructions, if needed",
          "Authorisations and forms requested by the organisation",
        ],
      },
    ],
  },
  policies: {
    heading: "What we ask of every family",
    lead: "The operational guidance families need before the camp. The pending procedures are confirmed before the experience.",
    groups: [
      {
        title: "Personal money",
        items: [
          "A moderate amount of money for small personal expenses is recommended, if needed.",
          "Valuable objects, expensive devices, jewellery and unnecessary items should not be brought.",
          "The procedures for money, objects and lost belongings will be communicated before the camp.",
        ],
      },
      {
        title: "Phone custody",
        items: [
          "The use rules will prioritise participation, rest and face-to-face interaction, without cutting off family communication.",
          "The final schedules and the custody rules will be communicated before the camp.",
        ],
      },
      {
        title: "Living together",
        items: [
          "Respect peers, the team and the providers; follow safety instructions; care for the facilities, the equipment and the nature; and respect the schedules and the coexistence rules.",
          "Harassment, discrimination, intimidation, violence and the consumption of alcohol, drugs, tobacco or any other conduct that compromises safety or wellbeing are not permitted.",
        ],
      },
      {
        title: "Medical information and emergency contacts",
        items: [
          "Families must report allergies, medical conditions, medication and instructions, dietary restrictions, activity restrictions, medical cover and emergency contacts.",
          "Medication must arrive identified and accompanied by clear instructions.",
          "The procedure for storage, administration and supervision will be communicated before the camp.",
          "Families will be contacted as soon as possible when a medical or safety situation requires it.",
        ],
      },
      {
        title: "Preparing the trip",
        items: [
          "The coordination team receives participants at the place and time communicated in advance. On arrival, the team organises the luggage, introduces the coordinators and the facilities and explains the coexistence rules.",
          "Each family arranges and pays for its own transport to Villa La Angostura. The coordination of the return journeys will be communicated before the camp.",
          "The coordination centralises the updates and the communication channels will be communicated before the experience.",
          "The emergency procedure will cover family communication, access to medical assistance and the responsibilities of coordinators and providers.",
        ],
      },
    ],
  },
  download: {
    heading: "Take the family guide with you",
    text: "The guide gathers the introduction, the four packing categories, the family policies and the list of frequent questions in one printable document, in English and Spanish.",
    button: "Download the family guide",
    fileLabel: "Family guide (PDF)",
    note: "Pending procedures are confirmed before the trip.",
  },
  closing: {
    heading: "Your family has a particular question?",
    text: "Families can ask the organisation for the programme and for information about dates, activities, accommodation, costs and enrolment.",
    button: "Request information",
  },
};

const es: FamiliasCopy = {
  meta: {
    title: "Familias | Patagonia Summer Camp 2027",
    description:
      "Preguntas frecuentes, qué llevar, las normas de convivencia y la guía para familias del campamento residencial de inglés para adolescentes de 13 a 17 años.",
  },
  hero: {
    titleLines: ["Confianza antes de partir"],
    lead: "Una guía concreta para organizar la llegada, la salud, la seguridad, la convivencia y el equipaje de cada participante.",
    image: {
      src: "/camp-media/grupo-caminando.webp",
      alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
    },
    photos: [
      {
        src: "/camp-media/grupo-jugando.webp",
        alt: "Fotografía real del campamento: participantes jugando al voleibol al aire libre",
        caption: "Un juego al aire libre con las montañas de fondo.",
      },
      {
        src: "/camp-media/kayak-en-el-lago.webp",
        alt: "Fotografía real del campamento: cuatro personas remando en kayaks sobre el lago Nahuel Huapi",
        caption: "Kayak sobre el lago Nahuel Huapi.",
      },
      {
        src: "/camp-media/fogata-en-el-bosque.webp",
        alt: "Fotografía real del campamento: personas tostando marshmallows alrededor de una fogata",
        caption: "La fogata al final del día.",
      },
    ],
  },
  faq: {
    heading: "Las dudas más comunes, reunidas en un mismo lugar",
    lead: "Estas respuestas resumen los datos confirmados. Los detalles pendientes se comunicarán antes de la inscripción y antes de viajar.",
    aside: "Antes de decidirse",
    items: [
      {
        question: "¿Qué es Patagonia Summer Camp?",
        answer:
          "Es una experiencia de verano residencial para adolescentes que combina aventura al aire libre, inmersión en inglés y descubrimiento de Patagonia.",
      },
      {
        question: "¿Para qué edades es?",
        answer: "El programa es exclusivamente para adolescentes de 13 a 17 años.",
      },
      {
        question: "¿Cuándo se realiza?",
        answer: "Las fechas planificadas son del 4 al 12 de diciembre de 2027.",
      },
      {
        question: "¿Dónde se realiza?",
        answer:
          "El programa se realiza en una base residencial en Villa La Angostura, a minutos del centro. La residencia está a 2 km del centro de la ciudad.",
      },
      {
        question: "¿Se requiere un nivel de inglés?",
        answer:
          "No se promete un nivel fijo. El nivel recomendado y el apoyo para distintos niveles se comunicarán antes de la inscripción.",
      },
      {
        question: "¿Cómo se usa el inglés?",
        answer:
          "Cada mañana hay sesiones breves y participativas de inglés. El idioma también está presente en las actividades, las conversaciones y la vida cotidiana.",
      },
      {
        question: "¿Qué actividades incluye?",
        answer:
          "El programa confirma kayak, trekking, visitas a productores locales, convivencia y exploración del entorno natural.",
      },
      {
        question: "¿Se necesita experiencia outdoor previa?",
        answer:
          "No se requiere en general. Cada actividad puede tener requisitos específicos, que se comunicarán junto con el equipamiento necesario.",
      },
      {
        question: "¿Cómo se realiza la supervisión?",
        answer:
          "Los participantes están acompañados por un equipo de coordinación. La organización, supervisión y reglas de convivencia se proporcionarán antes de la inscripción.",
      },
      {
        question: "¿Cómo se atiende una incidencia médica?",
        answer:
          "Los procedimientos de emergencia, las medidas de asistencia médica, las condiciones del seguro y los canales de comunicación familiar se comunicarán antes de la inscripción.",
      },
      {
        question: "¿Cómo son el alojamiento y las comidas?",
        answer:
          "La experiencia es residencial en Villa La Angostura. La distribución de habitaciones, las comidas, los servicios incluidos y otros detalles se proporcionarán con el programa definitivo.",
      },
      {
        question: "¿El viaje está incluido?",
        answer:
          "Cada familia organiza y paga su transporte a Villa La Angostura. El transporte desde otras provincias no está incluido en el precio del programa.",
      },
      {
        question: "¿Desde qué regiones se puede participar y cuál es el precio?",
        answer:
          "El programa está abierto a adolescentes de Buenos Aires y otras provincias. El valor y las condiciones de inscripción se comunicarán a las familias, con los servicios incluidos y los gastos adicionales.",
      },
      {
        question: "¿Cómo se solicita el programa?",
        answer:
          "Las familias pueden solicitar a la organización el programa y la información sobre fechas, actividades, alojamiento, costos e inscripción.",
      },
    ],
  },
  packing: {
    heading: "La lista de equipaje",
    lead: "Revisá la lista antes de cada actividad. Etiquetá la ropa y los objetos personales con el nombre completo del participante.",
    note: "No traigas objetos de valor ni equipamiento especializado sin consulta previa. Esperá las instrucciones del equipo antes de comprar o rentar equipamiento para kayak, rafting u otras actividades.",
    groups: [
      {
        icon: "shirt",
        title: "Ropa",
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
        icon: "footprints",
        title: "Calzado",
        items: [
          "Zapatillas cómodas para caminar",
          "Calzado de trekking, según las indicaciones previas",
          "Sandalias o calzado para las instalaciones de la residencia",
        ],
      },
      {
        icon: "backpack",
        title: "Actividades al aire libre",
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
        icon: "fileText",
        title: "Higiene y documentos",
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
  },
  policies: {
    heading: "La organización familiar, paso a paso",
    lead: "La orientación operativa que las familias necesitan antes del campamento. Los procedimientos pendientes se confirman antes de la experiencia.",
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
  },
  download: {
    heading: "Llevá la guía para familias",
    text: "La guía reúne la introducción, las cuatro categorías de equipaje, la organización familiar y la lista de preguntas frecuentes en un solo documento imprimible, en español e inglés.",
    button: "Descargar la guía para familias",
    fileLabel: "Guía para familias (PDF)",
    note: "Los procedimientos pendientes se confirman antes del viaje.",
  },
  closing: {
    heading: "¿Tu familia tiene una pregunta particular?",
    text: "Las familias pueden solicitar a la organización el programa y la información sobre fechas, actividades, alojamiento, costos e inscripción.",
    button: "Consultar información",
  },
};

export const familiasCopy: Record<Language, FamiliasCopy> = { en, es };
