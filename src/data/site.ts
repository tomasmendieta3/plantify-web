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
  aniosCustodia: 14,
  coordenadas: { lat: -33.7, lng: -58.65 }, // aproximadas — TODO: ajustar con coordenadas exactas
  fechaDato: "Auditoría Control Union, campaña 2026",
};

export type Especie = {
  nombre: string;
  nombreCientifico: string;
  descripcion: string;
};

export const especies: Especie[] = [
  {
    nombre: "Sauce criollo",
    nombreCientifico: "Salix humboldtiana",
    descripcion: "Nativo del Delta, resiste bien las crecientes y arraiga rápido en suelo húmedo.",
  },
  {
    nombre: "Aliso de río",
    nombreCientifico: "Tessaria integrifolia",
    descripcion: "Coloniza las orillas y ayuda a fijar el suelo de las islas nuevas.",
  },
  {
    nombre: "Curupí",
    nombreCientifico: "Sapium haematospermum",
    descripcion: "Crece bien en los sectores más altos, menos expuestos a la inundación.",
  },
];

export const calendarioPlantacion = {
  temporadas: "Otoño y primavera",
  descripcion:
    "Plantamos en otoño y en primavera, cuando el suelo está húmedo pero las islas no están bajo agua. El calendario exacto de cada campaña depende del nivel del río.",
};

export const comoVisitar = {
  descripcion:
    "Coordinamos la visita con anticipación. Te llevamos a caminar tu sector y te mostramos cómo medimos y auditamos.",
  duracion: "Medio día, ida y vuelta desde Paranacito",
};

export type Fauna = {
  nombre: string;
  nombreCientifico: string;
  descripcion: string;
};

export const fauna: Fauna[] = [
  {
    nombre: "Carpincho",
    nombreCientifico: "Hydrochoerus hydrochaeris",
    descripcion: "El roedor más grande del mundo. Vive en grupo, cerca del agua, y es el que más se deja ver.",
  },
  {
    nombre: "Lobito de río",
    nombreCientifico: "Lontra longicaudis",
    descripcion: "Una nutria nativa del Delta. Es esquiva, pero a veces aparece nadando entre los canales.",
  },
  {
    nombre: "Martín pescador",
    nombreCientifico: "Megaceryle torquata",
    descripcion: "Un ave que se lanza en picada al agua para pescar. Se escucha antes de verse.",
  },
  {
    nombre: "Garza mora",
    nombreCientifico: "Ardea cocoi",
    descripcion: "La garza más grande de la región. Camina despacio por la orilla, buscando peces.",
  },
];

export type ActividadVisita = {
  icono: string; // nombre de ícono de lucide-react
  titulo: string;
  texto: string;
};

