import {makeAutoObservable} from "mobx";
import AuthStore from "./AuthStore";
import {getMoviesProps, getSaveMoviesProps, MovieProps} from "../types/moviesTypes";
import {deleteFavourites, favourites, getMovies, getSaveFavourites, serachMovies} from "../services/http/movies";
import {UserProps} from "../types/userTypes";

export default class MoviesStore {
    private _films: any[];
    private _isLoading: boolean;
    private _count: number;
    private userStore: any;
    private _offset: number;
    private _check: boolean;
    private _searchText: string;

    constructor(authStore: AuthStore) {
        this.userStore = authStore
        this._films = []
        this._isLoading = false
        this._count = 0
        this._offset = 0
        this._check = false
        this._searchText = ''


        makeAutoObservable(this)
    }

    setOffset(data: number) {
        this._offset = data
    }

    setCount(num: number) {
        this._count = num
    }

    setIsLoading(bool: boolean) {
        this._isLoading = bool
    }

    setFilms(arr: any[]) {
        this._films = arr
    }

    //Слушатель инпута поиска фильмов
    handleSearchMovies(text: string) {
        this._searchText = text
    }

    //Слушатель свича короткометражек
    handleCheckMovies(check: boolean) {
        this._check = check
    }

    //Отправка запроса на бэк по поиску фильмов
    sendSearch() {
        this.setOffset(0);
        if (this._searchText !== "") {
            serachMovies(this._searchText, this._check).then((res: { data: MovieProps[] }) => {
                this.setFilms(res.data);
            });
        } else {
            getMovies(this._offset).then((res: getMoviesProps) => {
                this.setFilms(res.data.movies);
                this.setCount(res.data.count);
                this.setOffset(12);
            });
        }
    };

    //Сохранить или удалить из сохраненных фильмов
    submitSaveMovie(film: MovieProps, flag: string) {
        switch (flag) {
            case'movies':
                if (this.userStore?.user?.favourites?.includes(film._id)) {
                    deleteFavourites(film._id).then((res: UserProps) => {
                        this.userStore?.setUser(res.data);
                    });
                } else {
                    favourites(film._id).then((res: UserProps) => {
                        this.userStore?.setUser(res.data);
                    });
                }
                break
            case 'save-movies':
                deleteFavourites(film._id)
                    .then((res: UserProps) => {
                        this.userStore?.setUser(res.data)
                        let tmp = this.films.filter((mov: MovieProps) => mov._id !== film._id)
                        this.setFilms(tmp)
                    })
                break
        }

    };

    //Прагинация списка фильмов
    moreMovie(flag: string) {
        switch (flag) {
            case'movies':
                getMovies(this._offset).then((res: getMoviesProps) => {
                    let tmp = [...this._films, ...res.data.movies]
                    this.setFilms(tmp)
                    this._offset = this._offset + 12
                });
                break
            case 'save-movies':
                getSaveFavourites(this._offset)
                    .then((res: getSaveMoviesProps) => {
                        let tmp = [...this._films, ...res.data.movie]
                        this.setFilms(tmp)
                        this._offset = this._offset + 12
                    })
        }
    }

    //Получить фильмы
    getAllMovies() {
        this.setIsLoading(true);
        this.setOffset(0)
        getMovies(this._offset)
            .then((res: getMoviesProps) => {
                if (res) {
                    this.setFilms(res?.data?.movies);
                    this.setCount(res.data.count);
                    this.setOffset(12);
                }
            })
            .catch((e) => {
                console.log(e);
                this.setIsLoading(false);
            })
            .finally(() => this.setIsLoading(false));
    }

    //Получить сохраненные фильмы
    getSaveMovies() {
        this.setIsLoading(true)
        this.setOffset(0)
        getSaveFavourites(this._offset)
            .then((item: getSaveMoviesProps) => {
                this.setFilms(item.data.movie)
                this.setCount(item.data.count)
                this.setOffset(12)
            })
            .catch((e) => {
                console.log(e)
                this.setIsLoading(false)
            })
            .finally(() => this.setIsLoading(false))
    }

    //--------GET------------------------//

    get films() {
        return this._films
    }

    get isLoading() {
        return this._isLoading
    }

    get count() {
        return this._count
    }

    get offset() {
        return this._offset
    }
}