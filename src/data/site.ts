/**
 * Fuente única de verdad del sitio. Nada de números hardcodeados en componentes:
 * todo el contenido sale de acá. Los datos no confirmados quedan en 0 a propósito —
 * los componentes que los consumen tienen que hacer guard (if (!valor) return null)
 * y NUNCA renderizar un "0" o "+0" en pantalla.
 */

export const organizacion = {
  razonSocial: "Plantify S.A.",
  direccion: "Sinclair 3139, Piso 4 Dep. A, CABA (1425), Argentina",
  telefono: "+54 9 3416 82-7695",
  whatsappNumero: "5493416827695", // wa.me/{numero} — único número del proyecto, sin +34
  email: "contacto@plantify.bio",
  sitio: "https://plantify.bio",
};

export const reserva = {
  nombre: "Los Tualdos",
  localidad: "Paranacito, Delta del Paraná",
  provincia: "Entre Ríos",
  arboles: 80000, // se muestra como "+80.000"
  hectareas: 340,
  hectareasAsignadas: 0, // TODO: completar con el dato real antes de publicar
  coordenadas: { lat: -33.7, lng: -58.65 }, // aproximadas — TODO: ajustar con coordenadas exactas
  fechaDato: "Auditoría Control Union, campaña 2026",
};

export type ActividadVisita = {
  icono: string; // nombre de ícono de lucide-react
  titulo: string;
  texto: string;
  imagen: "faunaDelta" | "plantarArbol" | "caminarReserva" | "diaEnFamilia";
};

export const comunidad = {
  titulo: "Comunidad",
  bajada:
    "Creemos que conocer la reserva de cerca cambia la forma en que te relacionás con ella. Por eso, los fines de semana abrimos Los Tualdos para que vengas con tu familia, conozcas a los animales que viven ahí y, si querés, plantes tu propio árbol.",
  actividades: [
    {
      icono: "PawPrint",
      titulo: "Ver los animales de la reserva",
      texto: "Ñandúes, ciervos, llamas y otros animales que conviven en la reserva, en su ambiente natural.",
      imagen: "faunaDelta",
    },
    {
      icono: "Sprout",
      titulo: "Plantar tu árbol",
      texto: "Si querés, plantás uno con tus propias manos y después le seguís el rastro en las fotos de temporada.",
      imagen: "plantarArbol",
    },
    {
      icono: "Footprints",
      titulo: "Caminar la reserva",
      texto: "Recorremos los senderos y te contamos cómo cuidamos cada sector, paso a paso.",
      imagen: "caminarReserva",
    },
    {
      icono: "Users",
      titulo: "Pasar el día en familia",
      texto: "Traé a los chicos. Hay tiempo para caminar, para mirar el río y para no hacer nada.",
      imagen: "diaEnFamilia",
    },
  ] satisfies ActividadVisita[],
  duracion: "Un día completo. Si querés quedarte el fin de semana, lo coordinamos con anticipación.",
  comoLlegar:
    "Coordinamos el horario de salida con anticipación y volvemos el mismo día, salvo que te quedes el fin de semana.",
  incluye: [
    "Traslado desde Paranacito",
    "Recorrida guiada por la reserva",
    "La posibilidad de plantar tu propio árbol",
    "Avistaje de los animales de la reserva",
  ],
};

export const co2 = {
  proyectadoTn: 0, // TODO: completar — estimación alométrica IPCC
  verificadoTn: 0, // TODO: completar — solo lo auditado por Control Union
  metodologia: "Estimación alométrica según metodología IPCC",
};


export type Certificacion = {
  nombre: string;
  descripcion: string;
  detalle: string;
};

export const certificaciones: Certificacion[] = [
  {
    nombre: "Control Union",
    descripcion: "Auditor certificador",
    detalle:
      "Audita Los Tualdos una vez por año, en el terreno, con trazabilidad por hectárea y coordenadas GPS — la misma seriedad que necesitás para tu reporte de sostenibilidad.",
  },
];

// Gold Standard va separado de Control Union: solo como "cucarda" de validación,
// con los datos del listado. Sin valor por tonelada ni modelo comercial.
// Mientras falten numeroListado o periodo, la cucarda solo se ve en desarrollo.
export const goldStandard = {
  numeroListado: "", // TODO: completar con el número de listado real
  hectareasElegibles: 172,
  periodo: "", // TODO: completar con el período del listado
};

