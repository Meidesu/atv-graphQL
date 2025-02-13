import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Modelo } from "./modelo";

@Entity()
export class Montadora extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: String;

  @Column()
  pais: string;

  @Column()
  ano_fundacao: number;

  @OneToMany(() => Modelo, (modelo) => modelo.montadora)
  modelos: Modelo[];
}
