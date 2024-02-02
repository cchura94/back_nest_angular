import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePersona1706841627499 implements MigrationInterface {
    name = 'UpdatePersona1706841627499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persona" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "UQ_551ede1f9ac73b4e8f18495c6da" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "personaId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_92f09d8f74b60402513dbbc6d57" UNIQUE ("personaId")`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_92f09d8f74b60402513dbbc6d57" FOREIGN KEY ("personaId") REFERENCES "persona"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_92f09d8f74b60402513dbbc6d57"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_92f09d8f74b60402513dbbc6d57"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "personaId"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "UQ_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP COLUMN "userId"`);
    }

}