export type Paso = {
  anio: string;
  titulo: string;
  hacemos: string;
  recibis: string;
};

export const pasos: Paso[] = [
  {
    anio: "Año 0",
    titulo: "Diseñamos y plantamos",
    hacemos:
      "Delimitamos tu sector dentro de Los Tualdos, elegimos las especies según el terreno y plantamos en la temporada correspondiente.",
    recibis: "Las coordenadas de tu sector y las primeras fotos de la plantación.",
  },
  {
    anio: "Años 1-3",
    titulo: "Cuidamos los plantines",
    hacemos:
      "Hacemos el seguimiento de prendimiento, reponemos lo que no arraigó y controlamos el crecimiento temprano.",
    recibis: "Fotos georreferenciadas cada temporada y un informe de estado.",
  },
  {
    anio: "Años 4 en adelante",
    titulo: "Monitoreamos y auditamos",
    hacemos:
      "Medimos el crecimiento, estimamos la captura de carbono con metodología alométrica IPCC y pasamos por la auditoría anual de Control Union.",
    recibis: "El informe auditado de cada campaña y el certificado digital actualizado.",
  },
  {
    anio: "Cierre",
    titulo: "Cerramos el ciclo",
    hacemos: "Hacemos la medición final y consolidamos todos los datos de tu sector.",
    recibis: "El informe final, con el detalle completo de lo plantado, cuidado y verificado.",
  },
];

export type Entregable = {
  icono: string; // nombre de ícono de lucide-react
  texto: string;
  categoria: "institucional" | "marketing";
};

export const entregables: Entregable[] = [
  { icono: "MapPin", texto: "Sector delimitado a tu nombre", categoria: "institucional" },
  { icono: "Camera", texto: "Fotos georreferenciadas cada temporada", categoria: "institucional" },
  {
    icono: "FileCheck2",
    texto: "Informe anual auditado por Control Union",
    categoria: "institucional",
  },
  { icono: "BadgeCheck", texto: "Certificado digital", categoria: "institucional" },
  { icono: "Footprints", texto: "Visita guiada a la reserva", categoria: "institucional" },
  {
    icono: "Share2",
    texto: "Material listo para tus redes y tu reporte",
    categoria: "marketing",
  },
  {
    icono: "Megaphone",
    texto: "Banners, QRs físicos y soporte de comunicación para diferenciarte de tu competencia",
    categoria: "marketing",
  },
  {
    icono: "FileText",
    texto: "Documento y proceso de onboarding",
    categoria: "marketing",
  },
];

export type FotoSector = {
  fecha: string;
  slotImagen: "reserva" | "plantacion" | "comunidad";
  alt: string;
};

export type Sector = {
  slug: string;
  empresa: string;
  esDemo?: boolean;
  hectareas: number;
  temporada: string;
  especies: string[];
  estadoAuditoria: string;
  localidad: string;
  aportantes?: number;
  celdas: string[]; // ids de celdas del mapa que ocupa este sector
  fotos: FotoSector[];
};

// Todavía no tenemos clientes reales para publicar acá. En vez de inventar logos,
// dejamos un único caso de ejemplo, claramente marcado como demo, para poder
// mostrar el mapa, el simulador y la página de sector funcionando.
export const sectores: Sector[] = [
  {
    slug: "demo",
    empresa: "Sector demo",
    esDemo: true,
    hectareas: 6,
    temporada: "Otoño 2026",
    especies: ["Sauce criollo", "Aliso de río"],
    estadoAuditoria: "Pendiente de primera auditoría",
    localidad: "Los Tualdos, Paranacito",
    aportantes: 0,
    celdas: ["c12", "c13", "c21", "c22"],
    fotos: [
      { fecha: "Otoño 2026", slotImagen: "plantacion", alt: "Plantación del sector demo, otoño 2026" },
    ],
  },
];

export type Valor = {
  titulo: string;
  texto: string;
};

