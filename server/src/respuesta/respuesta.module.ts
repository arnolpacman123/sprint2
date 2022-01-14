import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RespuestaController } from './respuesta.controller';
import { RespuestaSchema } from './schemas/respuesta.schema';
import { RespuestaService } from './respuesta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Respuesta', schema: RespuestaSchema, collection: 'respuestas' },
    ]),
  ],
  controllers: [RespuestaController],
  providers: [RespuestaService],
})
export class RespuestaModule {}
