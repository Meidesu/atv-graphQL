import { Montadora } from "@/@types/montadora";
import client from "@/config/apollo-client";
import { LISTAR_MONTADORAS } from "@/queries/montadora.query";

export async function obterMontadoras(): Promise<Montadora[]> {
  const response = await client.query({ query: LISTAR_MONTADORAS });

  return response.data.montadoras;
}
