import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { updateConstructorData } from '../../services/actions/constructor';
import { useDrag } from "react-dnd";
import { shallowEqual } from 'react-redux';

import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorBlockStyles from './constructorBlock.module.css';

function ConstructorBlock(props) {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => ({data: state.data.ingredientsSuccess}), shallowEqual);
    const {cart} = useSelector((state) => ({cart: state.builder.currCart}), shallowEqual);

    const ingredient = findIngredient();
    ingredient.number = props.number;

    React.useEffect(() => {
        props.updateData()
    });

    function findIngredient() {
        const index = data.findIndex(el => el._id === props.id);
        return data[index];
    }

    function deleteIngredient() {
        let newCart = cart.filter(el => el.number != ingredient.number)
        props.setDraggedElements(newCart)
        dispatch(updateConstructorData({ data: newCart }))
    }

    let position = constructorBlockStyles.middle;
    let caption = '';

    if (props.position === 'top') {
        position = constructorBlockStyles.top;
        caption = ' (Верх)';
    }
    if (props.position === 'bottom') {
        position = constructorBlockStyles.bottom;
        caption = ' (Низ)'
    }

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: { ingredient }
    });

    function dragStartHandler() {
        if(ingredient.type != 'bun') props.setCurrentIngr(ingredient)
    }

    function dropHandler() {
        if(ingredient.type != 'bun') props.setPrevIngr(ingredient)
    }

    return (
        <li className={constructorBlockStyles.flex + ' ' + constructorBlockStyles.icon_grab} draggable={true}
            ref={dragRef}
            onDragStart={dragStartHandler}
            onDrop={dropHandler}>
            {!(props.position) ? <div><DragIcon type="primary" /></div> : ''}
            <div className={position + ' ' + 'pr-8'}>
                <img className={constructorBlockStyles.image + ' ' + 'ml-6'} src={ingredient.image} alt={ingredient.name + caption} draggable={false}></img>
                <p className={constructorBlockStyles.name + ' ' + "text text_type_main-default"} >{ingredient.name + caption}</p>
                <div className={constructorBlockStyles.flex}>
                    <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                {!(props.position) ? <DeleteIcon onClick={deleteIngredient} type="primary" /> : <LockIcon type="secondary" />}
            </div>
        </li>
    )
}

ConstructorBlock.propTypes = {
    id: PropTypes.string.isRequired,
    position: PropTypes.string,
    updateData: PropTypes.func,
}

export default ConstructorBlock;