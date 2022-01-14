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

import { CreateEncuestadorDto } from './dto/encuestador.dto';
import { EncuestadorService } from './encuestador.service';

@Controller('encuestador')
export class EncuestadorController {
  constructor(private readonly encuestadorService: EncuestadorService) {}

  @Get('/')
  async getAll(@Res() res: Response) {
    const encuestadores = await this.encuestadorService.getEncuestadores();
    return res.status(HttpStatus.OK).json(encuestadores);
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    let encuestador = null;
    if (Types.ObjectId.isValid(id)) {
      encuestador = await this.encuestadorService.getEncuestador(id);
    }
    return res.status(HttpStatus.OK).json(encuestador);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createEncuestadorDto: CreateEncuestadorDto,
  ) {
    const encuestador = await this.encuestadorService.createEncuestador(
      createEncuestadorDto,
    );
    return res.status(HttpStatus.CREATED).json(encuestador);
  }

  @Put('/update/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createEncuestadorDto: CreateEncuestadorDto,
  ) {
    const encuestador = await this.encuestadorService.updateEncuestador(
      id,
      createEncuestadorDto,
    );
    return res.status(HttpStatus.OK).json(encuestador);
  }

  @Put('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const encuestador = await this.encuestadorService.deleteEncuestador(id);
    return res.status(HttpStatus.OK).json(encuestador);
  }
}
