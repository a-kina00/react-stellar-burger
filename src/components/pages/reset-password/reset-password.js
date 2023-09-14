import React from "react"

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import resetStyles from './reset-password.module.css'

function ResetPassword() {

    const [name, setName] = React.useState('')
    const onChangeName = e => {
        setName(e.target.value)
    }

    const [password, setPassword] = React.useState('')
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div className={resetStyles.box}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>

            <PasswordInput
                onChange={onChangePassword}
                value={password}
                name={'password'}
                extraClass="mb-6"
                placeholder="Введите новый пароль"
            />

            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={onChangeName}
                icon={''}
                value={name}
                name={'name'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
            />


            <Link to='/'>
                <Button htmlType="button" type="primary" size="medium" extraClass="mb-15">
                    Сохранить
                </Button>
            </Link>

            <div className={resetStyles.flex}>
                <p className="text text_type_main-default text_color_inactive pl-2 pt-2">Вспомнили пароль?</p>
                <Link to='/login'>
                    <Button htmlType="button" type="secondary" size="medium" extraClass="pl-2 pr-2 pb-2">
                        Войти
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ResetPassword;