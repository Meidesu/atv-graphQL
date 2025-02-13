import { MyGQLContext } from "./context-graphql";
import { Modelo } from "./domain/entities/modelo";
import { Montadora } from "./domain/entities/montadora";

export const resolvers = {
  Query: {
    // montadoras: () => Montadora.find()
    montadoras: async (
      _parent: any,
      _args: any,
      context: MyGQLContext,
      _info: any
    ) => {
      console.log(`User: ${context.user}`);
      return await Montadora.find();
    },
    modelos: async (
      _parent: any,
      _args: any,
      context: MyGQLContext,
      _info: any
    ) => {
      console.log(`User: ${context.user}`);
      return await Modelo.find();
    },
    modelosPorMontadora: async (
      _parent: any,
      _args: any,
      context: MyGQLContext,
      _info: any
    ) => {
      return await Modelo.find({
        where: { montadora: { id: _args.montadoraId } },
      });
    },
  },

  Modelo: {
    montadora: async (parent: Modelo) => {
      console.log(`Buscando montadora para o modelo ${parent.id}`);

      const modelo = await Modelo.findOne({
        where: { id: parent.id },
        relations: { montadora: true },
      });

      return modelo?.montadora;
    },
  },

  Montadora: {
    modelos: async (parent: Montadora) => {
      console.log(`Buscando modelos para a montadora ${parent.id}`);
      const modelos = await Modelo.find({
        where: { montadora: { id: parent.id } },
      });

      console.log(modelos);

      return modelos;
    },
  },

  Mutation: {
    criarMontadora: async (
      _parent: any,
      args: any,
      _context: MyGQLContext,
      _info: any
    ) => {
      console.log(`User: ${args}`);

      const montadora = Montadora.create(args.content);
      return await montadora.save();
    },

    criarModelo: async (
      _parent: any,
      args: any,
      _context: MyGQLContext,
      _info: any
    ) => {
      console.log(`User: ${args}`);

      const montadora = await Montadora.findOne({
        where: { id: args.content.montadoraId },
      });

      if (!montadora) {
        throw new Error("Montadora não encontrada");
      }

      const modelo = Modelo.create({
        nome: args.content.nome,
        montadora: montadora,
      });

      return await modelo.save();
    },
  },
};
