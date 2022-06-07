import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/user.schema';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { Movie, MovieDocument } from './movie.schema';

@Injectable()
export class MoviesService {

    constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createMovies(dto: CreateMoviesDto) {
        const movies = await this.movieModel.create({ ...dto })
        return movies
    }

    async getMovies(req: any) {
        if (req.query.offset) {
            const count = await this.movieModel.count()
            const movies = await this.movieModel.find().limit(12).skip(req.query.offset)
            return {
                movies,
                count: count
            }
        }
    }

    async getMovie(params:any) {
        const {id} = params
        const movie = await this.movieModel.findById({_id:id}).populate('comments')
        return movie
    }

    async getSaveMovies(req: any) {
        const { _id } = req.user
        let arr: any[] = []
        if (req.query.offset) {
            const user = await this.userModel.findById({ _id })
            const movie = await this.movieModel.find()
            movie.map((item) => {
                if (user.favourites.includes(item._id)) {
                    arr.push(item)
                }
            })
            return {
                movie: req.query.offset == 0
                    ? arr.splice(0, 12)
                    : arr.splice(req.query.offset, req.query.offset * 2),
                count: user.favourites.length
            }
        }
    }

    async saveFavourites(req: any) {
        const { _id } = req.user
        const { id } = req.params
        const user = await this.userModel.findByIdAndUpdate(
            _id,
            { $addToSet: { favourites: id } },
            { new: true }
        )
        return user
    }

    async deleteFavourites(req: any) {
        const { _id } = req.user
        const { id } = req.params

        const user = await this.userModel.findByIdAndUpdate(
            _id,
            { $pull: { favourites: id } },
            { new: true }
        )
        return user
    }

    async addLike(req: any) {
        const { id } = req.params
        const movie = await this.movieModel.findByIdAndUpdate(
            id,
            { $addToSet: { likes: req.user._id } },
            { new: true }
        )
        return movie
    }

    async deleteLike(req: any) {
        const { id } = req.params
        const movie = await this.movieModel.findByIdAndUpdate(
            id,
            { $pull: { likes: req.user._id } },
            { new: true }
        )
        return movie
    }

    async addDisLike(req: any) {
        const { id } = req.params
        const movie = await this.movieModel.findByIdAndUpdate(
            id,
            { $addToSet: { disLikes: req.user._id } },
            { new: true }
        )
        return movie
    }

    async deleteDisLike(req: any) {
        const { id } = req.params
        const movie = await this.movieModel.findByIdAndUpdate(
            id,
            { $pull: { disLikes: req.user._id } },
            { new: true }
        )
        return movie
    }

    async searchMovies(req: any) {
        if (req.query.search) {
            const movies = await this.movieModel.find()
            let arr: any[] = []
            if (req.query.short) {
                movies.map((item) => {
                    if (item.nameRU.toLowerCase().includes(req.query.search.toLowerCase()) && item.duration <= 40) {
                        arr.push(item)
                    }
                })
            } else {
                movies.map((item) => {
                    if (item.nameRU.toLowerCase().includes(req.query.search.toLowerCase())) {
                        arr.push(item)
                    }
                })
            }
            return arr
        }
    }

    async searchSaveMovies(req: any) {
        const { _id } = req.user
        let arr: any[] = []
        if (req.query.search) {
            const user = await this.userModel.findById({ _id })
            const movie = await this.movieModel.find()
            if (req.query.short) {
                movie.map((item) => {
                    if (user.favourites.includes(item._id)) {
                        if (item.nameRU.toLowerCase().includes(req.query.search.toLowerCase()) && item.duration <= 40) {
                            arr.push(item)
                        }
                    }
                })
            } else {
                movie.map((item) => {
                    if (user.favourites.includes(item._id)) {
                        if (item.nameRU.toLowerCase().includes(req.query.search.toLowerCase())) {
                            arr.push(item)
                        }
                    }
                })
            }
            return arr
        }
    }
}
