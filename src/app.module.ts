import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatoModule } from './plato/plato.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MesaModule } from './mesa/mesa.module';

@Module({
  imports: [PlatoModule, 
  MongooseModule.forRoot('mongodb://localhost/restion'), MesaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