export const comunidad = {
  titulo: "Comunidad",
  bajada:
    "Los Tualdos no es solo para las empresas que tienen un sector. Los fines de semana abrimos la reserva para que vengas con tu familia, conozcas los animales que viven ahí y, si querés, plantes tu propio árbol.",
  actividades: [
    {
      icono: "PawPrint",
      titulo: "Ver la fauna del Delta",
      texto: "Carpinchos, aves y, con suerte, algún lobito de río, todo en su ambiente natural.",
    },
    {
      icono: "Sprout",
      titulo: "Plantar tu árbol",
      texto: "Si querés, plantás uno con tus propias manos y después le seguís el rastro en las fotos de temporada.",
    },
    {
      icono: "Footprints",
      titulo: "Caminar la reserva",
      texto: "Recorremos los senderos y te contamos cómo cuidamos cada sector, paso a paso.",
    },
    {
      icono: "Users",
      titulo: "Pasar el día en familia",
      texto: "Traé a los chicos. Hay tiempo para caminar, para mirar el río y para no hacer nada.",
    },
  ] satisfies ActividadVisita[],
  duracion: "Un día completo. Si querés quedarte el fin de semana, lo coordinamos con anticipación.",
  comoLlegar:
    "Coordinamos el horario de salida con anticipación y volvemos el mismo día, salvo que te quedes el fin de semana.",
  incluye: [
    "Traslado desde Paranacito",
    "Recorrida guiada por la reserva",
    "La posibilidad de plantar tu propio árbol",
    "Avistaje de fauna nativa",
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
      "Audita Los Tualdos una vez por año y da trazabilidad por hectárea con coordenadas GPS. No es trazabilidad por árbol individual ni satelital en tiempo real: es una auditoría anual, en el terreno — la misma seriedad que necesitás para tu reporte de sostenibilidad.",
  },
  {
    nombre: "Gold Standard",
    descripcion: "Bonos de carbono",
    detalle:
      "El estándar más reconocido para bonos de carbono en el mercado voluntario. Convierte el CO₂ verificado de tu sector en algo que podés reportar y mostrar, no solo una intención.",
  },
];

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
    anio: "Años 4-13",
    titulo: "Monitoreamos y auditamos",
    hacemos:
      "Medimos el crecimiento, estimamos la captura de carbono con metodología alométrica IPCC y pasamos por la auditoría anual de Control Union.",
    recibis: "El informe auditado de cada campaña y el certificado digital actualizado.",
  },
  {
    anio: "Año 14",
    titulo: "Cerramos el ciclo",
    hacemos: "Hacemos la medición final y consolidamos los catorce años de datos de tu sector.",
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

// Hectáreas que ya estamos plantando esta temporada, todavía sin empresa asignada.
export const celdasEnPlantacion: string[] = ["c30", "c31"];

export type MiembroEquipo = {
  nombre: string;
  rol: string;
  foto: string;
};

export const equipo: MiembroEquipo[] = [
  { nombre: "Ariel", rol: "Gerencia General", foto: "/equipo/ariel.jpg" },
  { nombre: "Eduardo", rol: "Rel. Institucionales y sustentabilidad", foto: "/equipo/eduardo.jpg" },
  { nombre: "Tomás", rol: "Comercial - Ingeniero Agrónomo", foto: "/equipo/tomas.jpg" },
  {
    nombre: "Natalia",
    rol: "Comercial - Licenciada en medio ambiente y biodiversidad",
    foto: "/equipo/natalia.jpg",
  },
  { nombre: "Alejandro", rol: "Marketing", foto: "/equipo/alejandro.jpg" },
  { nombre: "Gastón", rol: "Legales experto en industrias y biodiversidad", foto: "/equipo/gaston.jpg" },
  { nombre: "Sebastián", rol: "Certificaciones Internacionales", foto: "/equipo/sebastian.jpg" },
  { nombre: "Verónica", rol: "Administración", foto: "/equipo/veronica.jpg" },
];

export type AreaDeSoporte = {
  area: string;
  nombre: string;
};

export const areasDeSoporte: AreaDeSoporte[] = [
  { area: "IA", nombre: "Desumo" },
  { area: "Gestión", nombre: "Sergio" },
  { area: "Contable", nombre: "Francisco" },
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
      "No. Los árboles quedan en la reserva, bajo nuestro cuidado, durante los catorce años de custodia. Lo que recibís es la titularidad de tu sector, el seguimiento y la documentación.",
  },
  {
    pregunta: "¿Cómo calculan el CO₂?",
    respuesta:
      "Con una estimación alométrica según metodología IPCC. Siempre distinguimos entre CO₂ proyectado (una estimación) y CO₂ verificado (lo que ya pasó por auditoría de Control Union).",
  },
  {
    pregunta: "¿Puedo visitar la reserva?",
    respuesta: "Sí. Coordinamos una visita guiada a Los Tualdos, en Paranacito, Entre Ríos.",
  },
  {
    pregunta: "¿Qué pasa si dejo de pagar antes de los 14 años?",
    respuesta:
      "Lo conversamos caso por caso al armar la propuesta: lo que ya plantamos y auditamos queda documentado, y ajustamos el alcance del sector al tiempo efectivamente cubierto.",
  },
  {
    pregunta: "¿Esto sirve para mi reporte de sostenibilidad?",
    respuesta:
      "Sí. Te damos el informe auditado, el certificado digital y la distinción entre CO₂ proyectado y verificado para que lo uses en tu reporte sin inflar números.",
  },
];

export type ObjetivoParticular = {
  titulo: string;
  texto: string;
};

export const mision = {
  frase:
    "Creemos que las personas somos buenas por naturaleza, y que la mayoría quiere hacer algo por el mundo en el que vive. Plantify es un lugar concreto para hacerlo.",
  objetivoGeneral: "Restaurar bosques nativos y, con ellos, las economías locales y el vínculo de la gente con la naturaleza.",
  objetivosParticulares: [
    {
      titulo: "Restauración de bosques nativos",
      texto:
        "Recolectamos semillas, criamos los plantines en vivero, plantamos árboles nativos en sitios degradados y hacemos jornadas de control de especies invasoras.",
    },
    {
      titulo: "Encuentro y conciencia",
      texto:
        "Organizamos talleres, charlas y jornadas de plantación grupal. Cuando alguien planta un árbol con sus propias manos, cambia la forma en que se relaciona con lo que lo rodea.",
    },
    {
      titulo: "Economías locales",
      texto:
        "Impulsamos oficios ligados a la restauración de bosques para que las comunidades cercanas a nuestros sitios tengan trabajo genuino, conectado al cuidado del territorio.",
    },
  ] satisfies ObjetivoParticular[],
};

export type Camino = {
  titulo: string;
  texto: string;
  href: string;
  cta: string;
};

