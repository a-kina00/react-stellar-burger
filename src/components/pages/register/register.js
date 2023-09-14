import React from "react"

import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import registerStyles from './register.module.css'

function Register() {

    const [name, setName] = React.useState('')
    const onChangeName = e => {
        setName(e.target.value)
    }

    const [email, setEmail] = React.useState('')
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = React.useState('')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div className={registerStyles.box}>
            <h1 className="text text_type_main-medium mb-6">Регистрация</h1>

            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={onChangeName}
                icon={''}
                value={name}
                name={'name'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
            />

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
                    Зарегистрироваться
                </Button>
            </Link>

            <div className={registerStyles.flex}>
                <p className="text text_type_main-default text_color_inactive pl-2 pt-2">Уже зарегистрированы?</p>
                <Link to='/login'>
                    <Button htmlType="button" type="secondary" size="medium" extraClass="pl-2 pr-2 pb-2">
                        Войти
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Register;