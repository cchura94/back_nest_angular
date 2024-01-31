import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser21706668035199 implements MigrationInterface {
    name = 'TableUser21706668035199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