export const presentacion = {
  frase:
    "Plantify es una empresa argentina de desarrollo de sistemas forestales: financiamos, junto con empresas y personas, proyectos de conservación, forestación y captura de carbono. Nuestro proyecto principal es Los Tualdos, una reserva de 340 hectáreas de bosque y humedal deltaico en el Delta del Paraná, Entre Ríos. No somos simplemente \"una empresa que planta árboles\": combinamos forestación y conservación, captura de CO₂, cuidado de la biodiversidad nativa, trazabilidad con seguimiento satelital, certificación ambiental y reportería, para que cada empresa sponsor pueda mostrar su impacto de forma concreta. Tu aporte no compra jurídicamente un árbol ni una parte de la reserva: financia la plantación y el cuidado de tu sector durante catorce años, con auditoría real. En una frase: convertimos la inversión ambiental de las empresas en proyectos forestales medibles, trazables y comunicables.",
  caminos: [
    {
      titulo: "Aportá",
      texto: "Cada aporte se convierte en un árbol nativo en Los Tualdos, desde $1.000.",
      href: "/aportar",
      cta: "Aportar ahora",
    },
    {
      titulo: "Visitas",
      texto: "Vení a Los Tualdos, conocé la fauna del Delta y plantá tu propio árbol.",
      href: "/comunidad",
      cta: "Coordinar visita",
    },
    {
      titulo: "Empresas",
      texto: "Convertí tu compromiso ambiental en un sector real, auditado y a tu nombre.",
      href: "/contacto",
      cta: "Pedir una propuesta",
    },
  ] satisfies Camino[],
};

export type PasoAporte = {
  titulo: string;
  texto: string;
};

export const aportarStorytelling = {
  porQue:
    "Cada aporte se convierte en algo concreto: un árbol nativo, plantado y cuidado durante catorce años. No sumás a un fondo genérico — sumás hectáreas a un sector real, que después vas a poder ver crecer en fotos, temporada tras temporada.",
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
      texto: "Directo en el sector al que aportaste, en la temporada que corresponde.",
    },
    {
      titulo: "La cuidamos catorce años",
      texto: "Medimos, auditamos y te mandamos fotos de cada temporada.",
    },
  ] satisfies PasoAporte[],
};

export const aportarHistoria: Faq[] = [
  {
    pregunta: "¿Por qué un árbol y no otra cosa?",
    respuesta:
      "Porque un árbol no se gasta. Lo plantás una vez y sigue ahí, creciendo, mucho después de que te olvidaste cuánto aportaste. En catorce años va a ser un árbol grande — y para entonces, alguien más va a estar plantando el siguiente.",
  },
  {
    pregunta: "¿Y si aporto poco, cambia algo?",
    respuesta:
      "Sí. Ningún aporte financia un árbol entero solo, pero todos juntos sí. Los Tualdos crece de a poco, con gente que decidió sumar lo que podía, cuando podía.",
  },
  {
    pregunta: "¿Voy a poder ver en qué se convirtió mi aporte?",
    respuesta:
      "Sí. Te mandamos fotos georreferenciadas de cada temporada. No es una promesa linda: es parte de cómo trabajamos, con auditoría de Control Union incluida.",
  },
  {
    pregunta: "¿Por qué el Delta del Paraná?",
    respuesta:
      "Porque es nuestra casa. Ahí está la reserva, ahí vive la fauna que estamos devolviendo, y ahí es donde un árbol nativo realmente hace la diferencia.",
  },
];

export type ArbolCatalogo = {
  slug: string;
  nombre: string;
  imagen: string; // clave de src/lib/images.ts
};

// Mismas especies del catálogo de plantify.bio/catalog, sin precios: acá solo
// sirven para elegir a qué árbol va tu aporte.
export const catalogoArboles: ArbolCatalogo[] = [
  { slug: "eucalipto", nombre: "Eucalipto", imagen: "arbolEucalipto" },
  { slug: "sauce", nombre: "Sauce", imagen: "arbolSauce" },
  { slug: "alamo", nombre: "Álamo", imagen: "arbolAlamo" },
  { slug: "ceibo", nombre: "Ceibo", imagen: "arbolCeibo" },
];

export const estimacionAporte = {
  // Estimaciones para mostrar en el box de cierre del aporte, no auditadas.
  // TODO: ajustar con el costo real por árbol y la estimación alométrica IPCC real.
  // costoPorArbolArs toma como referencia el plantín del catálogo (plantify.bio/catalog).
  costoPorArbolArs: 4900,
  co2KgPorArbolEstimado: 10,
  montoMinimoArs: 2500,
  montoMaximoArs: 10000,
  montosSugeridosArs: [2500, 5000, 7500, 10000],
};

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
  imagen: "plantacion" | "marketingCartel" | "teamBuilding" | "acuerdoModelos";
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
      "Diseño, plantación y custodia de tu propio sector forestal. Auditado bajo el estándar de Control Union o Gold Standard (dos modelos).",
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
      "Dos modelos posibles, Control Union o Gold Standard, con un abanico amplio de herramientas para convocar a tu comunidad sin que te demande presupuesto propio.",
    imagen: "acuerdoModelos",
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
    texto: "Mantenimiento bajo dos estándares.",
  },
];

