import React from 'react';
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from '../../services/actions/modal';
import PropTypes from 'prop-types';
import ingredientStyles from './ingredient.module.css';
import ModalComponent from '../../hocs/modal';
import { shallowEqual } from 'react-redux';
import { setCurrentIngredient } from '../../services/actions/ingredients';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props) {
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => ({ cart: state.builder.currCart }), shallowEqual);
    const ingredient = findIngredient();
    const [current, setCurrent] = React.useState(0);
    let count = 0;
    const id = {
        id: props.id,
        type: props.type,
        price: ingredient.price,
        name: ingredient.name
    }

    React.useEffect(() => {
        cart.forEach(element => {
            if (element.id == ingredient._id) {
                count++
                setCurrent(count)
            }
        })

        if (!cart.some(element => element.id == ingredient._id)) setCurrent(0)

    }, [cart])

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: { id }
    });

    function findIngredient() {
        const index = props.props.findIndex(el => el._id === props.id);
        return props.props[index];
    }

    function click() {
        dispatch(setCurrentIngredient({ ingredient: ingredient }))
        dispatch(openModal({ title: 'ingredient' }))
    }

    return (
        <>
            <ModalComponent isActive={useSelector(state => state.data.modalIsVisible)}></ModalComponent>
            <div ref={dragRef} className={ingredientStyles.ingredient + ' ' + 'm-4'} onClick={() => { click() }} draggable={true}>
                <div>
                    {(current > 0) ? <Counter count={current} size="default" extraClass="m-1" /> : <></>}
                </div>
                <img className={ingredientStyles.image + ' ' + 'm-4'} src={ingredient.image} alt={ingredient.name} draggable={false}></img>
                <div className={ingredientStyles.price}>
                    <p className='text text_type_digits-default m-1'>{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={ingredientStyles.title + ' ' + "text text_type_main-small"}>{ingredient.name}</p>
            </div>
        </>
    );
}

Ingredient.propTypes = {
    count: PropTypes.number,
    id: PropTypes.string.isRequired,
}


export default Ingredient;