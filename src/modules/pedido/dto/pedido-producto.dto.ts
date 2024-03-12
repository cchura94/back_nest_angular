import { IsNumber } from "class-validator";

export class PedidoProductoDto{

    @IsNumber()
    pedidoId: number; // 7 7 7

    @IsNumber()
    productoId: number; // 3 5 8

    @IsNumber()
    cantidad: number; // 1 2 1
}