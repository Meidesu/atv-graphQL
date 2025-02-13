import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAttrsMontadoras1739412676179 implements MigrationInterface {
    name = 'AddAttrsMontadoras1739412676179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "montadora" ADD "pais" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "montadora" ADD "ano_fundacao" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "montadora" DROP COLUMN "ano_fundacao"`);
        await queryRunner.query(`ALTER TABLE "montadora" DROP COLUMN "pais"`);
    }

}
