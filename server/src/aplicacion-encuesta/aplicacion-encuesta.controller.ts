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

import { CreateAplicacionEncuestaDto } from './dto/aplicacion-encuesta.dto';
import { AplicacionEncuestaService } from './aplicacion-encuesta.service';

@Controller('aplicacion-encuesta')
export class AplicacionEncuestaController {
  constructor(
    private readonly aplicacionEncuestaService: AplicacionEncuestaService,
  ) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const preguntas =
      await this.aplicacionEncuestaService.getAplicacionesEncuestas();
    return res.status(HttpStatus.OK).json(preguntas);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let pregunta = null;
    if (Types.ObjectId.isValid(id)) {
      pregunta = await this.aplicacionEncuestaService.getAplicacionEncuesta(id);
    }
    return res.status(HttpStatus.OK).json(pregunta);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createTipoPreguntaDto: CreateAplicacionEncuestaDto,
  ) {
    const pregunta =
      await this.aplicacionEncuestaService.createAplicacionEncuesta(
        createTipoPreguntaDto,
      );
    return res.status(HttpStatus.CREATED).json(pregunta);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createTipoPreguntaDto: CreateAplicacionEncuestaDto,
  ) {
    const pregunta =
      await this.aplicacionEncuestaService.updateAplicacionEncuesta(
        id,
        createTipoPreguntaDto,
      );
    return res.status(HttpStatus.OK).json(pregunta);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const pregunta =
      await this.aplicacionEncuestaService.deleteAplicacionEncuesta(id);
    return res.status(HttpStatus.OK).json(pregunta);
  }
}
