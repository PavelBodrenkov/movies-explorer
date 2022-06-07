import { Button, Col, Form, Input, message, Row } from "antd"
import { useContext, useEffect } from "react"
import { AccountContainer, StyledAccountForm } from "./AccountFormStyle"
import { useNavigate } from "react-router-dom";
import { Context } from '../../';
import { observer } from "mobx-react-lite";
import { updateUser } from "../../services/http/users";

const AcountForm = observer(() => {
    //@ts-ignore
    const { authStore, accountStore } = useContext(Context);
    const navigate = useNavigate()
    const [form] = Form.useForm();
    
    const logout = () => {
        localStorage.removeItem('auth-token')
        authStore.setUser(null)
        authStore.setToken(null)
        navigate('/')
    }

    const handleSave = (values: any) => {
        updateUser(values)
        .then((response) => {
            accountStore.setEdit(false)
            accountStore.setResult(null)
            authStore.setUser(response.data)
            message.success('Данные сохранены')
        })
        .catch((e) => {
            if(e?.response?.status === 409) {
                accountStore.setResult({result:'error'})
                message.error('Пользователь с таким Email существует')
            } else {
                console.log('account' + ' ' + e);
                
            }
        })
    }

    useEffect(() => {
        form.setFieldsValue({
            name: authStore.user.name,
            email: authStore.user.email
        })
        accountStore.handleValue('name', authStore.user.name)
        accountStore.handleValue('email', authStore.user.email)
    }, [])

    return (
        <StyledAccountForm>
            <AccountContainer>
                <div className="form">
                    <h2>Привет, {authStore.user.name}!</h2>
                    <div className="content">
                        <Form
                            onFinish={handleSave}
                            form={form}
                        >
                            <Form.Item
                                label='Имя'
                                name="name"
                                className="item"
                                validateStatus={accountStore.result 
                                    ? 
                                    (accountStore.result.result === "error" ? "error" : "success") 
                                    : 
                                    undefined
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, введите имя!',
                                    },
                                ]}
                            >
                                <Input
                                    type='text'
                                    placeholder="Имя"
                                    className={!accountStore.edit ? 'edit' : ''}
                                    onChange={(e) => accountStore.handleValue('name', e.target.value)}
                                    value={accountStore.value.name}
                                />
                            </Form.Item>
                            <Form.Item
                                label='E-mail'
                                name="email"
                                className="item"
                                validateStatus={accountStore.result 
                                    ? 
                                    (accountStore.result.result === "error" ? "error" : "success") 
                                    : 
                                    undefined
                                }
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Введенный адрес электронной почты недействителен!',
                                    },
                                    {
                                        required: true,
                                        message: 'Пожалуйста, введите свой E-mail!',
                                    },
                                ]}
                            >
                                <Input
                                    type='email'
                                    placeholder="E-mail"
                                    className={!accountStore.edit ? 'edit' : ''}
                                    onChange={(e) => accountStore.handleValue('email', e.target.value)}
                                    value={accountStore.value.email}
                                />
                            </Form.Item>
                            <div className="buttons">
                                <div>
                                    {!accountStore.edit ?
                                        <p
                                            onClick={() => accountStore.handleEdit()}
                                            className='editButton'
                                        >
                                            Редактировать
                                        </p>
                                        :
                                        <div>
                                            <Button
                                                className="save"
                                                htmlType="submit"
                                            >
                                                Сохранить
                                            </Button>
                                            <Button
                                                className="save back"
                                                onClick={() => accountStore.handleCloseEdit(form)}
                                            >
                                                Отмена
                                            </Button>
                                        </div>
                                    }
                                </div>
                                <p
                                    onClick={logout}
                                    className='exit'
                                >
                                    Выйти из аккаунта
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </AccountContainer>
        </StyledAccountForm>
    )
})

export default AcountForm