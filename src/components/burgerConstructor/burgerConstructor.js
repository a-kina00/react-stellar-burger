import React from 'react';

import { orderBurger } from '../../utils/burger-api';
import burgerConstructorStyles from './burgerConstructor.module.css'
import ModalComponent from '../../hocs/modal';
import OrderDetails from '../orderDetails/orderDetails';
import { Context } from "../../utils/context";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import ConstructorBlock from '../constructorBlock/constructorBlock'

function BurgerConstructor() {
    const cart = React.useContext(Context).cart;

    const filling = cart.filter((item) => item.type !== 'bun')
    const buns = cart.filter((item) => item.type === 'bun')
    if (buns.length > 1) { buns.splice(0, buns.length - 1) }
    const currCart = filling.concat(buns);
    const orderList = createAnOrder();

    const [account, setCurrent] = React.useState(0);
    const [modalActive, handleModal] = React.useState({ isVisible: false });
    const [status, setStatus] = React.useState(null);
    const [order, setOrder] = React.useState(null);

    let count = 0;

    function updateData(value) {
        setCurrent(count += value);
    }

    function createAnOrder() {
        let orderList = []
        currCart.forEach(element => {
            if (element.type === 'bun') {
                orderList = orderList.concat(element.id)
            }
            orderList = orderList.concat(element.id)
        });
        return orderList;
    }

    function renderCart() {

        function renderCart(cart, position = '') {
            const arr = cart.map((item, index) => {
                return <ConstructorBlock key={index} id={item.id} position={position} updateData={updateData} />
            })
            return arr;
        }

        return <>
            {renderCart(buns, 'top')}
            <ul className={burgerConstructorStyles.list + ' ' + 'custom-scroll pr-2 mt-4 mb-4'}>
                {renderCart(filling)}
            </ul>
            {renderCart(buns, 'bottom')}
        </>
    }
    return (
        <section className={burgerConstructorStyles.section + ' ' + 'ml-15 mt-25'}>
            <ModalComponent props={{ number: order, status: status }} isActive={modalActive} handleModal={handleModal}>{OrderDetails}</ModalComponent>

            {renderCart()}

            <div>
                <div className={burgerConstructorStyles.account + ' ' + 'mt-10'}>
                    <div className={burgerConstructorStyles.account_scaled + ' ' + 'mr-15'}>
                        <p className="text text_type_digits-default mr-2">{account}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="large"
                        onClick={() => { handleModal({ isVisible: true }); orderBurger(orderList, setOrder, setStatus, 'orders') }}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BurgerConstructor;