import { makeAutoObservable } from "mobx";
import { verifyAuth } from "../services/http/auth/auth";

export default class AuthStore {

    private _isAuth: boolean;
    private _user: null;
    private _token: any;
    private _isLoaded: any;
    private _result: null;

    constructor() {
        this._isAuth = false
        this._user = null
        this._token = null
        this._isLoaded = false
        this._result = null
        makeAutoObservable(this)
    }

    setResult (bool:any) {
        this._result = bool
    }

    setToken(tokenData: any) {
        if (tokenData) {
            localStorage.setItem("auth-token", tokenData);
        } else {
            localStorage.removeItem("auth-token");
        }
    };

    async loadData() {
        const tokenData = localStorage.getItem("auth-token");
        this.setToken(tokenData)
        try {
            if (tokenData) {
                const { data } = await verifyAuth();
                this.setUser(data);
            }
        } catch {
            this.setToken(null)
        } finally {
            this.setIsLoaded(true);
        }
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(data: any) {
        this._user = data
    }

    setIsLoaded(bool: boolean) {
        this._isLoaded = bool
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get token() {
        return this._token
    }

    get isLoaded() {
        return this._isLoaded
    }
    
    get result () {
        return this._result
    }
}