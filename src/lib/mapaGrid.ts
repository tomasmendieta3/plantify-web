/**
 * Genera la grilla de hectáreas del mapa de sectores por código (nada de imágenes).
 * Es determinístico: mismo seed → mismos polígonos, para que el render de servidor
 * y el de cliente coincidan durante la hidratación.
 */

export const GRID_COLS = 8;
export const GRID_ROWS = 6;
export const VIEW_W = 800;
export const VIEW_H = 520;

const CELL_W = VIEW_W / GRID_COLS;
const CELL_H = VIEW_H / GRID_ROWS;

// PRNG determinístico (mulberry32) para que el jitter sea estable entre renders.
function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function vertexKey(i: number, j: number) {
  return i * 1000 + j;
}

function buildVertices() {
  const vertices = new Map<number, { x: number; y: number }>();
  for (let j = 0; j <= GRID_ROWS; j++) {
    for (let i = 0; i <= GRID_COLS; i++) {
      const rand = mulberry32(i * 92821 + j * 31337 + 7);
      const isEdge = i === 0 || i === GRID_COLS || j === 0 || j === GRID_ROWS;
      const jitter = isEdge ? CELL_W * 0.06 : CELL_W * 0.22;
      const dx = (rand() - 0.5) * jitter;
      const dy = (rand() - 0.5) * jitter;
      vertices.set(vertexKey(i, j), {
        x: i * CELL_W + dx,
        y: j * CELL_H + dy,
      });
    }
  }
  return vertices;
}

// Franja del río: corta la grilla en diagonal suave. Las celdas que caen ahí
// se excluyen de la tierra firme, dejando ver el fondo — así se forma la costa.
function esAgua(col: number, row: number) {
  const centro = 2.6 + Math.sin(row * 0.7) * 1.3;
  return Math.abs(col - centro) < 0.55;
}

export type CeldaGrilla = {
  id: string;
  row: number;
  col: number;
  points: string;
  cx: number;
  cy: number;
};

export function generarGrilla(): CeldaGrilla[] {
  const vertices = buildVertices();
  const celdas: CeldaGrilla[] = [];

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      if (esAgua(col, row)) continue;

      const p1 = vertices.get(vertexKey(col, row))!;
      const p2 = vertices.get(vertexKey(col + 1, row))!;
      const p3 = vertices.get(vertexKey(col + 1, row + 1))!;
      const p4 = vertices.get(vertexKey(col, row + 1))!;

      const cx = (p1.x + p2.x + p3.x + p4.x) / 4;
      const cy = (p1.y + p2.y + p3.y + p4.y) / 4;

      celdas.push({
        id: `c${row * GRID_COLS + col}`,
        row,
        col,
        points: [p1, p2, p3, p4].map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "),
        cx,
        cy,
      });
    }
  }

  return celdas;
}
