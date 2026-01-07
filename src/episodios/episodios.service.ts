import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episodio } from './entities/episodio.entity';
import { Series } from '../series/entities/series.entity';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';

@Injectable()
export class EpisodiosService {
  constructor(
    @InjectRepository(Episodio)
    private readonly episodioRepository: Repository<Episodio>,

    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>, // si necesitas validar o relacionar con Series
  ) {}

  create(createEpisodioDto: CreateEpisodioDto) {
    const episodio = this.episodioRepository.create(createEpisodioDto);
    return this.episodioRepository.save(episodio);
  }

  findAll() {
    return this.episodioRepository.find({ relations: ['series'] });
  }

  findOne(id: number) {
    return this.episodioRepository.findOne({ where: { id }, relations: ['series'] });
  }

  update(id: number, updateEpisodioDto: UpdateEpisodioDto) {
    return this.episodioRepository.update(id, updateEpisodioDto);
  }

  remove(id: number) {
    return this.episodioRepository.softDelete(id);
  }
}
