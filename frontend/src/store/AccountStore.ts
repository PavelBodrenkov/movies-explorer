import { message } from "antd";
import { makeAutoObservable } from "mobx";

export default class AuthStore {
    private _edit: boolean;
    private _value: { name: string; email: string; oldValue: {name: string, email: string,} };
    private _result: any;

    constructor() {
        this._edit = false
        this._value = {
            name: '',
            email: '',
            oldValue: {name: '', email: '',}
        }
        this._result = null
        makeAutoObservable(this)
    }

    setResult (bool:any) {
        this._result = bool
    }

    setEdit (bool:boolean) {
        this._edit = bool
    }

    handleValue (key: string, data: string) {
        let tmp = {
            ...this._value,
            [key]:data
        }
        this._value = tmp
    }

    handleEdit () {
        this._edit = true
        this._value.oldValue = {name:this._value.name, email:this._value.email }
    }

    handleCloseEdit (form:any) {
        let tmp = {
            ...this._value,
            name:this._value.oldValue.name,
            email:this._value.oldValue.email,
        }
        this._value = tmp
        form.setFieldsValue({
            name: this.value.oldValue.name,
            email: this.value.oldValue.email
        })
        this._edit = false
        this.setResult({result:'success'})
    }

    get value () {
        return this._value
    }
    get edit () {
        return this._edit
    }

    get result () {
        return this._result
    }

}