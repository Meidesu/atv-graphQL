import { Modelo } from "@/@types/modelo.type";
import client from "@/config/apollo-client";
import MODELOS_MONTADORA from "@/queries/modelo.query";

export async function obterModelosPorMontadora(id: number): Promise<Modelo[]> {
  const response = await client.query({
    query: MODELOS_MONTADORA,
    variables: { id },
  });

  return response.data.modelos;
}
