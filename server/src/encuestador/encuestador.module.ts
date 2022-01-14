import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EncuestadorController } from './encuestador.controller';
import { EncuestadorSchema } from './schemas/encuestador.schema';
import { EncuestadorService } from './encuestador.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Encuestador',
        schema: EncuestadorSchema,
        collection: 'encuestadores',
      },
    ]),
  ],
  controllers: [EncuestadorController],
  providers: [EncuestadorService],
})
export class EncuestadorModule {}
