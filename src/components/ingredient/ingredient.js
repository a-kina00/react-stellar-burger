import React from 'react';
import { data } from "../../utils/data";
import ingredientStyles from './ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props) {

    const ingredient = findIngredient();
    const [current, setCurrent] = React.useState(0);
    let count = props.count;

    function findIngredient() {
        const index = data.findIndex(el => el._id === props.id);
        return data[index];
    }

    function countAmount() {
        count = current + 1;
        setCurrent(count);
    }

    return (
        <div className={ingredientStyles.ingredient + ' ' + 'm-4'} onClick={countAmount}>
            <div>
                {(current > 0) ? <Counter count={current} size="default" extraClass="m-1" /> : ''}
            </div>
            <img className={ingredientStyles.image + ' ' + 'm-4'} src={ingredient.image} alt={ingredient.name}></img>
            <div className={ingredientStyles.price}>
                <p className='text text_type_digits-default m-1'>{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={ingredientStyles.title + ' ' + "text text_type_main-small"}>{ingredient.name}</p>
        </div>

    );
}


export default Ingredient;