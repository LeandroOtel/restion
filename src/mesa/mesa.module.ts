import { Module } from '@nestjs/common';
import { MesaController } from './mesa.controller';
import { MesaService } from './mesa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MesaSchema } from './schema/mesa.schema';

@Module({
  imports: [ 
    MongooseModule.forFeature([
      {name: 'Mesa', schema: MesaSchema}
    ])
  ],
  controllers: [MesaController],
  providers: [MesaService]
})
export class MesaModule {}
