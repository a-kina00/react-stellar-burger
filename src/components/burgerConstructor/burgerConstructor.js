import React from 'react';

import { orderBurger } from '../../utils/burger-api';
import burgerConstructorStyles from './burgerConstructor.module.css'
import ModalComponent from '../../hocs/modal';
import OrderDetails from '../orderDetails/orderDetails';
import { Context } from "../../services/context";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import ConstructorBlock from '../constructorBlock/constructorBlock'

function BurgerConstructor() {

    const cart = React.useContext(Context).cart;

    const { bun, filling } = React.useMemo(() => {
        return {
            bun: cart.find(item => item.type === 'bun'),
            filling: cart.filter(item => item.type !== 'bun'),
            price: cart.map(item => item.price)
        };
    }, [cart]);

    const currCart = bun ? filling.concat(bun) : filling;

    const { price } = React.useMemo(() => {
        return {
            price: currCart[0] ? currCart.map(item => item.price).reduce((prev, item) => prev + item) : [0]
        };
    }, [currCart]);

    const [account, setCurrent] = React.useState(0);
    const [modalActive, handleModal] = React.useState({ isVisible: false });
    const [status, setStatus] = React.useState(null);
    const [order, setOrder] = React.useState(null);

    function updateData() {
        setCurrent(price);
    }

    function createAnOrder() {
        const order = currCart.map(ingredient => ingredient.id)
        order.unshift(order[order.length - 1]);
        return order;
    }

    function clickBtn() {
        handleModal({ isVisible: true });
        orderBurger(createAnOrder(), setOrder, setStatus);
    }

    return (
        <section className={burgerConstructorStyles.section + ' ' + 'ml-15 mt-25'}>
            <ModalComponent props={{ number: order, status: status }} isActive={modalActive} handleModal={handleModal}>{OrderDetails}</ModalComponent>

            {cart[0] ? <>
                {bun ? <ConstructorBlock key={bun.id} id={bun.id} position='top' updateData={updateData} /> : ''}
                <ul className={burgerConstructorStyles.list + ' ' + 'custom-scroll pr-2 mt-4 mb-4'}>
                    {filling.map((element, index) => {
                        return <ConstructorBlock key={index} id={element.id} position='' updateData={updateData} />
                    })}
                </ul>
                {bun ? <ConstructorBlock key={bun.key} id={bun.id} position='bottom' updateData={updateData} /> : ''}
            </> : ''}

            <div>
                <div className={burgerConstructorStyles.account + ' ' + 'mt-10'}>
                    <div className={burgerConstructorStyles.account_scaled + ' ' + 'mr-15'}>
                        <p className="text text_type_digits-default mr-2">{account}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="large"
                        onClick={clickBtn}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BurgerConstructor;