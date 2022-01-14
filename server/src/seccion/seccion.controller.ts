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

import { CreateSeccionDto } from './dto/seccion.dto';
import { SeccionService } from './seccion.service';

@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const seccions = await this.seccionService.getSecciones();
    return res.status(HttpStatus.OK).json(seccions);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let seccion = null;
    if (Types.ObjectId.isValid(id)) {
      seccion = await this.seccionService.getSeccion(id);
    }
    return res.status(HttpStatus.OK).json(seccion);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createSeccionDto: CreateSeccionDto,
  ) {
    const seccion = await this.seccionService.createSeccion(createSeccionDto);
    return res.status(HttpStatus.CREATED).json(seccion);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createSeccionDto: CreateSeccionDto,
  ) {
    const seccion = await this.seccionService.updateSeccion(
      id,
      createSeccionDto,
    );
    return res.status(HttpStatus.OK).json(seccion);
  }

  @Put('/add-pregunta-to-seccion/:id')
  async addPreguntaToSeccion(
    @Res() res: Response,
    @Param('id') idSeccion: string,
    @Body() createSeccionDto: any,
  ) {
    const { idPregunta } = createSeccionDto;
    const seccion = await this.seccionService.addPreguntaToSeccion(
      idSeccion,
      idPregunta,
    );
    return res.status(HttpStatus.OK).json(seccion);
  }

  @Put('/add-preguntas-to-seccion/:id')
  async addOpcionesToPregunta(
    @Res() res: Response,
    @Param('id') idSeccion: string,
    @Body() createSeccionDto: any,
  ) {
    const { idsPreguntas } = createSeccionDto;
    const seccion = await this.seccionService.addPreguntasToSeccion(
      idSeccion,
      idsPreguntas,
    );
    return res.status(HttpStatus.OK).json(seccion);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const seccion = await this.seccionService.deleteSeccion(id);
    return res.status(HttpStatus.OK).json(seccion);
  }
}
