import { IsNumber, IsOptional, IsString } from "class-validator";
import { PedidoProductoDto } from "./pedido-producto.dto";

export class CreatePedidoDto {
    
    @IsString()
    @IsOptional()
    fecha: string;
 
    @IsNumber()
    @IsOptional()
    estado: number;

    @IsString()
    @IsOptional()
    observaciones: string;

    @IsNumber()
    cliente: number;

    pedidoProductos: PedidoProductoDto[];
}
