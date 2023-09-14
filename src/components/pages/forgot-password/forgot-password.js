import React from "react"

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import forgotStyles from './forgot-password.module.css'

function ForgotPassword() {

    const [email, setEmail] = React.useState('')
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    return (
        <div className={forgotStyles.box}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>

            <EmailInput
                onChange={onChangeEmail}
                value={email}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
                placeholder="Укажите e-mail"
            />

            <Link to='/reset-password'>
                <Button htmlType="button" type="primary" size="medium" extraClass="mb-15">
                    Восстановить
                </Button>
            </Link>

            <div className={forgotStyles.flex}>
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

export default ForgotPassword;