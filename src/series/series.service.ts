import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Series } from './entities/series.entity';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>, // <-- aquí se inyecta el repositorio
  ) {}

  create(createSeriesDto: CreateSeriesDto) {
    const serie = this.seriesRepository.create(createSeriesDto);
    return this.seriesRepository.save(serie);
  }

  findAll() {
    return this.seriesRepository.find({ relations: ['episodios'] });
  }

  findOne(id: number) {
    return this.seriesRepository.findOne({ where: { id }, relations: ['episodios'] });
  }

  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return this.seriesRepository.update(id, updateSeriesDto);
  }

  remove(id: number) {
    return this.seriesRepository.delete(id);
  }
}
