import "reflect-metadata";
import { DataSource } from "typeorm";
import { Montadora } from "./src/domain/entities/montadora";
import { Modelo } from "./src/domain/entities/modelo";

export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",
  port: 5432,
  database: "montadoras_dnv",
  username: "meireles",
  password: "12345",

  synchronize: false,
  logging: true,
  entities: [Montadora, Modelo], // pode ser como abaixo
  migrations: ["./src/persistence/typeorm/migrations/*.{ts,js}"],
  migrationsTableName: "migrations_typeorm"
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });
