import React from 'react';
import headerStyles from './appHeader.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
            <header className={headerStyles.header}>
                <div className={headerStyles.content}>
                    <div className={headerStyles.block}>
                        <div className={headerStyles.block + ' ' + 'pl-5 pr-5 pb-5 pt-5'}>
                            <BurgerIcon type="primary" />
                            <p className={"text text_type_main-default m-2"}>Конструктор</p>
                        </div>
                        <div className={headerStyles.block + ' ' + 'pl-5 pr-5 pb-5 pt-5'}>
                            <ListIcon type="secondary" />
                            <p className={headerStyles.hover + ' ' + "text text_type_main-default text_color_inactive m-2"}>Лента заказов</p>
                        </div>
                    </div>
                    <Logo />
                    <div className={headerStyles.login + ' ' + 'pl-5 pr-5 pb-5 pt-5 m-2'}>
                        <ProfileIcon type="secondary" />
                        <p className={headerStyles.hover + ' ' + "text text_type_main-default text_color_inactive m-2"}>Личный кабинет</p>
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;