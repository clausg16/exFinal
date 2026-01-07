import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private repo: Repository<Serie>,
  ) {}

  create(dto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find({ relations: ['episodios'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['episodios'],
    });
  }
}
