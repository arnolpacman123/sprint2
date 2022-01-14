import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AplicacionEncuestaController } from './aplicacion-encuesta.controller';
import { AplicacionEncuestaSchema } from './schemas/aplicacion-encuesta.schema';
import { AplicacionEncuestaService } from './aplicacion-encuesta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'AplicacionEncuesta',
        schema: AplicacionEncuestaSchema,
        collection: 'aplicaciones-encuestas',
      },
    ]),
  ],
  controllers: [AplicacionEncuestaController],
  providers: [AplicacionEncuestaService],
})
export class AplicacionEncuestaModule {}