// Quiénes somos, sin nombres ni fotos.
// TODO: PROPUESTA — validar con Polito que reflejen sus valores.
export const valores: Valor[] = [
  {
    titulo: "Compromiso de largo plazo",
    texto: "Un bosque no se levanta en quince días. Cuidamos cada sector a largo plazo.",
  },
  {
    titulo: "Transparencia",
    texto: "Mostramos lo que hacemos tal cual es, con auditoría externa y sin inflar números.",
  },
  {
    titulo: "Ciencia y trabajo de campo",
    texto: "Ingeniería forestal, monitoreo y medición, con los pies en el Delta todos los días.",
  },
  {
    titulo: "Impacto compartido",
    texto: "Creemos que personas y empresas pueden ser parte real de la regeneración del planeta.",
  },
];

export type EmpresaAliada = {
  nombre: string;
  logo: string;
};

export const empresasAliadas: EmpresaAliada[] = [
  { nombre: "Acrule Hidroponía", logo: "/logos-empresas/acrule.webp" },
  { nombre: "The Green Dog", logo: "/logos-empresas/greendog.png" },
  { nombre: "Hotel Domus Lake", logo: "/logos-empresas/domus-lake.png" },
  { nombre: "NOYA", logo: "/logos-empresas/noya.png" },
  { nombre: "MB Trading Group", logo: "/logos-empresas/mb-trading.webp" },
  { nombre: "Tenis Club Zárate", logo: "/logos-empresas/tenis-club-zarate.png" },
  { nombre: "Entre Ríos Crushing", logo: "/logos-empresas/entre-rios-crushing.jpg" },
  { nombre: "Padilla & Serrano", logo: "/logos-empresas/padilla-serrano.png" },
];

export type Faq = {
  pregunta: string;
  respuesta: string;
};

export const faqs: Faq[] = [
  {
    pregunta: "¿Qué especies plantan y por qué esas?",
    respuesta:
      "Priorizamos especies nativas del Delta, como sauce criollo y aliso de río, adaptadas al régimen de crecientes de la zona. La combinación exacta depende del terreno de cada sector.",
  },
  {
    pregunta: "¿Cuántas hectáreas hay plantadas hoy?",
    respuesta:
      "Los Tualdos tiene 340 hectáreas bajo custodia, con más de 80.000 árboles plantados. Publicamos las hectáreas ya asignadas a empresas en esta misma página.",
  },
  {
    pregunta: "¿Puedo elegir dónde queda mi sector?",
    respuesta:
      "Te mostramos los sectores disponibles en el mapa y coordinamos la ubicación según lo que quede libre y las condiciones del terreno para las especies que vas a plantar.",
  },
  {
    pregunta: "¿Me entregan los árboles?",
    respuesta:
      "No. Los árboles quedan en la reserva, bajo nuestro cuidado. Lo que recibís es la titularidad de tu sector, el seguimiento y la documentación.",
  },
  {
    pregunta: "¿Cómo calculan el CO₂?",
    respuesta:
      "Con una estimación alométrica según metodología IPCC. Siempre distinguimos entre CO₂ proyectado (una estimación) y CO₂ verificado (lo que ya pasó por auditoría de Control Union).",
  },
  {
    pregunta: "¿Puedo visitar la reserva?",
    respuesta:
      "Estamos armando el plan de visitas a Los Tualdos, con fechas y cupos. Próximamente lo vas a ver publicado en esta web.",
  },
  {
    pregunta: "¿Qué pasa si dejo de pagar antes de terminar el proyecto?",
    respuesta:
      "Lo conversamos caso por caso al armar la propuesta: lo que ya plantamos y auditamos queda documentado, y ajustamos el alcance del sector al tiempo efectivamente cubierto.",
  },
  {
    pregunta: "¿Esto sirve para mi reporte de sostenibilidad?",
    respuesta:
      "Sí. Te damos el informe auditado, el certificado digital y la distinción entre CO₂ proyectado y verificado para que lo uses en tu reporte sin inflar números.",
  },
];

export type PilarProyecto = {
  titulo: string;
  texto: string;
  imagen: "heroFondo" | "plantacion" | "teamBuilding" | "reserva";
};

