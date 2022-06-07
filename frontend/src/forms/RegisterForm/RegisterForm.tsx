import { ContainerRegisterForm, StyledRegisterForm } from "./RegisterFormStyle"
import logo from '../../assets/img/main/logo__COLOR_main-1.svg';
import {useContext, useState} from 'react'
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../../services/http/auth/auth";
import { Context } from '../../';

const RegisterForm = () => {

     //@ts-ignore
     const { authStore } = useContext(Context);
     const [result, setResult] = useState<any>(null);
     const navigate = useNavigate ();

    const onFinish = (values: any) => {
        registration(values)
        .then((response) => {
            const data = response?.data
            if(data) {
                localStorage.setItem('auth-token', data.token)
                authStore.setToken(data.token)
                authStore.setUser(data.user)
                setResult(null)
                navigate('/')
                message.success('Вы успешно зарегистрировались')
            }
        })
        .catch(e => {
            if(e.response.status === 400) {
                setResult({result:'error'})
                message.error(e.response.data.message)
            }
        })
    };

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
                            onFinish={onFinish}
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
                                validateStatus={result ? (result.result === "error" ? "error" : "success") : undefined}
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