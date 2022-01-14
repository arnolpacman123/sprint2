import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Opcion } from './interfaces/opcion.interface';
import { CreateOpcionDto } from './dto/opcion.dto';

@Injectable()
export class OpcionService {
  constructor(
    @InjectModel('Opcion') private readonly opcionModel: Model<Opcion>,
  ) {}

  async getOpciones(): Promise<Opcion[]> {
    const opciones = await this.opcionModel.find();
    return opciones;
  }

  async getOpcion(id: string): Promise<Opcion> {
    const opcion = await this.opcionModel.findById(id);
    return opcion;
  }

  async createOpcion(createOpcionDto: CreateOpcionDto): Promise<Opcion> {
    const opcion = new this.opcionModel(createOpcionDto);
    return await opcion.save();
  }

  async updateOpcion(
    id: string,
    createOpcionDto: CreateOpcionDto,
  ): Promise<Opcion> {
    const opcion = await this.opcionModel.findByIdAndUpdate(
      id,
      createOpcionDto,
      { new: true },
    );
    return opcion;
  }

  async deleteOpcion(id: string): Promise<Opcion> {
    const opcion = await this.opcionModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return opcion;
  }
}
