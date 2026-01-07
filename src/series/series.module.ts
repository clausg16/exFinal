import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { Series } from './entities/series.entity';
import { AuthModule } from '../auth/auth.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Series]),
    AuthModule, 
  ],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
