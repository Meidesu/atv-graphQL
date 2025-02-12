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

  @OneToMany(() => Modelo, (modelo) => modelo.montadora)
  modelos: Modelo[];
}
