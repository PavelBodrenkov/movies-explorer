import { ContainerRegisterForm, StyledRegisterForm } from "./RegisterFormStyle"
import logo from '../../assets/img/main/logo__COLOR_main-1.svg';
import {useContext} from 'react'
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Context } from '../../';

const RegisterForm = () => {

     const { accountStore, authStore } = useContext<any>(Context);

    return (
        <StyledRegisterForm>
            <ContainerRegisterForm>
                <div className="register-form">
                    <div className="content">
                        <div className="link">
                            <Link to={'/'}><img src={logo} /></Link>
                        </div>
                        <h2>Добро пожаловать!</h2>
                        <Form
                            layout="vertical"
                            onFinish={(values) => accountStore.handleSubmit(values, 'registration')}
                        >
                            <Form.Item 
                            label='Имя'
                            name="name"
                            rules={[
                                {
                                  required: true,
                                  message: 'Пожалуйста, введите своё имя!',
                                },
                              ]}
                            >
                                <Input placeholder="Введите имя" />
                            </Form.Item>
                            <Form.Item
                                label='E-mail'
                                validateStatus={authStore.result ?
                                    (authStore.result.result === "error" ? "error" : "success")
                                    : undefined
                                }
                                name="email"
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
                                <Input placeholder="Введите E-mail" />
                            </Form.Item>
                            <Form.Item 
                            label='Пароль'
                            name="password"
                            rules={[
                                {
                                  required: true,
                                  message: 'Пожалуйста, введите свой пароль!',
                                },
                              ]}
                            >
                                <Input placeholder="Введите пароль" type='password'/>
                            </Form.Item>
                            <button type="submit">Зарегистрироваться</button>
                            <p>Уже зарегистрированы?<Link to="/login">Войти</Link></p>
                        </Form>
                    </div>
                </div>
            </ContainerRegisterForm>
        </StyledRegisterForm>
    )
}

export default RegisterForm