// Misión, visión y valores de /nosotros.
// TODO: textos provisorios — Ale arma la versión final (validada con Polito).
export const misionVisionValores = {
  mision:
    "Facilitar y masificar la plantación de árboles, para que personas y empresas puedan ser parte real de la regeneración del planeta.",
  vision:
    "Transformar el mundo en un lugar más verde, sano y sostenible, desarrollando sistemas forestales de alto impacto que combinen ciencia, tecnología, trazabilidad y compromiso social.",
};

export const mision = {
  frase:
    "En Plantify creemos que plantar árboles puede ser mucho más que una acción simbólica: puede ser el motor de un cambio real.",
  vision:
    "Nuestra visión es transformar el mundo en un lugar más verde, sano y sostenible, facilitando que personas y organizaciones se involucren activamente en la regeneración del planeta. Para lograrlo, desarrollamos sistemas forestales de alto impacto, combinando ciencia, tecnología, trazabilidad y compromiso social.",
  pilares: {
    titulo: "Pilares del proyecto",
    subtitulo: "Modelo replicable, responsable y con impacto real",
    items: [
      {
        titulo: "Trazabilidad asegurada",
        texto:
          "Cada hectárea es monitoreada y reportada, permitiendo a cada empresa visualizar su contribución concreta.",
        imagen: "heroFondo",
      },
      {
        titulo: "Estándares preestablecidos",
        texto:
          "Todas las plantaciones se realizan bajo protocolos silvícolas, ambientales y sociales alineados a normativas nacionales e internacionales.",
        imagen: "plantacion",
      },
      {
        titulo: "Certificación y seguimiento",
        texto:
          "El modelo contempla validación ambiental, métricas de carbono y conservación de biodiversidad como parte de un sistema transparente y auditable.",
        imagen: "teamBuilding",
      },
      {
        titulo: "Escalable y adaptable",
        texto:
          "Diseñado para que otras unidades o proveedores de la empresa sponsor puedan incorporarse con facilidad, multiplicando el impacto.",
        imagen: "reserva",
      },
    ] satisfies PilarProyecto[],
  },
};

export type CaracteristicaReserva = {
  icono: "TreePine" | "Droplet" | "Zap";
  titulo: string;
  texto: string;
};

export const caracteristicasReserva: CaracteristicaReserva[] = [
  {
    icono: "TreePine",
    titulo: "Corredor biológico y refugio natural",
    texto:
      "El 10–15% de la reserva está destinado a especies nativas que promueven biodiversidad y funcionan como refugio para aves, insectos y otras especies clave.",
  },
  {
    icono: "Droplet",
    titulo: "Producción sostenible con impacto climático",
    texto:
      "Se emplean especies como Sauce y Álamos, adaptadas al suelo y humedad del Delta, maximizando la captura de CO₂ y la resiliencia ecológica.",
  },
  {
    icono: "Zap",
    titulo: "Infraestructura sostenible",
    texto:
      "Toda el área está protegida por diques vegetados y cuenta con caminos, galpones y paneles solares. El proyecto tiene acceso a rutas fluviales y se desarrolla con energía renovable.",
  },
];

export const datosReserva = {
  ubicacion: "Ibicuy, Entre Ríos, Argentina – en el Delta del Paraná.",
  superficie:
    "Superficie total: 340 hectáreas. Clasificación ambiental: Bosque y humedal deltaico; parte del ecosistema del Bajo Delta.",
};

export type Camino = {
  titulo: string;
  texto: string;
  href: string;
  cta: string;
};

export const presentacion = {
  frase:
    "Plantify es una empresa argentina de desarrollo de sistemas forestales: financiamos, junto con empresas y personas, proyectos de conservación, forestación y captura de carbono. Nuestro proyecto principal es Los Tualdos, una reserva de 340 hectáreas de bosque y humedal deltaico en el Delta del Paraná, Entre Ríos. No somos simplemente \"una empresa que planta árboles\": combinamos forestación y conservación, captura de CO₂, cuidado de la biodiversidad nativa, trazabilidad con seguimiento satelital, certificación ambiental y reportería, para que cada empresa sponsor pueda mostrar su impacto de forma concreta. Tu aporte no compra jurídicamente un árbol ni una parte de la reserva: financia la plantación y el cuidado de tu sector, con auditoría real. En una frase: convertimos la inversión ambiental de las empresas en proyectos forestales medibles, trazables y comunicables.",
  caminos: [
    {
      titulo: "Aportá",
      texto: "Tu aporte suma al desarrollo de Los Tualdos: plantación, cuidado y monitoreo de la reserva.",
      href: "/aportar",
      cta: "Aportar ahora",
    },
    {
      titulo: "Visitas",
      texto: "Próximamente vas a poder conocer Los Tualdos y a los animales que viven en la reserva.",
      href: "/comunidad",
      cta: "Ver más",
    },
    {
      titulo: "Empresas",
      texto: "Convertí tu compromiso ambiental en un sector real, auditado y a tu nombre.",
      href: "/contacto",
      cta: "Hablemos",
    },
  ] satisfies Camino[],
};

