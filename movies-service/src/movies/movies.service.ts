import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

  async create(movieData: { title: string; description: string; releaseYear: number }) {
    return this.movieModel.create(movieData);
  }

  async findAll() {
    return this.movieModel.find();
  }
}
