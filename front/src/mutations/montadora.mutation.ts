import { gql } from "@apollo/client";

const CRIAR_MONTADORA = gql`
  mutation criarMontadora($content: MontadoraPostContent) {
    montadora: criarMontadora(content: $content) {
      id
      nome
      pais
      ano_fundacao
    }
  }
`;

export default CRIAR_MONTADORA;
