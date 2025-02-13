import { Modelo } from "./modelo.type";

export interface Montadora {
  id: number;
  nome: string;
  modelos: Modelo[];
  pais: string;
  ano_fundacao: number;
}

export interface PostMontadora {
  nome: string;
  pais: string;
  ano_fundacao: number;
}
