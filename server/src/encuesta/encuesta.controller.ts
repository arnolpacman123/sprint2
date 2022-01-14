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

import { CreateEncuestaDto } from './dto/encuesta.dto';
import { EncuestaService } from './encuesta.service';

@Controller('encuesta')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const encuestas = await this.encuestaService.getEncuestas();
    return res.status(HttpStatus.OK).json(encuestas);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let encuesta = null;
    if (Types.ObjectId.isValid(id)) {
      encuesta = await this.encuestaService.getEncuesta(id);
    }
    return res.status(HttpStatus.OK).json(encuesta);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createEncuestaDto: CreateEncuestaDto,
  ) {
    const encuesta = await this.encuestaService.createEncuesta(
      createEncuestaDto,
    );
    return res.status(HttpStatus.CREATED).json(encuesta);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createEncuestaDto: CreateEncuestaDto,
  ) {
    const encuesta = await this.encuestaService.updateEncuesta(
      id,
      createEncuestaDto,
    );
    return res.status(HttpStatus.OK).json(encuesta);
  }

  @Put('/add-seccion-to-encuesta/:id')
  async addSeccionToEncuesta(
    @Res() res: Response,
    @Param('id') idEncuesta: string,
    @Body() createEncuestaDto: any,
  ) {
    const { idSeccion } = createEncuestaDto;
    const encuesta = await this.encuestaService.addSeccionToEncuesta(
      idEncuesta,
      idSeccion,
    );
    return res.status(HttpStatus.OK).json(encuesta);
  }

  @Put('/add-secciones-to-encuesta/:id')
  async addSeccionesToEncuesta(
    @Res() res: Response,
    @Param('id') idEncuesta: string,
    @Body() createEncuestaDto: any,
  ) {
    const { idsSecciones } = createEncuestaDto;
    const encuesta = await this.encuestaService.addSeccionesToEncuesta(
      idEncuesta,
      idsSecciones,
    );
    return res.status(HttpStatus.OK).json(encuesta);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const encuesta = await this.encuestaService.deleteEncuesta(id);
    return res.status(HttpStatus.OK).json(encuesta);
  }
}
