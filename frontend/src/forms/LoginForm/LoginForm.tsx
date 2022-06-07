import { Form, Input, message } from "antd";
import {useContext, useState} from 'react'
import { Link, useNavigate  } from "react-router-dom";
import { ContainerLoginForm, StyledLoginForm } from "./LoginFormStyle";
import logo from '../../assets/img/main/logo__COLOR_main-1.svg';
import { login } from "../../services/http/auth/auth";
import { observer } from "mobx-react-lite";
import { Context } from '../../';

const LoginForm = observer(() => {

    //@ts-ignore
    const { authStore } = useContext(Context);

    const onFinish = (values: any) => {
        login(values)
        .then((response) => {
            const data = response?.data
            if(data) {
                localStorage.setItem('auth-token', data.token)
                authStore.setToken(data.token)
                authStore.setUser(data.user)
                authStore.setResult(null)
                //navigate('/')
            }
        })
        .catch(e => {
            if(e.response.status === 401) {
                authStore.setResult({result:'error'})
                message.error(e.response.data.message)
            }
        })
    };

    return(
        <StyledLoginForm>
            <ContainerLoginForm>
            <div className="login-form">
                    <div className="content">
                        <div className="link">
                            <Link to={'/'}><img src={logo} /></Link>
                        </div>
                        <h2>Рады видеть!</h2>
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label='E-mail'
                                name="email"
                                validateStatus={authStore.result ? (authStore.result.result === "error" ? "error" : "success") : undefined}
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Введенный адрес электронной почты недействителен!',
                                    },
                                    {
                                        required: true,
                                        message: 'Пожалуйста, введите свой E-mail!',
                                    },
                                ]}>
                                <Input placeholder="Введите E-mail"  type='email'/>
                            </Form.Item>
                            <Form.Item 
                            label='Пароль'
                            name="password"
                            validateStatus={authStore.result ? (authStore.result.result === "error" ? "error" : "success") : undefined}
                            rules={[
                                {
                                  required: true,
                                  message: 'Пожалуйста, введите свой пароль!',
                                },
                              ]}
                            >
                                <Input placeholder="Введите пароль" type='password'/>
                            </Form.Item>
                            <button type="submit">Войти</button>
                            <p>Ещё не зарегистрированы?<Link to="/register">Регистрация</Link></p>
                        </Form>
                    </div>
                </div>
            </ContainerLoginForm>
        </StyledLoginForm>
    )
})

export default LoginForm;