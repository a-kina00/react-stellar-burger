import React from 'react';
import headerStyles from './appHeader.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { Link } from 'react-router-dom'

function AppHeader() {

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.content}>
                <div className={headerStyles.block}>
                    <Link id='current' to='/' className={headerStyles.currentBlock + ' ' + 'pl-5 pr-5 pb-5 pt-5'}>
                        <BurgerIcon type="primary" />
                        <p className={"text text_type_main-default m-2"}>Конструктор</p>
                    </Link>
                    <Link to='/feed' className={headerStyles.block + ' ' + 'pl-5 pr-5 pb-5 pt-5'}>
                        <ListIcon type="secondary" />
                        <p className={headerStyles.hover + ' ' + "text text_type_main-default text_color_inactive m-2"}>Лента заказов</p>
                    </Link>
                </div>
                <Link to="/"><Logo /></Link>
                <Link to='profile' className={headerStyles.login + ' ' + 'pl-5 pr-5 pb-5 pt-5 m-2'}>
                    <ProfileIcon type="secondary" />
                    <p className={headerStyles.hover + ' ' + "text text_type_main-default text_color_inactive m-2"}>Личный кабинет</p>
                </Link>
            </div>
        </header>
    );
}

export default AppHeader;