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

  async update(id: string, movieData: { title: string; description: string; releaseYear: number }) {
    return this.movieModel.findByIdAndUpdate(id, movieData, { new: true });

  }

  async remove(id: string) {
    return this.movieModel.findByIdAndDelete(id);
  }
  

  async findAll() {
    return this.movieModel.find();
  }

  async findOne(id: string) {
    return this.movieModel.findById(id);
  }
}