export type PasoAporte = {
  titulo: string;
  texto: string;
};

export const aportarStorytelling = {
  porQue:
    "Sumando tu aporte, podemos hacer realidad el cambio del planeta un paso a la vez, del cual vos sos parte.",
  porQueDestacado: "Cada aporte lo utilizamos para expandir, cuidar y preservar la reserva.",
  pasos: [
    {
      titulo: "Recolectamos la semilla",
      texto: "Elegimos especies nativas del Delta, como sauce criollo y aliso de río.",
    },
    {
      titulo: "La criamos en el vivero",
      texto: "Cada plantín se cuida hasta que está listo para ir a tierra.",
    },
    {
      titulo: "La plantamos en Los Tualdos",
      texto: "En la reserva, en la temporada que corresponde.",
    },
    {
      titulo: "La cuidamos en el tiempo",
      texto: "Medimos, auditamos y te mandamos fotos de cada temporada.",
    },
  ] satisfies PasoAporte[],
};

export const aportarHistoria: Faq[] = [
  {
    pregunta: "Registramos el aporte",
    respuesta: "Una vez hecho, te vamos a estar enviando un mail de confirmación.",
  },
  {
    pregunta: "Designamos recursos",
    respuesta:
      "Gracias a tu aporte, podemos sumar el mismo para el circuito de materiales e insumos necesarios para hacer crecer la reserva.",
  },
  {
    pregunta: "Tu aporte hizo el cambio",
    respuesta:
      "Con esos materiales e insumos, nuestro equipo planta y cuida la reserva. Tu aporte desarrolla Los Tualdos en su conjunto, no un árbol puntual.",
  },
  {
    pregunta: "Te mantenemos al tanto",
    respuesta:
      "Luego de realizadas las tareas y uso de tu aporte, te notificamos qué pasa con la reserva, una vez al mes. Y también podés visitarla si así lo deseás.",
  },
];

export const estimacionAporte = {
  // Estimación para la calculadora, no auditada. Nunca se muestra el precio:
  // solo se usa para pasar del monto a toneladas de CO₂.
  // ~0,90 t CO₂ por árbol por año × años de captura (dato de Polito).
  // A USD 100 por árbol → ~USD 7,9 por tonelada.
  co2TnPorArbolPorAnio: 0.9,
  aniosCaptura: 14,
  costoPorArbolUsd: 100,
  tipoCambioArsPorUsd: 1450, // TODO: confirmar el tipo de cambio a usar
  montoMinimoArs: 1000,
  montoMaximoArs: 10000,
  montosSugeridosArs: [1000, 2500, 5000, 7500, 10000],
};

export type EmpresaLanding = {
  slug: string;
  empresa: string;
  logo: string; // path en /public
  logoAncho: number;
  logoAlto: number;
  frase: string;
  explicacion: string;
  video: string; // path en /public
};

// Landing enfocada por empresa (para QR / links directos de campaña). Una sola
// acción posible: aportar. Sin navegación ni contenido institucional alrededor.
export const empresasLanding: EmpresaLanding[] = [
  {
    slug: "aeropuertos-argentina-2000",
    empresa: "Aeropuertos Argentina 2000",
    logo: "/logos-empresas/aeropuertos-argentina-2000.svg",
    logoAncho: 220,
    logoAlto: 84,
    frase: "Ayudá a plantar un árbol",
    explicacion: "Este aporte va directo a la plantación en Los Tualdos.",
    video: "/reserva/tualdos-hero.mp4",
  },
];

