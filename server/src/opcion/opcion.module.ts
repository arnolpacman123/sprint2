import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OpcionController } from './opcion.controller';
import { OpcionSchema } from './schemas/opcion.schema';
import { OpcionService } from './opcion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Opcion', schema: OpcionSchema, collection: 'opciones' },
    ]),
  ],
  providers: [OpcionService],
  controllers: [OpcionController],
})
export class OpcionModule {}
