import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() moviesDto: CreateMoviesDto) {
    return this.movieService.createMovies(moviesDto);
  }

  //Получить фильмы
  @UseGuards(JwtAuthGuard)
  @Get()
  getMovies(@Request() req: any) {
    return this.movieService.getMovies(req);
  }

  @Get('movie/:id')
  getMovie(@Param() params: string) {
    return this.movieService.getMovie(params);
  }

  //Получить сохраненные фильмы
  @UseGuards(JwtAuthGuard)
  @Get('/get-save')
  getSaveMovies(@Request() req: any) {
    return this.movieService.getSaveMovies(req);
  }

  //Сохранить в избранное фильм
  @UseGuards(JwtAuthGuard)
  @Put('favourites/:id')
  saveFavourites(@Request() req: any) {
    return this.movieService.saveFavourites(req);
  }

  //Удалить из избранного
  @UseGuards(JwtAuthGuard)
  @Delete('favourites/:id')
  deleteFavourites(@Request() req: any) {
    return this.movieService.deleteFavourites(req);
  }

  //Поствить лайк
  @UseGuards(JwtAuthGuard)
  @Put('like/:id')
  addLike(@Request() req: any) {
    return this.movieService.addLike(req);
  }

  //Удалить лайк
  @UseGuards(JwtAuthGuard)
  @Delete('like/:id')
  deleteLike(@Request() req: any) {
    return this.movieService.deleteLike(req);
  }

  //Поствить дизлайк
  @UseGuards(JwtAuthGuard)
  @Put('dislike/:id')
  addDisLike(@Request() req: any) {
    return this.movieService.addDisLike(req);
  }

  //Удалить дизлайк
  @UseGuards(JwtAuthGuard)
  @Delete('dislike/:id')
  deleteDisLike(@Request() req: any) {
    return this.movieService.deleteDisLike(req);
  }

  //Поиск фильмов
  @UseGuards(JwtAuthGuard)
  @Get('/search')
  searchMovies(@Request() req: any) {
    return this.movieService.searchMovies(req);
  }

  //Поиск фильмов
  @UseGuards(JwtAuthGuard)
  @Get('/favourites/search')
  searchSaveMovies(@Request() req: any) {
    return this.movieService.searchSaveMovies(req);
  }
}
