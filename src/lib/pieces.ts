import mesaRoble from "@/assets/mesa-roble.jpg";
import consolaLatón from "@/assets/consola-laton.jpg";
import sillaRattan from "@/assets/silla-rattan.jpg";
import aparadorRoble from "@/assets/aparador-roble.jpg";
import sillónEsmeralda from "@/assets/sillon-esmeralda.jpg";
import comedorTravertino from "@/assets/comedor-travertino.jpg";

export type Linea = "rustico" | "lujo";

export interface Pieza {
  id: string;
  nombre: string;
  linea: Linea;
  material: string;
  dimensiones?: string;
  precio: number;
  img: string;
}

export const LINEA_LABEL: Record<Linea, string> = {
  rustico: "Rústico",
  lujo: "Contemporáneo & Vanity",
};

export const PIEZAS: Pieza[] = [
  {
    id: "mesa-roble-vivo",
    nombre: "Mesa Roble Vivo",
    linea: "rustico",
    material: "Roble macizo, canto vivo",
    dimensiones: "2.40 m",
    precio: 48900,
    img: mesaRoble,
  },
  {
    id: "consola-laton",
    nombre: "Consola Latón",
    linea: "lujo",
    material: "Mármol Calacatta, latón cepillado",
    precio: 62000,
    img: consolaLatón,
  },
  {
    id: "silla-rattan",
    nombre: "Silla Rattan",
    linea: "rustico",
    material: "Rattan tejido, cuero curtido",
    precio: 18500,
    img: sillaRattan,
  },
  {
    id: "aparador-roble-viejo",
    nombre: "Aparador Roble Viejo",
    linea: "rustico",
    material: "Roble recuperado, herraje forjado",
    dimensiones: "1.80 m",
    precio: 36700,
    img: aparadorRoble,
  },
  {
    id: "sillon-esmeralda",
    nombre: "Sillón Esmeralda",
    linea: "lujo",
    material: "Terciopelo esmeralda, base de latón",
    precio: 52000,
    img: sillónEsmeralda,
  },
  {
    id: "comedor-travertino",
    nombre: "Comedor Travertino",
    linea: "lujo",
    material: "Piedra travertino, base de nogal",
    dimensiones: "1.60 m",
    precio: 86000,
    img: comedorTravertino,
  },
];

export function formatPrecio(n: number): string {
  return `$${n.toLocaleString("es-MX")}`;
}
