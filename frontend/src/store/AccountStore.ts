import {message} from "antd";
import {makeAutoObservable} from "mobx";
import {login, registration} from "../services/http/auth/auth";
import {UserProps} from "../types/userTypes";
import AuthStore from "./AuthStore";

interface onFinishProps {
    name: string
    email: string
    password: string
}

export default class AccountStore {
    private _edit: boolean;
    private _value: { name: string; email: string; oldValue: { name: string, email: string, } };
    private _result: any;
    private userStore: AuthStore;

    constructor(authStore: AuthStore) {
        this.userStore = authStore
        this._edit = false
        this._value = {
            name: '',
            email: '',
            oldValue: {name: '', email: '',}
        }
        this._result = null
        makeAutoObservable(this)
    }

    setResult(bool: any) {
        this._result = bool
    }

    setEdit(bool: boolean) {
        this._edit = bool
    }

    handleValue(key: string, data: string) {
        let tmp = {
            ...this._value,
            [key]: data
        }
        this._value = tmp
    }

    handleEdit() {
        this._edit = true
        this._value.oldValue = {name: this._value.name, email: this._value.email}
    }

    //Закрыть редактирование
    handleCloseEdit(form: any) {
        let tmp = {
            ...this._value,
            name: this._value.oldValue.name,
            email: this._value.oldValue.email,
        }
        this._value = tmp
        form.setFieldsValue({
            name: this.value.oldValue.name,
            email: this.value.oldValue.email
        })
        this._edit = false
        this.setResult({result: 'success'})
    }

    handleSubmit(values: onFinishProps, flag: string) {
        this._result = null
        const request = flag === 'login' ? login(values) : registration(values)

        request
            .then((response: { data: { token: string, user: UserProps } }) => {
                const data = response?.data
                if (data) {
                    localStorage.setItem('auth-token', data.token)
                    this.userStore.setToken(data.token)
                    this.userStore.setUser(data.user)
                    this.userStore.setResult(null)
                }
            })
            .catch((e: any) => {
                if (e.response.status === 401) {
                    this.userStore.setResult({result: 'error'})
                    message.error(e.response.data.message).then()
                }
            })
    }

    //-------GET---------------------//

    get value() {
        return this._value
    }

    get edit() {
        return this._edit
    }

    get result() {
        return this._result
    }

}