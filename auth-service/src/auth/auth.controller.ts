import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    return this.authService.signup(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Get('users')
  async findAll() {
    return this.authService.findAll();
  }
  
  @Put('users/:id')
  async update(@Body() body: { email: string; password: string }, @Param('id') id: string) {
    return this.authService.update(id, body);
  }

  @Delete('users/:id')
  async remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

}
