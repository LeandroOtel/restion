import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { PlatoController } from './plato.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatoSchema } from './schema/plato.schema'

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Plato', schema: PlatoSchema}
  ])],
  providers: [PlatoService],
  controllers: [PlatoController]
})
export class PlatoModule {}