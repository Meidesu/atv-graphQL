import { gql } from "@apollo/client";

export const LISTAR_MONTADORAS = gql`
  query listarMontadoras {
    montadoras {
      id
      nome
    }
  }
`;
