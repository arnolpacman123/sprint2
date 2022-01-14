import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pregunta } from './interfaces/pregunta.interface';
import { CreatePreguntaDto } from './dto/pregunta.dto';

@Injectable()
export class PreguntaService {
  constructor(
    @InjectModel('Pregunta') private readonly preguntaModel: Model<Pregunta>,
  ) {}

  async getPreguntas(): Promise<Pregunta[]> {
    const preguntas = await this.preguntaModel.find().populate([
      {
        path: 'tipo_pregunta',
      },
      {
        path: 'opciones',
      },
    ]);
    return preguntas;
  }

  async getPregunta(id: string): Promise<Pregunta> {
    const pregunta = await this.preguntaModel.findById(id).populate({
      path: 'opciones',
    });
    return pregunta;
  }

  async createPregunta(
    createPreguntaDto: CreatePreguntaDto,
  ): Promise<Pregunta> {
    const pregunta = new this.preguntaModel(createPreguntaDto);
    return await pregunta.save();
  }

  async updatePregunta(
    id: string,
    createPreguntaDto: CreatePreguntaDto,
  ): Promise<Pregunta> {
    const pregunta = await this.preguntaModel.findByIdAndUpdate(
      id,
      createPreguntaDto,
      { new: true },
    );
    return pregunta;
  }

  async addOpcionToPregunta(
    idPregunta: string,
    idOpcion: string,
  ): Promise<Pregunta> {
    const pregunta = await this.preguntaModel.findByIdAndUpdate(
      idPregunta,
      {
        $addToSet: {
          opciones: idOpcion,
        },
      },
      { new: true },
    );
    return pregunta;
  }

  async addOpcionesToPregunta(
    idPregunta: string,
    idsOpciones: string[],
  ): Promise<Pregunta> {
    const pregunta = await this.preguntaModel.findByIdAndUpdate(
      idPregunta,
      {
        $addToSet: {
          opciones: {
            $each: idsOpciones,
          },
        },
      },
      { new: true },
    );
    return pregunta;
  }

  async deletePregunta(id: string): Promise<Pregunta> {
    const pregunta = await this.preguntaModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return pregunta;
  }
}