/**
 * Contenido institucional para empresas, tomado tal cual de
 * "Plantify - Presentación Institucional V2". Solo se adaptaron los textos
 * al formato web (de bullets de slide a prosa/listas); la información,
 * los números y los modelos son los mismos del documento fuente.
 */

export const empresasHero = {
  eyebrow: "Para empresas",
  titulo: "Desarrollamos Reservas Forestales a medida.",
  bajada: "Cada proyecto se diseña a medida de las metas ambientales y de posicionamiento de cada empresa.",
  bajadaDestacada: "Gestionamos desde la selección del campo hasta la certificación de la Reserva Forestal.",
};

export type CapaEmpresa = {
  numero: string;
  titulo: string;
  bajada: string;
  texto: string;
  imagen: "plantacion" | "marketingCartel" | "teamBuilding" | "reserva";
};

export const empresasMision = {
  eyebrow: "Nuestra misión: facilitar y masificar la plantación de árboles.",
  titulo: "Cuatro capas, una sola alianza.",
  bajada:
    "Hacemos realidad tu propia reserva, como activo ambiental y herramienta de difusión de marca, política ambiental y cultura organizacional.",
};

export const capasEmpresa: CapaEmpresa[] = [
  {
    numero: "01",
    titulo: "Reserva forestal",
    bajada: "El ancla del proyecto",
    texto:
      "Diseño, plantación y custodia de tu propio sector forestal. Auditado bajo el estándar de Control Union.",
    imagen: "plantacion",
  },
  {
    numero: "02",
    titulo: "Marketing forestal",
    bajada: "Que la gente lo sepa",
    texto:
      "Cada venta, compra o interacción con tu comunidad aportan a la plantación de árboles en tu reserva propia. QR, certificados y contenido conjunto en redes.",
    imagen: "marketingCartel",
  },
  {
    numero: "03",
    titulo: "Experiencias",
    bajada: "Que tu gente lo viva",
    texto:
      "Team building, talleres presenciales, visitas con equipo/comunidad a Los Tualdos con un plan anual de educación ambiental para empleados, proveedores y comunidad.",
    imagen: "teamBuilding",
  },
  {
    numero: "04",
    titulo: "Acuerdo",
    bajada: "A tu medida",
    texto:
      "Certificado por Control Union, con un abanico amplio de herramientas para convocar a tu comunidad sin que te demande presupuesto propio.",
    imagen: "reserva",
  },
];

export type PasoReserva = {
  numero: string;
  titulo: string;
  texto: string;
};

// Capa 01 · La reserva — de la idea al sector asignado.
export const pasosReserva: PasoReserva[] = [
  {
    numero: "01",
    titulo: "Selección del campo",
    texto: "Búsqueda, análisis técnico y jurídico del terreno adecuado.",
  },
  {
    numero: "02",
    titulo: "Diseño del proyecto",
    texto: "Planificación forestal, especies, densidades y cronograma.",
  },
  {
    numero: "03",
    titulo: "Producción y plantación",
    texto: "Producción propia de plantines y ejecución de la forestación.",
  },
  {
    numero: "04",
    titulo: "Custodia y certificación",
    texto: "Mantenimiento y auditoría anual con Control Union.",
  },
];

export const auditoriaControlUnion = {
  titulo: "Auditoría Control Union",
  bajada: "Certificado de verificación de la plantación, con secuestro de carbono verificado.",
  eyebrow: "Lo que auditamos cada año",
  items: [
    "Cantidad de árboles plantados",
    "Gestión forestal de la reserva",
    "Estado y supervivencia",
    "Secuestro de carbono verificado",
    "Certificado de verificación.",
    "Trazabilidad de cada hectárea",
  ],
};

export type PasoRecorrido = {
  titulo: string;
  texto: string;
};

