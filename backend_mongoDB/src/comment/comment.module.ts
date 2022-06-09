import { forwardRef, Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema, Comment } from './comment.schema';
import { UserModule } from 'src/users/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/users/user.schema';
import { Movie, MovieSchema } from 'src/movies/movie.schema';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
  providers: [CommentService],
  controllers: [CommentController],
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    forwardRef(() => AuthModule),
    UserModule,
    MoviesModule,
  ],
  exports: [CommentModule],
})
export class CommentModule {}
