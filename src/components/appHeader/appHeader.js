import React from 'react';
import headerStyles from './appHeader.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.content}>
                <div className={headerStyles.block}>
                    <a id='current' href='#' className={headerStyles.currentBlock + ' ' + 'pl-5 pr-5 pb-5 pt-5'}>
                        <BurgerIcon type="primary" />
                        <p className={"text text_type_main-default m-2"}>Конструктор</p>
                    </a>
                    <a href='#' className={headerStyles.block + ' ' + 'pl-5 pr-5 pb-5 pt-5'}>
                        <ListIcon type="secondary" />
                        <p className={headerStyles.hover + ' ' + "text text_type_main-default text_color_inactive m-2"}>Лента заказов</p>
                    </a>
                </div>
                <Logo />
                <a href='#' className={headerStyles.login + ' ' + 'pl-5 pr-5 pb-5 pt-5 m-2'}>
                    <ProfileIcon type="secondary" />
                    <p className={headerStyles.hover + ' ' + "text text_type_main-default text_color_inactive m-2"}>Личный кабинет</p>
                </a>
            </div>
        </header>
    );
}

export default AppHeader;