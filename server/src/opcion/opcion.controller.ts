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

import { CreateOpcionDto } from './dto/opcion.dto';
import { OpcionService } from './opcion.service';

@Controller('opcion')
export class OpcionController {
  constructor(private readonly opcionService: OpcionService) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const opciones = await this.opcionService.getOpciones();
    return res.status(HttpStatus.OK).json(opciones);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let opcion = null;
    if (Types.ObjectId.isValid(id)) {
      opcion = await this.opcionService.getOpcion(id);
    }
    return res.status(HttpStatus.OK).json(opcion);
  }

  @Post('/create')
  async create(@Res() res: Response, @Body() createOpcionDto: CreateOpcionDto) {
    const opcion = await this.opcionService.createOpcion(createOpcionDto);
    return res.status(HttpStatus.CREATED).json(opcion);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createOpcionDto: CreateOpcionDto,
  ) {
    const opcion = await this.opcionService.updateOpcion(id, createOpcionDto);
    return res.status(HttpStatus.OK).json(opcion);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const opcion = await this.opcionService.deleteOpcion(id);
    return res.status(HttpStatus.OK).json(opcion);
  }
}
