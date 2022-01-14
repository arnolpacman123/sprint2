import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AplicacionEncuesta } from './interfaces/aplicacion-encuesta.interface';
import { CreateAplicacionEncuestaDto } from './dto/aplicacion-encuesta.dto';

@Injectable()
export class AplicacionEncuestaService {
  constructor(
    @InjectModel('AplicacionEncuesta')
    private readonly aplicacionEncuestaModel: Model<AplicacionEncuesta>,
  ) {}

  async getAplicacionesEncuestas(): Promise<AplicacionEncuesta[]> {
    const aplicacionesEncuestas = await this.aplicacionEncuestaModel.find();
    return aplicacionesEncuestas;
  }

  async getAplicacionEncuesta(id: string): Promise<AplicacionEncuesta> {
    const aplicacionEncuesta = await this.aplicacionEncuestaModel.findById(id);
    return aplicacionEncuesta;
  }

  async createAplicacionEncuesta(
    createAplicacionEncuestaDto: CreateAplicacionEncuestaDto,
  ): Promise<AplicacionEncuesta> {
    const aplicacionEncuesta = new this.aplicacionEncuestaModel(
      createAplicacionEncuestaDto,
    );
    return await aplicacionEncuesta.save();
  }

  async updateAplicacionEncuesta(
    id: string,
    createAplicacionEncuestaDto: CreateAplicacionEncuestaDto,
  ): Promise<AplicacionEncuesta> {
    const aplicacionEncuesta =
      await this.aplicacionEncuestaModel.findByIdAndUpdate(
        id,
        createAplicacionEncuestaDto,
        { new: true },
      );
    return aplicacionEncuesta;
  }

  async deleteAplicacionEncuesta(id: string): Promise<AplicacionEncuesta> {
    const aplicacionEncuesta =
      await this.aplicacionEncuestaModel.findByIdAndUpdate(
        id,
        { estado: false },
        { new: true },
      );
    return aplicacionEncuesta;
  }
}
