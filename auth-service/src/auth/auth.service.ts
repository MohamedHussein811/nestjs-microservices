import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as jwt from 'jsonwebtoken';
import {compare} from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(email: string, password: string) {
    const user = await this.userModel.create({ email, password });
    return { message: 'User created successfully', userId: user._id };
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
    return { token };
  }

  async findAll() {
    return this.userModel.find();
  }
  

  async update(id: string, user: { email: string; password: string }) {
    const updatedUser = await this.userModel.findByIdAndUpdate
    (id, user, { new: true });
    return updatedUser;
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

}


