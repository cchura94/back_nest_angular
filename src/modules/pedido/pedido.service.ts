import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { Cliente } from '../cliente/entities/cliente.entity';
import { PedidoProducto } from './entities/pedidoproducto.entity';

@Injectable()
export class PedidoService {

  constructor(
    @InjectRepository(Pedido) private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
    @InjectRepository(PedidoProducto) private pedidoProductoRepository: Repository<PedidoProducto>
    ){}

  async create(createPedidoDto: CreatePedidoDto) {

    const { cliente, pedidoProductos } = createPedidoDto;

    // console.log("CLIENTE: ", cliente)
    // console.log("pedidoProductos: ", pedidoProductos)

    // transactions
    const queryRunner = this.pedidoRepository.manager.connection.createQueryRunner();
    await queryRunner.connect()
    await queryRunner.startTransaction();

    try{

      // buscar al cliente
      const clienteEntity = await this.clienteRepository.findOne({where: {id: cliente}})
      console.log("CLIENTE ENCONTRADO: ", clienteEntity)

      // registrar el pedido
      const nuevoPedido = this.pedidoRepository.create({
        fecha: new Date().toISOString(),
        estado: 1,
        observaciones: 'NUevo Pedido',
        cliente: clienteEntity
      })

      // guardar pedido
      const pedidoGuardado = await queryRunner.manager.save(Pedido, nuevoPedido);
      console.log("pedidoGuardado: ", pedidoGuardado)

      // asociar productos al pedido
      await Promise.all(
        pedidoProductos.map((producto) => {
          console.log("PRODUCTO: ", producto);

          const nuevoPedidoProductos = this.pedidoProductoRepository.create({
            pedidoId: nuevoPedido.id,
            productoId: producto.productoId,
            cantidad: producto.cantidad
          })

          return queryRunner.manager.save(PedidoProducto, nuevoPedidoProductos)

        })
      )

      await queryRunner.commitTransaction();
      return pedidoGuardado;

    } catch(e){
      console.log(".... ROLLBACK")
      await queryRunner.rollbackTransaction();
      throw e;
    }finally {
      await queryRunner.release();

    }

    // createPedidoDto.cliente_id;
    // transactiones

  }

  findAll() {
    return `This action returns all pedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
