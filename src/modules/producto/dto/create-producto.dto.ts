import { Optional } from "@nestjs/common";
import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class CreateProductoDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsDecimal({decimal_digits: '2'})
    precio:number;

    @IsNotEmpty()
    @IsInt()
    stock: number

    @IsOptional()
    @IsString()
    imagen?: string

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsBoolean()
    estado?: boolean;

    @IsNotEmpty()
    @IsInt()
    categoriaId: number;

}
