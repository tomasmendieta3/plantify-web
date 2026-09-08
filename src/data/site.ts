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
    "Coordinamos la visita con anticipación porque se llega en lancha desde Paranacito. Te llevamos a caminar tu sector y te mostramos cómo medimos y auditamos.",
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
    "Se llega en lancha desde Paranacito. Coordinamos el horario de salida con anticipación y volvemos el mismo día, salvo que te quedes el fin de semana.",
  incluye: [
    "Traslado en lancha desde Paranacito",
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
};

export const entregables: Entregable[] = [
  { icono: "MapPin", texto: "Sector delimitado a tu nombre" },
  { icono: "Camera", texto: "Fotos georreferenciadas cada temporada" },
  { icono: "FileCheck2", texto: "Informe anual auditado por Control Union" },
  { icono: "BadgeCheck", texto: "Certificado digital" },
  { icono: "Share2", texto: "Material listo para tus redes y tu reporte" },
  { icono: "Footprints", texto: "Visita guiada a la reserva" },
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
  bio: string;
  placeholder: boolean;
};

// TODO: sumar fotos reales del equipo.
export const equipo: MiembroEquipo[] = [
  {
    nombre: "Rubén Palacio",
    rol: "Agroecología y acompañamiento técnico en campo",
    bio: "Encargado de reserva forestal.",
    placeholder: false,
  },
  {
    nombre: "Sebastián Cardozo",
    rol: "Desarrollo de plataformas y sistemas de reportería",
    bio: "Director de proyectos con más de 25 años de experiencia.",
    placeholder: false,
  },
  {
    nombre: "Sebastián Torres",
    rol: "Monitoreo satelital y certificación de carbono",
    bio: "Biólogo con más de 25 años de experiencia en soluciones regenerativas.",
    placeholder: false,
  },
  {
    nombre: "Alejandro Torres",
    rol: "Comunicación y engagement corporativo",
    bio: "Consultora estratégica con foco en experiencia del consumidor y posicionamiento de marca.",
    placeholder: false,
  },
  {
    nombre: "Gastón Merhar",
    rol: "Asuntos legales y estructuración de fideicomisos",
    bio: "Abogado con más de 25 años de experiencia en derecho empresarial.",
    placeholder: false,
  },
  {
    nombre: "Luciano Navilli",
    rol: "Gestión y liderazgo del proyecto",
    bio: "Expertise en desarrollo de proyectos de huella de carbono.",
    placeholder: false,
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
