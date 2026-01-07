import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('series')
export class SeriesController {
  constructor(private service: SeriesService) {}

  @Get()
  findAll() {
    return this.service.findAll(); // 🔓 Público
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateSeriesDto) {
    return this.service.create(dto); // 🔒 Privado
  }
}
