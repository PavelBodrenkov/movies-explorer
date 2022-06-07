import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Comment } from 'src/comment/comment.schema';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  country: string;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  director: number;

  @Prop({ type: Number, required: [true, 'Поле обязательно для заполнения'] })
  duration: number;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  year: string;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  description: string;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  image: string;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  trailer: string;

  @Prop({ type: Number, required: [true, 'Поле обязательно для заполнения'] })
  owner: number;

  @Prop({ type: Number, required: [true, 'Поле обязательно для заполнения'] })
  movieId: number;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  nameRU: string;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  nameEN: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  likes: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  disLikes: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
