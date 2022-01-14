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
  
  import { CreateRespuestaDto } from './dto/respuesta.dto';
  import { RespuestaService } from './respuesta.service';
  
  @Controller('respuesta')
  export class RespuestaController {
    constructor(private readonly respuestaService: RespuestaService) {}
  
    @Get('/')
    async getAll(@Res() res: Response) {
      const respuestas = await this.respuestaService.getRespuestas();
      return res.status(HttpStatus.OK).json(respuestas);
    }
  
    @Get('/:id')
    async getOne(@Res() res: Response, @Param('id') id: string) {
      let respuesta = null;
      if (Types.ObjectId.isValid(id)) {
        respuesta = await this.respuestaService.getRespuesta(id);
      }
      return res.status(HttpStatus.OK).json(respuesta);
    }
  
    @Post('/create')
    async create(@Res() res: Response, @Body() createRespuestaDto: CreateRespuestaDto) {
      const respuesta = await this.respuestaService.createRespuesta(createRespuestaDto);
      return res.status(HttpStatus.CREATED).json(respuesta);
    }
  
    @Put('/update/:id')
    async update(
      @Res() res: Response,
      @Param('id') id: string,
      @Body() createRespuestaDto: CreateRespuestaDto,
    ) {
      const respuesta = await this.respuestaService.updateRespuesta(id, createRespuestaDto);
      return res.status(HttpStatus.OK).json(respuesta);
    }
  
    @Put('/delete/:id')
    async delete(@Res() res: Response, @Param('id') id: string) {
      const respuesta = await this.respuestaService.deleteRespuesta(id);
      return res.status(HttpStatus.OK).json(respuesta);
    }
  }
  