export const auditoriaControlUnion = {
  titulo: "Modelo Control Union",
  bajada: "Certificado de verificación de la plantación, con secuestro de carbono verificado.",
  eyebrow: "Lo que auditamos cada año",
  items: [
    "Cantidad de árboles plantados",
    "Gestión forestal de la reserva",
    "Estado y supervivencia",
    "Secuestro de carbono verificado",
    "Certificado de verificación por 14 años.",
    "Trazabilidad de cada hectárea",
  ],
};

export type ItemGoldStandard = {
  titulo: string;
  texto: string;
};

export const modeloGoldStandard = {
  titulo: "Modelo Gold Standard",
  bajada:
    "Gold Standard certifica por 30 años y emite bonos de carbono: un crédito de carbono certificado bajo un estándar internacional reconocido.",
  items: [
    {
      titulo: "Crédito certificado",
      texto: "Gold Standard certifica y emite los bonos de carbono que representan una tonelada de CO₂ verificada.",
    },
    {
      titulo: "Estándar internacional",
      texto: "Reconocido por mercados voluntarios de carbono.",
    },
    {
      titulo: "Tu bono / Claims",
      texto: "Dos opciones: reclamar tus bonos de carbono o tus claims de carbono.",
    },
  ] satisfies ItemGoldStandard[],
};

export type PasoRecorrido = {
  titulo: string;
  texto: string;
};

// Cómo viaja un aporte, de punta a punta — versión simple para mostrar en la web.
export const recorridoAportante = {
  titulo: "Así viajan los aportes en tu empresa.",
  bajada: "El mismo recorrido para cualquiera de los dos modelos, de punta a punta.",
  pasos: [
    {
      titulo: "Escanea el QR",
      texto: "La persona escanea el QR en el punto hecho para tu empresa.",
    },
    {
      titulo: "Elige cómo sumarse",
      texto: "Su aporte queda destinado a tu sector en Los Tualdos.",
    },
    {
      titulo: "Plantamos y cuidamos",
      texto: "Los Tualdos planta, mantiene y mide el árbol durante todo el proyecto.",
    },
    {
      titulo: "Auditan y certifican",
      texto: "Control Union o Gold Standard auditan la plantación y certifican el carbono capturado.",
    },
    {
      titulo: "Certificado y dashboard",
      texto: "La persona recibe su certificado y accede a un dashboard para seguir el impacto.",
    },
    {
      titulo: "Reportes para tu marca",
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
  bajada: "Abrimos el abanico: cada alianza se arma a medida sobre uno o varios de estos modelos.",
  controlUnion: {
    titulo: "Modelo Control Union",
    subtitulo: "Sector forestal certificado",
    texto:
      "Financiás y sostenés tu propio sector forestal en Los Tualdos, auditado y certificado por Control Union, con distintas formas de aportar según el tamaño de tu empresa.",
  },
  goldStandard: {
    titulo: "Modelo Gold Standard",
    subtitulo: "Emisión de bonos de carbono",
    texto:
      "Créditos de carbono certificados, comercializables o retirables a nombre de la empresa en el mercado voluntario.",
  },
  flexibilidad: "Flexibilidad total · armamos cada alianza a medida, combinando los modelos según la empresa.",
};

// Capa 04 · Acuerdo — la alianza en concreto.
export const alianzaCompleta = {
  titulo: "Una alianza completa, lo que tu marca gana.",
  bajada: "Tu bosque desde el día uno, un bosque de 14 años no se levanta en 15 días.",
  bullets: [
    "Sector exclusivo en Los Tualdos con cartel de tu marca.",
    "Custodia y mantenimiento.",
    "Certificación Control Union o Gold Standard.",
    "Documentación auditada lista para tu reporte de carbono.",
    "QR único que conecta tu producto con tu bosque.",
    "Material gráfico y audiovisual desde el día uno.",
    "Plan de capacitación a medida para tu equipo.",
    "Talleres presenciales en la reserva.",
  ],
  stats: [
    { valor: "A medida", label: "Proyecto único" },
    { valor: "14 años", label: "Control Union" },
    { valor: "30 años", label: "Gold Standard" },
    { valor: "Llave en mano", label: "Operado por Plantify" },
  ],
};
