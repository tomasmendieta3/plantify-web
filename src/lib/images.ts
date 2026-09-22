/**
 * Slots de imagen de maqueta (Unsplash) mientras no hay fotos reales de Los Tualdos.
 * Cuando lleguen las fotos de la reserva, se reemplaza acá y no en los componentes.
 * Cada URL fue verificada con curl -I (devuelve 200) antes de quedar en el código.
 */

function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  // Foto real: vista aérea de la plantación en Los Tualdos.
  heroFondo: {
    src: "/reserva/tualdos-aerea.jpg",
    alt: "Vista aérea de las filas de forestación en Los Tualdos",
  },
  // Foto real: collage de la reserva y el equipo de Los Tualdos.
  heroBosque: {
    src: "/reserva/tualdos-hero.jpg",
    alt: "Collage de fotos de la reserva Los Tualdos: caballos, plantación y equipo",
  },
  // Foto real: el portón de acceso a Los Tualdos.
  reserva: {
    src: "/reserva/tualdos-porton.jpg",
    alt: "Portón de acceso a la reserva Los Tualdos, hacienda y estancia",
  },
  // Foto real: filas de plantines recién plantados en Los Tualdos.
  plantacion: {
    src: "/reserva/tualdos-plantacion.jpg",
    alt: "Filas de plantines jóvenes con protectores en Los Tualdos",
  },
  // PLACEHOLDER — reemplazar con fotos reales del equipo de Plantify
  equipo: {
    src: unsplash("1688287747103-a9aae3311bc4", "q=80&w=1200&auto=format&fit=crop"),
    alt: "Grupo de personas trabajando juntas al aire libre",
  },
  // REEMPLAZAR con foto real de una jornada comunitaria en Los Tualdos
  comunidad: {
    src: unsplash("1598335624134-5bceb5de202d", "q=80&w=1600&auto=format&fit=crop"),
    alt: "Una mujer y una niña plantando un árbol juntas",
  },
  // REEMPLAZAR con foto real de la fauna de Los Tualdos
  fauna: {
    src: unsplash("1748958754305-50945ac48be2", "q=80&w=1600&auto=format&fit=crop"),
    alt: "Carpinchos descansando sobre el pasto junto al agua",
  },
  aportar: {
    src: unsplash("1599659593072-10de2e109486", "q=80&w=1200&auto=format&fit=crop"),
    alt: "Dos manos abiertas, una entregándole algo a la otra",
  },
  empresas: {
    src: unsplash("1600880292089-90a7e086ee0c", "q=80&w=1200&auto=format&fit=crop"),
    alt: "Un equipo de trabajo dándose la mano en señal de acuerdo",
  },
  arbolEucalipto: {
    src: unsplash("1610050564018-91f89d9ddea8", "q=80&w=600&auto=format&fit=crop"),
    alt: "Tronco de eucalipto visto desde abajo, contra el cielo",
  },
  arbolAlamo: {
    src: unsplash("1626251446174-c4b758b61709", "q=80&w=600&auto=format&fit=crop"),
    alt: "Álamo alto en medio de un campo verde",
  },
  arbolSauce: {
    src: unsplash("1744979768558-0e84d14fec25", "q=80&w=600&auto=format&fit=crop"),
    alt: "Sauce llorón con el sol filtrándose entre las ramas",
  },
  arbolCeibo: {
    src: unsplash("1746466405013-3248c8688c34", "q=80&w=600&auto=format&fit=crop"),
    alt: "Ramas cubiertas de flores rojas de ceibo",
  },
  logoControlUnion: {
    src: "/certificaciones/control-union.webp",
    alt: "Logo de Control Union",
  },
  // Foto real: cartel de la Reserva Forestal Plantify x Los Tualdos.
  marketingCartel: {
    src: "/empresas/marketing-cartel.jpg",
    alt: "Cartel de la Reserva Forestal Plantify x Los Tualdos con las especies nativas plantadas",
  },
  // Foto real: cartel de especies nativas con espacio "Tu empresa acá".
  cartelNativas: {
    src: "/empresas/cartel-nativas.png",
    alt: "Cartel de la Reserva Forestal Plantify x Los Tualdos con las especies nativas y el espacio para el logo de la empresa",
  },
  // Foto real: cartel de escritorio con QR, de ejemplo para una empresa aliada.
  qrEscritorio: {
    src: "/empresas/qr-escritorio.png",
    alt: "Cartel de escritorio con QR para conocer el aporte ambiental de la empresa, en la recepción de una oficina",
  },
  // Foto real: jornada de team building del equipo en Los Tualdos.
  teamBuilding: {
    src: "/empresas/team-building.jpg",
    alt: "Equipo de Plantify en una jornada de team building y plantación en Los Tualdos",
  },
  bannerMockup: {
    src: "/empresas/banner-mockup.webp",
    alt: "Banner institucional de Plantify con QR y estadísticas de la reserva",
  },
  qrMockup: {
    src: "/empresas/qr-mockup.webp",
    alt: "Cartel de mesa con QR para escanear y conocer el aporte",
  },
  // Foto real: ñandú en Los Tualdos.
  faunaDelta: {
    src: "/comunidad/qva-fauna.jpg",
    alt: "Ñandú caminando en Los Tualdos",
  },
  // Foto real: plantines en el vivero de Los Tualdos.
  plantarArbol: {
    src: "/comunidad/qva-plantar.jpg",
    alt: "Plantines jóvenes en cajones de madera en el vivero de Los Tualdos",
  },
  // Foto real: filas de forestación en Los Tualdos.
  caminarReserva: {
    src: "/comunidad/qva-caminar.jpg",
    alt: "Filas de árboles jóvenes en Los Tualdos, con cielo nublado de fondo",
  },
  // Foto real: yegua y potrillo en Los Tualdos.
  diaEnFamilia: {
    src: "/comunidad/qva-familia.jpg",
    alt: "Yegua y potrillo pastando juntos en Los Tualdos",
  },
} as const;
