import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EncuestaController } from './encuesta.controller';
import { EncuestaSchema } from './schemas/encuesta.schema';
import { EncuestaService } from './encuesta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Encuesta', schema: EncuestaSchema, collection: 'encuestas' },
    ]),
  ],
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
