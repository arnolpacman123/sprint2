import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TipoPreguntaController } from './tipo-pregunta.controller';
import { TipoPreguntaSchema } from './schemas/tipo-pregunta.schema';
import { TipoPreguntaService } from './tipo-pregunta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'TipoPregunta',
        schema: TipoPreguntaSchema,
        collection: 'tipos-preguntas',
      },
    ]),
  ],
  controllers: [TipoPreguntaController],
  providers: [TipoPreguntaService],
})
export class TipoPreguntaModule {}
