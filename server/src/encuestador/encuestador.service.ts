import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { Encuestador } from './interfaces/encuestador.interface';
import { CreateEncuestadorDto } from './dto/encuestador.dto';

@Injectable()
export class EncuestadorService {
  constructor(
    @InjectModel('Encuestador')
    private readonly encuestadorModel: Model<Encuestador>,
  ) {}

  async getEncuestadores(): Promise<Encuestador[]> {
    const encuestadores = await this.encuestadorModel.find();
    return encuestadores;
  }

  async getEncuestador(id: string): Promise<Encuestador> {
    const encuestador = await this.encuestadorModel.findById(id);
    return encuestador;
  }

  async createEncuestador(
    createEncuestadorDto: CreateEncuestadorDto,
  ): Promise<Encuestador> {
    const { contrasena } = createEncuestadorDto;
    const saltOrRounds = 10;
    const salt = await bcrypt.genSalt(saltOrRounds);
    createEncuestadorDto.contrasena = await bcrypt.hash(contrasena, salt);
    const encuestador = new this.encuestadorModel(createEncuestadorDto);
    return await encuestador.save();
  }

  async updateEncuestador(
    id: string,
    createEncuestadorDto: CreateEncuestadorDto,
  ): Promise<Encuestador> {
    const encuestador = await this.encuestadorModel.findByIdAndUpdate(
      id,
      createEncuestadorDto,
      { new: true },
    );
    return encuestador;
  }

  async deleteEncuestador(id: string): Promise<Encuestador> {
    const encuestador = await this.encuestadorModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return encuestador;
  }
}
