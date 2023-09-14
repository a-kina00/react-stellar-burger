import React from "react"

import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import loginStyles from './login.module.css'

function Login() {

    const [email, setEmail] = React.useState('')
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = React.useState('')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div className={loginStyles.box}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>

            <EmailInput
                onChange={onChangeEmail}
                value={email}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChangePassword}
                value={password}
                name={'password'}
                extraClass="mb-6"
            />
            <Link to='/'>
                <Button htmlType="button" type="primary" size="medium" extraClass="mb-15">
                    Войти
                </Button>
            </Link>

            <div className={loginStyles.flex}>
                <p className="text text_type_main-default text_color_inactive pl-2 pt-2">Вы — новый пользователь?</p>
                <Link to='/register'>
                    <Button htmlType="button" type="secondary" size="medium" extraClass="pl-2 pr-2 pb-2">
                        Зарегистрироваться
                    </Button>
                </Link>
            </div>
            <div className={loginStyles.flex}>
                <p className="text text_type_main-default text_color_inactive pl-2 pb-2">Забыли пароль?</p>
                <Link to='/forgot-password'>
                    <Button htmlType="button" type="secondary" size="medium" extraClass="pl-2 pr-2 pt-2">
                        Восстановить пароль
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Login;