import {makeAutoObservable} from "mobx";
import {MovieProps} from "../types/moviesTypes";
import {addDisLike, addLike, getMovie, removeDisLike, removeLike} from "../services/http/movies";
import AuthStore from "./AuthStore";
import {createComments, getComments} from "../services/http/comments";
import {CommentTypes} from "../types/commentTypes";

export default class ShowMovieStore {
    private _film: MovieProps;
    private _play: boolean;
    private _volume: number;
    private _commentValue: string;
    private userStore: AuthStore;
    private _comments: CommentTypes[];

    constructor(authStore: AuthStore) {
        this.userStore = authStore
        this._film = {
            comments: [],
            country: '',
            description: '',
            director: '',
            disLikes: [],
            duration: 0,
            image: '',
            likes: [],
            movieId: 0,
            nameRU: '',
            nameEN: '',
            owner: '',
            trailer: '',
            year: '',
            __v: 0,
            _id: '',
        }
        this._play = false
        this._volume = 0
        this._commentValue = ''
        this._comments = []
        makeAutoObservable(this)
    }

    setComments(arr:CommentTypes[]) {
        this._comments = arr
    }

    //Получаем текст коммента
    handleValueComment = (value: string) => {
        this._commentValue = value
    }

    //старт - стоп фильм
    handlePlaying () {
        this._play = !this._play
    }

    //Получение данных громкости
    handleVolume = (value: number) => {
        if (isNaN(value)) {
            return;
        }
        this._volume = value
    }

    //Получить один фильм
    getOneMovie(id: string) {
        getMovie(id).then((movie: { data: MovieProps }) => {
            this._film = movie.data;
        })
    }

    setFilm (film:any) {
        this._film = film
    }

    //Поставить -снять лайк
    handleAddLike = (id: string) => {
        if (this?._film?.likes?.includes(this.userStore?.user?._id)) {
            removeLike(id).then((res: { data: MovieProps }) => {
                this.setFilm(res.data);
            });
        } else {
            if (this?._film?.disLikes?.includes(this.userStore?.user?._id)) {
                removeDisLike(id).then((res1: { data: MovieProps }) => {
                    addLike(res1.data._id).then((res: { data: MovieProps }) => {
                        this.setFilm(res.data);
                    });
                });
            }
            addLike(id).then((res: { data: MovieProps }) => {
                this.setFilm(res.data);
            });
        }
    };

    //Поставить -снять дизлайк
    handleDislike = (id: string) => {
        if (this._film?.disLikes?.includes(this.userStore?.user._id)) {
            removeDisLike(id).then((res: { data: MovieProps }) => {
                this.setFilm(res.data);
            });
        } else {
            if (this._film?.likes?.includes(this.userStore?.user._id)) {
                removeLike(id).then((res: { data: MovieProps }) => {
                    addDisLike(res.data._id).then((res: { data: MovieProps }) => {
                        this.setFilm(res.data);
                    });
                });
            }
            addDisLike(id)
                .then((res: { data: MovieProps }) => {
                    this.setFilm(res.data);
                });
        }
    };

    //Сохранить комментарий
    saveComment = (parent?:string) => {
        createComments(this._commentValue, this._film?._id, parent)
            .then((res) => {
                if (this._film?._id) {
                    getMovie(this._film?._id).then((movie: { data: MovieProps }) => {
                        console.log('movie.data',movie.data)
                        this.setFilm(movie.data);
                    });
                    getComments().then((res:{data:CommentTypes[]}) => {
                        // let arr:CommentTypes[] = []
                        // res?.data?.map((item: CommentTypes) => {
                        //     arr.push(item)
                        // });
                        this._comments = res?.data
                    });
                }
            })
    }

    get film () {
        return this._film
    }

    get play () {
        return this._play
    }

    get volume () {
        return this._volume
    }

    get commentValue () {
        return this._commentValue
    }

    get comments () {
        return this._comments
    }
}