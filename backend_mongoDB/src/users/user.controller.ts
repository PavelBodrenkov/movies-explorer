import {
  Body,
  Controller,
  Get,
  Post, Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user/:id')
  getUserId(@Request() req: any) {
    return this.userService.getUserId(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  getUser(@Request() req: any) {
    return this.userService.getUser(req);
  }

  //@ApiOperation({summary:'Редактировать данные пользователя'})
  //@ApiResponse({status: 200})
  @UseGuards(JwtAuthGuard)
  @Put('/user')
  update(@Body() dto: UpdateUserDto, @Request() req) {
    return this.userService.update(dto, req)
  }

}