// Cómo viaja un aporte, de punta a punta — versión simple para mostrar en la web.
export const recorridoAportante = {
  titulo: "Así viajan los aportes en tu empresa.",
  bajada: "El mismo recorrido, de punta a punta.",
  pasos: [
    {
      titulo: "Escanea\nel QR",
      texto: "La persona escanea el QR en el punto hecho para tu empresa.",
    },
    {
      titulo: "Elige cómo\nsumarse",
      texto: "Su aporte queda destinado a tu sector en Los Tualdos.",
    },
    {
      titulo: "Plantamos\ny cuidamos",
      texto: "Los Tualdos planta, mantiene y mide el árbol durante todo el proyecto.",
    },
    {
      titulo: "Auditan\ny certifican",
      texto: "Control Union audita la plantación y certifica el carbono capturado.",
    },
    {
      titulo: "Certificado\ny dashboard",
      texto: "La persona recibe su certificado y accede a un dashboard para seguir el impacto.",
    },
    {
      titulo: "Reportes\npara tu marca",
      texto: "Tu empresa recibe informes y material con fotos y métricas de tu sector.",
    },
  ] satisfies PasoRecorrido[],
};

export type ItemCapa = {
  titulo: string;
  texto: string;
};

// Capa 02 · Marketing forestal.
export const marketingForestal = {
  titulo: "Convertimos cada interacción en plantación de árboles para tu marca y comunidad.",
  items: [
    { titulo: "Cartel propio en la reserva", texto: "Tu marca presente físicamente en el sector que financia." },
    { titulo: "QR único en distintos espacios", texto: "El cliente escanea, ve opciones de aportes y elige aportar." },
    { titulo: "Certificado al cliente final", texto: "Cada aporte genera un certificado digital nominal." },
    { titulo: "Campaña conjunta en redes", texto: "Reels, historias y posteos producidos por Plantify." },
    { titulo: "Material gráfico desde el día uno", texto: "Banners, centros de mesa y piezas con QR para tus espacios físicos." },
    { titulo: "Reportes de impacto", texto: "Documentación periódica con fotos, métricas y avances de tu sector." },
  ] satisfies ItemCapa[],
};

// Capa 03 · Experiencias.
export const experienciasEmpresa = {
  titulo: "El bosque también se vive adentro.",
  bajada:
    "Plantify diseña un plan a medida según el rubro, tamaño e impacto de la empresa. Combina formación virtual con jornadas presenciales en la reserva.",
  items: [
    {
      titulo: "Team Building y Talleres presenciales",
      texto: "Jornadas en Los Tualdos con recorrido, charla y plantación. Tu equipo planta su propio árbol.",
    },
    {
      titulo: "Plan anual para empleados",
      texto: "Programa sobre sostenibilidad y carbono, con módulos virtuales autogestionados.",
    },
    {
      titulo: "Visitas y Programas para la comunidad",
      texto: "Jornadas educativas para escuelas, proveedores y clientes, con certificado de participación. Team building.",
    },
  ] satisfies ItemCapa[],
};

// Capa 04 · Acuerdo — modelos de negocio.
export const acuerdoModelos = {
  titulo: "¿Cómo trabajamos?",
  bajada: "Certificamos y auditamos tu sector forestal con Control Union, y armamos la alianza a medida de tu empresa.",
  controlUnion: {
    titulo: "Control Union",
    subtitulo: "Sector forestal certificado",
    texto:
      "Tu sector forestal en Los Tualdos, auditado y certificado por Control Union, con una alianza pensada para tu empresa.",
  },
  flexibilidad: "Flexibilidad total · armamos cada alianza a medida según las necesidades de tu empresa.",
};

// Capa 04 · Acuerdo — la alianza en concreto.
export const alianzaCompleta = {
  titulo: "Una alianza completa, lo que tu marca gana.",
  bajada: "Tu bosque desde el día uno. Un bosque no se levanta en 15 días.",
  bullets: [
    "Sector exclusivo en Los Tualdos con cartel de tu marca.",
    "Custodia y mantenimiento.",
    "Certificación Control Union.",
    "Documentación auditada lista para tu reporte de carbono.",
    "QR único que conecta tu producto con tu bosque.",
    "Material gráfico y audiovisual desde el día uno.",
    "Plan de capacitación a medida para tu equipo.",
    "Talleres presenciales en la reserva.",
  ],
  stats: [
    { valor: "A medida", label: "Proyecto único" },
    { valor: "Certificado", label: "Control Union" },
    { valor: "Llave en mano", label: "Operado por Plantify" },
  ],
};
