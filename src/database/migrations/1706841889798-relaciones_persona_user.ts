import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacionesPersonaUser1706841889798 implements MigrationInterface {
    name = 'RelacionesPersonaUser1706841889798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_92f09d8f74b60402513dbbc6d57"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_92f09d8f74b60402513dbbc6d57"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "personaId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "personaId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_92f09d8f74b60402513dbbc6d57" UNIQUE ("personaId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_92f09d8f74b60402513dbbc6d57" FOREIGN KEY ("personaId") REFERENCES "persona"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
