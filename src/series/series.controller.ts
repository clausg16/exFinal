import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  // 🔓 PÚBLICO: GET no requiere token
  @Get()
  findAll() {
    return this.seriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesService.findOne(+id);
  }

  // 🔒 PRIVADO: POST requiere token
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSerieDto: CreateSeriesDto) {
    return this.seriesService.create(createSerieDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSerieDto: UpdateSeriesDto) {
    return this.seriesService.update(+id, updateSerieDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesService.remove(+id);
  }
}
