import {makeAutoObservable} from "mobx";

export default class CommentsStore {
    private _openAnswer: boolean;
    constructor() {

        this._openAnswer = false
        makeAutoObservable(this)
    }

    setOpenAnswer(bool:boolean) {
        this._openAnswer = bool
    }

    get openAnswer () {
        return this._openAnswer
    }
}