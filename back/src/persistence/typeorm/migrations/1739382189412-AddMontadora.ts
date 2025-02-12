import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMontadora1739382189412 implements MigrationInterface {
    name = 'AddMontadora1739382189412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "modelo" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "montadoraId" integer, CONSTRAINT "PK_4d5d3a7d7efe7e5f03944aa15d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "montadora" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_e7744dd041333b398aa7cc3265e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "modelo" ADD CONSTRAINT "FK_67771d4ab6d45aac5082b1f5262" FOREIGN KEY ("montadoraId") REFERENCES "montadora"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "modelo" DROP CONSTRAINT "FK_67771d4ab6d45aac5082b1f5262"`);
        await queryRunner.query(`DROP TABLE "montadora"`);
        await queryRunner.query(`DROP TABLE "modelo"`);
    }

}
