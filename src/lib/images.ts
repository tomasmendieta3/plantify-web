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
  // REEMPLAZAR con foto real del bosque de Los Tualdos
  heroBosque: {
    src: unsplash("1780488417515-5a1f3d7b9328", "q=80&w=2400&auto=format&fit=crop"),
    alt: "Bosque de humedal con árboles reflejados en el agua",
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
  // REEMPLAZAR con foto real de una familia visitando Los Tualdos
  visitaFamilia: {
    src: unsplash("1758962036781-c0dc907aea7b", "q=80&w=2000&auto=format&fit=crop"),
    alt: "Una familia caminando junta por un sendero natural",
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
  logoGoldStandard: {
    src: "/certificaciones/gold-standard.webp",
    alt: "Logo de Gold Standard for the Global Goals",
  },
} as const;
