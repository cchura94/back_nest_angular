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
    return this.categoriaRepository.find({
      order: {
        id: 'ASC'
      }
    });
  }

  findOne(id: number) {
    return this.categoriaRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.categoriaRepository.update(id, updateCategoriaDto)
  }

  async remove(id: number) {
    return await this.categoriaRepository.delete(id)
  }
}
