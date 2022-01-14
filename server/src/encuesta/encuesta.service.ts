import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Encuesta } from './interfaces/encuesta.interface';
import { CreateEncuestaDto } from './dto/encuesta.dto';

@Injectable()
export class EncuestaService {
  constructor(
    @InjectModel('Encuesta') private readonly encuestaModel: Model<Encuesta>,
  ) {}

  async getEncuestas(): Promise<Encuesta[]> {
    const encuestas = await this.encuestaModel.find().populate({
      path: 'secciones',
      populate: {
        path: 'preguntas',
        populate: [
          {
            path: 'opciones',
          },
          {
            path: 'tipo_pregunta',
          },
        ],
      },
    });
    return encuestas;
  }

  async getEncuesta(id: string): Promise<Encuesta> {
    const encuesta = await this.encuestaModel.findById(id).populate({
      path: 'secciones',
      populate: {
        path: 'preguntas',
        populate: [
          {
            path: 'opciones',
          },
          {
            path: 'tipo_pregunta',
          },
        ],
      },
    });
    return encuesta;
  }

  async createEncuesta(
    createEncuestaDto: CreateEncuestaDto,
  ): Promise<Encuesta> {
    const encuesta = new this.encuestaModel(createEncuestaDto);
    return await encuesta.save();
  }

  async updateEncuesta(
    id: string,
    createEncuestaDto: CreateEncuestaDto,
  ): Promise<Encuesta> {
    const encuesta = await this.encuestaModel.findByIdAndUpdate(
      id,
      createEncuestaDto,
      { new: true },
    );
    return encuesta;
  }

  async addSeccionToEncuesta(
    idEncuesta: string,
    idSeccion: string,
  ): Promise<Encuesta> {
    const encuesta = await this.encuestaModel.findByIdAndUpdate(
      idEncuesta,
      {
        $addToSet: {
          secciones: idSeccion,
        },
      },
      { new: true },
    );
    return encuesta;
  }

  async addSeccionesToEncuesta(
    idEncuesta: string,
    idsSecciones: string[],
  ): Promise<Encuesta> {
    const encuesta = await this.encuestaModel.findByIdAndUpdate(
      idEncuesta,
      {
        $addToSet: {
          secciones: {
            $each: idsSecciones,
          },
        },
      },
      { new: true },
    );
    return encuesta;
  }

  async deleteEncuesta(id: string): Promise<Encuesta> {
    const encuesta = await this.encuestaModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return encuesta;
  }
}
