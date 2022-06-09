import { forwardRef, Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './movie.schema';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/users/user.module';
import { User, UserSchema } from 'src/users/user.schema';
import { CommentSchema, Comment } from 'src/comment/comment.schema';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    forwardRef(() => AuthModule),
    UserModule,
  ],
  exports: [MoviesService, MoviesModule],
})
export class MoviesModule {}
