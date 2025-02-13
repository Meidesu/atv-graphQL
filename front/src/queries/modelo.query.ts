import { gql } from "@apollo/client";

const MODELOS_MONTADORA = gql`
  query obterModelo($id: ID!) {
    modelos: modelosPorMontadora(montadoraId: $id) {
      id
      nome
      montadora {
        id
        nome
      }
    }
  }
`;

export default MODELOS_MONTADORA;
