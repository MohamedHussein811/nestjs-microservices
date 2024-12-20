import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() body: { title: string; description: string; releaseYear: number }) {
    return this.moviesService.create(body);
  }

  @Put(':id')
  async update(@Body() body: { title: string; description: string; releaseYear: number }, @Param('id') id: string) {
    return this.moviesService.update(id, body);

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }

  

  

  @Get()
  async findAll() {
    return this.moviesService.findAll();
  }
}
