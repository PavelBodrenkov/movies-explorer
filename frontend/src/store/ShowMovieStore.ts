import { makeAutoObservable } from "mobx";

export default class ShowMovieStore {
    private _film: {};

    constructor() {
        this._film = {}
        makeAutoObservable(this)
    }
}