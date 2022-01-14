import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TipoPregunta } from './interfaces/tipo-pregunta.interface';
import { CreateTipoPreguntaDto } from './dto/tipo-pregunta.dto';

@Injectable()
export class TipoPreguntaService {
  constructor(
    @InjectModel('TipoPregunta')
    private readonly tipoPreguntaModel: Model<TipoPregunta>,
  ) {}

  async getTiposPreguntas(): Promise<TipoPregunta[]> {
    const tipoPreguntas = await this.tipoPreguntaModel
      .find();
    return tipoPreguntas;
  }

  async getTipoPregunta(id: string): Promise<TipoPregunta> {
    const tipoPregunta = await this.tipoPreguntaModel
      .findById(id);
    return tipoPregunta;
  }

  async createTipoPregunta(
    createTipoPreguntaDto: CreateTipoPreguntaDto,
  ): Promise<TipoPregunta> {
    const tipoPregunta = new this.tipoPreguntaModel(createTipoPreguntaDto);
    return await tipoPregunta.save();
  }

  async updateTipoPregunta(
    id: string,
    createTipoPreguntaDto: CreateTipoPreguntaDto,
  ): Promise<TipoPregunta> {
    const tipoPregunta = await this.tipoPreguntaModel.findByIdAndUpdate(
      id,
      createTipoPreguntaDto,
      { new: true },
    );
    return tipoPregunta;
  }

  async deleteTipoPregunta(id: string): Promise<TipoPregunta> {
    const tipoPregunta = await this.tipoPreguntaModel.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
    );
    return tipoPregunta;
  }
}
