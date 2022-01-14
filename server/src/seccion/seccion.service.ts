import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Seccion } from './interfaces/seccion.interface';
import { CreateSeccionDto } from './dto/seccion.dto';

@Injectable()
export class SeccionService {
  constructor(
    @InjectModel('Seccion') private readonly seccionModel: Model<Seccion>,
  ) {}

  async getSecciones(): Promise<Seccion[]> {
    const secciones = await this.seccionModel.find().populate({
      path: 'preguntas',
      populate: [
        {
          path: 'opciones',
        },
        {
          path: 'tipo_pregunta',
        },
      ],
    });
    return secciones;
  }

  async getSeccion(id: string): Promise<Seccion> {
    const seccion = await this.seccionModel.findById(id).populate({
      path: 'preguntas',
      populate: [
        {
          path: 'opciones',
        },
        {
          path: 'tipo_pregunta',
        },
      ],
    });
    return seccion;
  }

  async createSeccion(createSeccionDto: CreateSeccionDto): Promise<Seccion> {
    const seccion = new this.seccionModel(createSeccionDto);
    return await seccion.save();
  }

  async updateSeccion(
    id: string,
    createSeccionDto: CreateSeccionDto,
  ): Promise<Seccion> {
    const seccion = await this.seccionModel.findByIdAndUpdate(
      id,
      createSeccionDto,
      { new: true },
    );
    return seccion;
  }

  async addPreguntaToSeccion(
    idSeccion: string,
    idPregunta: string,
  ): Promise<Seccion> {
    const seccion = await this.seccionModel.findByIdAndUpdate(
      idSeccion,
      {
        $addToSet: {
          preguntas: idPregunta,
        },
      },
      { new: true },
    );
    return seccion;
  }

  async addPreguntasToSeccion(
    idSeccion: string,
    idsPreguntas: string[],
  ): Promise<Seccion> {
    const seccion = await this.seccionModel.findByIdAndUpdate(
      idSeccion,
      {
        $addToSet: {
          preguntas: {
            $each: idsPreguntas,
          },
        },
      },
      { new: true },
    );
    return seccion;
  }

  async deleteSeccion(id: string): Promise<Seccion> {
    const seccion = await this.seccionModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return seccion;
  }
}
