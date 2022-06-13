import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Movie } from 'src/movies/movie.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: [true, 'Поле обязательно для заполнения'], type: String })
  name: string;

  @Prop({
    unique: true,
    type: String,
    required: [true, 'Поле обязательно для заполнения'],
  })
  email: string;

  @Prop({ type: String, required: [true, 'Поле обязательно для заполнения'] })
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  favourites: Movie[];
}

export const UserSchema = SchemaFactory.createForClass(User);
