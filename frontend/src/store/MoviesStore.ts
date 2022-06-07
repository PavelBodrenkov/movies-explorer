import { makeAutoObservable } from "mobx";

export default class MoviesStore {
    private _films: any[];
    private _saveFilms: any[];
    private _isLoading: boolean;
    private _count: number;

    constructor() {
      
      this._films = []
      this._saveFilms = []
      this._isLoading = false
        this._count = 0
        makeAutoObservable(this)
    }

    setCount (num:number) {
        this._count = num
    }

    setIsLoading(bool:boolean) {
        this._isLoading = bool
    }

    setFilms (arr:any[]) {
        this._films  = arr
    }

    setSaveFilms (arr:any[]) {
        this._saveFilms = arr
    }

    get films () {
        return this._films
    }

    get saveFilms () {
        return this._saveFilms
    }

    get isLoading () {
        return this._isLoading
    }

    get count () {
        return this._count
    }
}