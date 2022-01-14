import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaModule } from './encuesta/encuesta.module';
import { SeccionModule } from './seccion/seccion.module';
import { MONGO_CONNECTION } from './app.properties';
import { PreguntaModule } from './pregunta/pregunta.module';
import { TipoPreguntaModule } from './tipo-pregunta/tipo-pregunta.module';
import { OpcionModule } from './opcion/opcion.module';
import { AplicacionEncuestaModule } from './aplicacion-encuesta/aplicacion-encuesta.module';
import { EncuestadorModule } from './encuestador/encuestador.module';
import { RespuestaModule } from './respuesta/respuesta.module';

@Module({
  imports: [
    EncuestaModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
    SeccionModule,
    PreguntaModule,
    TipoPreguntaModule,
    OpcionModule,
    AplicacionEncuestaModule,
    EncuestadorModule,
    RespuestaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
