import { Montadora, PostMontadora } from "@/@types/montadora.type";
import client from "@/config/apollo-client";
import CRIAR_MONTADORA from "@/mutations/montadora.mutation";
import { LISTAR_MONTADORAS } from "@/queries/montadora.query";

export async function obterMontadoras(): Promise<Montadora[]> {
  const response = await client.query({
    query: LISTAR_MONTADORAS,
  });

  return response.data.montadoras as Montadora[];
}

export async function criarMontadora(
  montadora: PostMontadora
): Promise<Montadora> {
  const response = await client.mutate({
    mutation: CRIAR_MONTADORA,
    variables: { content: montadora },
  });

  if (response.errors) {
    console.log(response.errors);

    throw new Error("Erro ao cadastrar montadora");
  }

  return response.data.montadora;
}
