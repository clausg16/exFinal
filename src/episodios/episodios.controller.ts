import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { EpisodiosService } from './episodios.service';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('episodios')
export class EpisodiosController {
  constructor(private service: EpisodiosService) {}

  @Get()
  findAll() {
    return this.service.findAll(); // 🔓 Público
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateEpisodioDto) {
    return this.service.create(dto); // 🔒 Privado
  }
}
