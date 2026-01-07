import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodiosService } from './episodios.service';
import { EpisodiosController } from './episodios.controller';
import { Episodio } from './entities/episodio.entity';
import { Series } from '../series/entities/series.entity'; // si necesitas la relación
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Episodio, Series]),
  AuthModule,
], 
  controllers: [EpisodiosController],
  providers: [EpisodiosService],
})
export class EpisodiosModule {}
