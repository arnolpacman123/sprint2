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

import { CreatePreguntaDto } from './dto/pregunta.dto';
import { PreguntaService } from './pregunta.service';

@Controller('pregunta')
export class PreguntaController {
  constructor(private readonly preguntaService: PreguntaService) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const preguntas = await this.preguntaService.getPreguntas();
    return res.status(HttpStatus.OK).json(preguntas);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let pregunta = null;
    if (Types.ObjectId.isValid(id)) {
      pregunta = await this.preguntaService.getPregunta(id);
    }
    return res.status(HttpStatus.OK).json(pregunta);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createPreguntaDto: CreatePreguntaDto,
  ) {
    const pregunta = await this.preguntaService.createPregunta(
      createPreguntaDto,
    );
    return res.status(HttpStatus.CREATED).json(pregunta);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createPreguntaDto: CreatePreguntaDto,
  ) {
    const pregunta = await this.preguntaService.updatePregunta(
      id,
      createPreguntaDto,
    );
    return res.status(HttpStatus.OK).json(pregunta);
  }

  @Put('/add-opcion-to-pregunta/:id')
  async addOpcionToPregunta(
    @Res() res: Response,
    @Param('id') idPregunta: string,
    @Body() createPreguntaDto: any,
  ) {
    const { idOpcion } = createPreguntaDto;
    const pregunta = await this.preguntaService.addOpcionToPregunta(
      idPregunta,
      idOpcion,
    );
    return res.status(HttpStatus.OK).json(pregunta);
  }

  @Put('/add-opciones-to-pregunta/:id')
  async addOpcionesToPregunta(
    @Res() res: Response,
    @Param('id') idPregunta: string,
    @Body() createPreguntaDto: any,
  ) {
    const { idsOpciones } = createPreguntaDto;
    const pregunta = await this.preguntaService.addOpcionesToPregunta(
      idPregunta,
      idsOpciones,
    );
    return res.status(HttpStatus.OK).json(pregunta);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const pregunta = await this.preguntaService.deletePregunta(id);
    return res.status(HttpStatus.OK).json(pregunta);
  }
}
