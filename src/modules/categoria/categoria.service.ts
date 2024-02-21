import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(@Inject('CATEGORIA_REPOSITORY') private categoriaRepository: Repository<Categoria>){}

  async create(createCategoriaDto: CreateCategoriaDto) {
    const cate = new Categoria()
    cate.nombre = createCategoriaDto.nombre;
    cate.detalle = createCategoriaDto.detalle;
    
    return await this.categoriaRepository.save(cate)

  }

  findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
