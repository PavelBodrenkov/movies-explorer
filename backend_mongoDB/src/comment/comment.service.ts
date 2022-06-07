import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from 'src/movies/movie.schema';
import { CommentDocument, Comment } from './comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>) { }

    async createComment(dto: CreateCommentDto, req:any) {
        const {_id} = req.user
        if(!dto.parent) {
            const comment = await this.commentModel.create({body:dto.body, owner:_id, movie:dto.movie})
            const movie = await this.movieModel.findById(dto.movie)
            console.log('movie', movie);
            
            movie.comments.push(comment._id)
            await movie.save();
            return comment
        } else {
            const parent = await this.commentModel.findById(dto.parent)
            if(!parent) {
                console.log('нет родителя');
            }
            const comment = await this.commentModel.create({...dto, owner:_id})
            parent.children.push(comment._id)
            await parent.save()
            return comment
        }
    }

    async getCommentId(req:any) {
        const {id} = req.params
        const comment = await this.commentModel.findById({_id:id})
        return comment
    }

    async getComments() {
        const comment = await this.commentModel.find({})
        return comment
    }
}
