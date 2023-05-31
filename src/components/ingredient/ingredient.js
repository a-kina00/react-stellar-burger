import React from 'react';
import PropTypes from 'prop-types';

import ingredientStyles from './ingredient.module.css';
import Modal from "../../hocs/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props) {

    const IngredientDetailsModal = Modal(IngredientDetails);
    const [modalActive, handleModal] = React.useState({ isVisible: false });

    const ingredient = findIngredient();
    const [current, setCurrent] = React.useState(0);
    let count = props.count;

    function findIngredient() {
        const index = props.props.findIndex(el => el._id === props.id);
        return props.props[index];
    }

    function countAmount() {
        count = current + 1;
        setCurrent(count);
    }

    React.useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                handleModal({ isVisible: false })
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    return (<div>
        <IngredientDetailsModal props={ingredient} isActive={modalActive} handleModal={handleModal} heading={'Детали ингридиента'} />
        <div className={ingredientStyles.ingredient + ' ' + 'm-4'} onClick={() => { handleModal({ isVisible: true }) }}>
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
    </div>
    );
}

Ingredient.propTypes = {
    count: PropTypes.number,
    id: PropTypes.string.isRequired,
}


export default Ingredient;