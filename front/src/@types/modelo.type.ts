import { Montadora } from "@/@types/montadora.type";

export interface Modelo {
  id: number;
  nome: string;
  montadora: Montadora;
}
