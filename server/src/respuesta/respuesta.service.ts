import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Respuesta } from './interfaces/respuesta.interface';
import { CreateRespuestaDto } from './dto/respuesta.dto';

@Injectable()
export class RespuestaService {
  constructor(
    @InjectModel('Respuesta') private readonly respuestaModel: Model<Respuesta>,
  ) {}

  async getRespuestas(): Promise<Respuesta[]> {
    const respuestas = await this.respuestaModel.find();
    return respuestas;
  }

  async getRespuesta(id: string): Promise<Respuesta> {
    const respuesta = await this.respuestaModel.findById(id);
    return respuesta;
  }

  async createRespuesta(createRespuestaDto: CreateRespuestaDto): Promise<Respuesta> {
    const respuesta = new this.respuestaModel(createRespuestaDto);
    return await respuesta.save();
  }

  async updateRespuesta(
    id: string,
    createRespuestaDto: CreateRespuestaDto,
  ): Promise<Respuesta> {
    const respuesta = await this.respuestaModel.findByIdAndUpdate(
      id,
      createRespuestaDto,
      { new: true },
    );
    return respuesta;
  }

  async deleteRespuesta(id: string): Promise<Respuesta> {
    const respuesta = await this.respuestaModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return respuesta;
  }
}
