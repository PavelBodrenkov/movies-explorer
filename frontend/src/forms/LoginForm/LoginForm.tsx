import { Form, Input, message } from "antd";
import {useContext} from 'react'
import { Link } from "react-router-dom";
import { ContainerLoginForm, StyledLoginForm } from "./LoginFormStyle";
import logo from '../../assets/img/main/logo__COLOR_main-1.svg';
import { observer } from "mobx-react-lite";
import { Context } from '../../';

const LoginForm = observer(() => {

    const { accountStore, authStore } = useContext<any>(Context);

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
                            onFinish={(values) => accountStore.handleSubmit(values, 'login')}
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