import React from 'react';
import { data } from "../../utils/data";

import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorBlockStyles from './constructorBlock.module.css';

function ConstructorBlock(props) {

    const ingredient = findIngredient();
    //const [price, setPrice] = React.useState(0);
    let position = constructorBlockStyles.middle;
    let caption;
    props.updateData(ingredient.price);

    function findIngredient() {
        const index = data.findIndex(el => el._id === props.id);
        return data[index];
    }
/*
    function updatePrice() {
        setPrice(ingredient.price)
    }

    if (price >= 0) {
        console.log(price)
        props.updateData(price);
    }*/

    if (props.position === 'top') {
        position = constructorBlockStyles.top;
        caption = ' (верх)';
    }
    if (props.position === 'bottom') {
        position = constructorBlockStyles.bottom;
        caption = ' (низ)'
    }

    return (
        <li className={constructorBlockStyles.flex}>
            {!(props.position) ? <div className={constructorBlockStyles.icon_grab}><DragIcon type="primary" /></div> : ''}
            <div className={position + ' ' + 'pr-8'}>
                <img className={constructorBlockStyles.image + ' ' + 'ml-6'} src={ingredient.image} alt={ingredient.name + caption}></img>
                <p className={constructorBlockStyles.name + ' ' + "text text_type_main-default"}>{ingredient.name + caption}</p>
                <div className={constructorBlockStyles.flex}>
                    <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />

                </div>
                {!(props.position) ? <DeleteIcon type="primary" /> : <LockIcon type="secondary" />}
            </div>
        </li>
    )
}


export default ConstructorBlock;