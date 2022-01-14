import {
  Controller,
  Get,
  Post,
  Put,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { Types } from 'mongoose';

import { CreateTipoPreguntaDto } from './dto/tipo-pregunta.dto';
import { TipoPreguntaService } from './tipo-pregunta.service';

@Controller('tipo-tipoPregunta')
export class TipoPreguntaController {
  constructor(private readonly tipoPreguntaService: TipoPreguntaService) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const tiposPreguntas = await this.tipoPreguntaService.getTiposPreguntas();
    return res.status(HttpStatus.OK).json(tiposPreguntas);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let tipoPregunta = null;
    if (Types.ObjectId.isValid(id)) {
      tipoPregunta = await this.tipoPreguntaService.getTipoPregunta(id);
    }
    return res.status(HttpStatus.OK).json(tipoPregunta);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createTipoPreguntaDto: CreateTipoPreguntaDto,
  ) {
    const tipoPregunta = await this.tipoPreguntaService.createTipoPregunta(
      createTipoPreguntaDto,
    );
    return res.status(HttpStatus.CREATED).json(tipoPregunta);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createTipoPreguntaDto: CreateTipoPreguntaDto,
  ) {
    const tipoPregunta = await this.tipoPreguntaService.updateTipoPregunta(
      id,
      createTipoPreguntaDto,
    );
    return res.status(HttpStatus.OK).json(tipoPregunta);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const tipoPregunta = await this.tipoPreguntaService.deleteTipoPregunta(id);
    return res.status(HttpStatus.OK).json(tipoPregunta);
  }
}
