import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episodio } from './entities/episodio.entity';
import { Serie } from '../series/entities/series.entity';

@Injectable()
export class EpisodiosService {
  constructor(
    @InjectRepository(Episodio)
    private episodioRepo: Repository<Episodio>,
    @InjectRepository(Serie)
    private serieRepo: Repository<Serie>,
  ) {}

  async create(dto) {
    const serie = await this.serieRepo.findOneBy({ id: dto.serieId });
    const episodio = this.episodioRepo.create({
      ...dto,
      serie,
    });
    return this.episodioRepo.save(episodio);
  }

  findAll() {
    return this.episodioRepo.find({ relations: ['serie'] });
  }
}
