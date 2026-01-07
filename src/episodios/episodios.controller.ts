import { Controller, Get, Post, Body, UseGuards, Param, Patch, Delete } from '@nestjs/common';
import { EpisodiosService } from './episodios.service';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { AuthGuard } from '../auth/auth.guard';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';

@Controller('episodios')
export class EpisodiosController {
  constructor(private readonly episodiosService: EpisodiosService) {}

  // 🔓 PÚBLICO
  @Get()
  findAll() {
    return this.episodiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodiosService.findOne(+id);
  }

  // 🔒 PRIVADO
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createEpisodioDto: CreateEpisodioDto) {
    return this.episodiosService.create(createEpisodioDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpisodioDto: UpdateEpisodioDto) {
    return this.episodiosService.update(+id, updateEpisodioDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodiosService.remove(+id);
  }
}

