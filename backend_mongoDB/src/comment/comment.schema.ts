import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Movie } from 'src/movies/movie.schema';
import { User } from 'src/users/user.schema';

export type CommentDocument = Comment & Document;


@Schema({timestamps:true})
export class Comment {

  @Prop({type:String, required:[true, 'Поле обязательно для заполнения']})
  body: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Movie'})
  movie: Movie;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Comment'})
  parent: Comment;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}]})
  likes: User[];

  @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}]})
  children: Comment[];

}

export const CommentSchema = SchemaFactory.createForClass(Comment);
