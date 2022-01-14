import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SeccionController } from './seccion.controller';
import { SeccionSchema } from './schemas/seccion.schema';
import { SeccionService } from './seccion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Seccion', schema: SeccionSchema, collection: 'secciones' },
    ]),
  ],
  controllers: [SeccionController],
  providers: [SeccionService],
})
export class SeccionModule {}
