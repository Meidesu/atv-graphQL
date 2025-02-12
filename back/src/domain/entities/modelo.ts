import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Montadora } from "./montadora";

@Entity()
export class Modelo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: String;

  @ManyToOne(() => Montadora, (montadora) => montadora.modelos)
  montadora: Montadora;
}
