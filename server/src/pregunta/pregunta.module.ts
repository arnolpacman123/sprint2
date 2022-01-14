import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PreguntaController } from './pregunta.controller';
import { PreguntaSchema } from './schemas/pregunta.schema';
import { PreguntaService } from './pregunta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Pregunta', schema: PreguntaSchema, collection: 'preguntas' },
    ]),
  ],
  controllers: [PreguntaController],
  providers: [PreguntaService]
})
export class PreguntaModule {}
