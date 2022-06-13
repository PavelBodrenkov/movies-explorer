import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Movie } from 'src/movies/movie.schema';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: 'Pavel', description: 'Имя' })
  @Prop({ required: [true, 'Поле обязательно для заполнения'], type: String })
  name: string;

  @ApiProperty({ example: 'Pavel@yandex.ru', description: 'Email' })
  @Prop({
    unique: true,
    type: String,
    required: [true, 'Поле обязательно для заполнения'],
  })
  email: string;

  @ApiProperty({ example: '123456', description: 'Пароль' })
  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  password: string;

  @ApiProperty({
    example: '[id фильма]',
    description: 'id сохраненных фильмов',
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  favourites: Movie[];
}

export const UserSchema = SchemaFactory.createForClass(User);
