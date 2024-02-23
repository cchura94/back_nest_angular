import { IsOptional } from "class-validator";

export class CreateCategoriaDto {
    nombre: string;

    @IsOptional()
    detalle?: string;
}
