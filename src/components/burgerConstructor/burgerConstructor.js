import React from 'react';
import { useDrop } from "react-dnd";

import { orderBurger } from '../../utils/burger-api';
import { updateData } from '../../services/reducers/ingredients';
import burgerConstructorStyles from './burgerConstructor.module.css'
import ModalComponent from '../../hocs/modal';
import { useDispatch } from "react-redux";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorBlock from '../constructorBlock/constructorBlock'

function BurgerConstructor() {
    const dispatch = useDispatch();

    const [draggedElements, setDraggedElements] = React.useState([]);
    const [currIngr, setCurrentIngr] = React.useState(null)
    const [prevIngr, setPrevIngr] = React.useState(null)
    const cart = draggedElements.reverse().slice(0);
    const [account, setCurrent] = React.useState(0);
    const [number, setNumber] = React.useState(0);

    React.useEffect(() => {
        dispatch(updateData({ data: currCart, title: 'currCart' }))
    });

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(item) { item.ingredient ? dropHandler() : handleDrop(item.id) }
    });

    const handleDrop = (item) => {
        item.number = number
        setNumber(number + 1)

        setDraggedElements([
            ...draggedElements, item
        ]);
    };

    function dropHandler() {
        let newCart = draggedElements.map(el => {
            if (el.number == prevIngr.number) {
                el.number = currIngr.number;
            } else
                if (el.number == currIngr.number) {
                    el.number = prevIngr.number;
                }
            return el
        })
        setDraggedElements(newCart)
    }

    function sortCart() {
        return filling.sort(function (a, b) {
            if (a.number > b.number) {
                return 1;
            }
            if (a.number < b.number) {
                return -1;
            }
        })
    }

    // Обрабатываем данные "брошенных" элементов
    const { bun, filling } = React.useMemo(() => {
        return {
            bun: cart.reverse().slice(0).find(item => item.type === 'bun'),
            filling: cart.filter(item => item.type !== 'bun'),
            price: cart.map(item => item.price)
        }
    }, [draggedElements]);

    const currCart = bun ? filling.concat(bun) : filling;

    const { price } = React.useMemo(() => {
        return {
            price: currCart[0] ? currCart.map(item => item.price).reduce((prev, item) => prev + item) : [0]
        };
    }, [currCart]);

    function setPrice() {
        setCurrent(price);
    }

    function createAnOrder() {
        const order = currCart.map(ingredient => ingredient.id)
        order.unshift(order[order.length - 1]);
        return order;
    }

    function clickBtn() {
        orderBurger(createAnOrder())(dispatch)
        setDraggedElements([])
        setCurrent(0)
    }

    return (
        <section ref={dropTarget} className={burgerConstructorStyles.section + ' ' + 'ml-15 mt-25'}>
            <ModalComponent></ModalComponent>

            {cart[0] ? <>
                {bun ? <ConstructorBlock key={bun.id} id={bun.id} position='top' updateData={setPrice} /> : ''}
                <ul className={burgerConstructorStyles.list + ' ' + 'custom-scroll pr-2 mt-4 mb-4'}>
                    {sortCart().map((element, index) => {
                        return <ConstructorBlock key={index} number={element.number} id={element.id} position='' updateData={setPrice} element={element} setDraggedElements={setDraggedElements}
                            setCurrentIngr={setCurrentIngr} setPrevIngr={setPrevIngr} />
                    })}
                </ul>
                {bun ? <ConstructorBlock key={bun.key} id={bun.id} position='bottom' updateData={setPrice} /> : ''}
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