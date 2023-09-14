import React from "react";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'

import profileStyles from './profile.module.css'

function Profile() {

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
        <div className={profileStyles.box}>
            <nav className={profileStyles.navigation}>
                <Link className={profileStyles.link_active + " text text_type_main-medium pt-4 pb-4"}>Профиль</Link>
                <Link className={profileStyles.link + " text text_type_main-medium text_color_inactive pt-4 pb-4"}>История заказов</Link>
                <Link to='/login' className={profileStyles.link + " text text_type_main-medium text_color_inactive pt-4 pb-4"}>Выход</Link>
                <p className={profileStyles.text +" text text_type_main-default text_color_inactive mt-20"}>В этом разделе вы можете <br /> изменить свои персональные данные</p>
            </nav>

            <div>
                <EmailInput
                    onChange={onChangeName}
                    value={name}
                    name={'name'}
                    placeholder="Имя"
                    isIcon={true}
                    extraClass="mb-6"
                />
                <EmailInput
                    onChange={onChangeEmail}
                    value={email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={onChangePassword}
                    value={password}
                    name={'password'}
                    icon="EditIcon"
                    extraClass="mb-6"
                />
            </div>
        </div>
    );
}

export default Profile;