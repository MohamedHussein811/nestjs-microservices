import { Controller, Get, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() body: { title: string; description: string; releaseYear: number }) {
    return this.moviesService.create(body);
  }

  @Get()
  async findAll() {
    return this.moviesService.findAll();
  }
}
