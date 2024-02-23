import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFiledsTable1708655859454 implements MigrationInterface {
    name = 'UpdateFiledsTable1708655859454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" text`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "nombre" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "precio" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "imagen" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "descripcion" text`);
        await queryRunner.query(`ALTER TABLE "productos" ALTER COLUMN "estado" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" ALTER COLUMN "estado" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "descripcion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "imagen" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "precio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

}
