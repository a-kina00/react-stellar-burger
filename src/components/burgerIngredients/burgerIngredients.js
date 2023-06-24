import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './burgerIngredients.module.css';

import { requirements } from '../../utils/const';
import Ingredient from '../ingredient/ingredient';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { Context } from "../../utils/context";

function BurgerIngredients(props) {

    const addToCart = React.useContext(Context).addToCart;
    const cart = React.useContext(Context).cart;
    const [current, setCurrent] = React.useState('1');

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    function renderIngridient(type, list) {
        const el = list.filter((element) => { return element.type === type });

        const arr = el.map((item) => {
            return <Ingredient key={item._id} id={item._id} count={0} props={el} createList={createList} />
        })
        return arr;
    }
    
    function createList(id, type, price) {
        let curr = {};
        curr.id = id;
        curr.type = type;
        curr.price = price;

        const currentList = cart.concat([curr]);
        addToCart(currentList)
    }

    return (
        <section className={burgerIngredientsStyles.section}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <div className={burgerIngredientsStyles.tab}>
                <Tab value="1" active={current === '1'} onClick={setTab}>
                    Булки
                </Tab>
                <Tab value="2" active={current === '2'} onClick={setTab}>
                    Соусы
                </Tab>
                <Tab value="3" active={current === '3'} onClick={setTab}>
                    Начинки
                </Tab>
            </div>

            <ul className={burgerIngredientsStyles.list + ' ' + 'custom-scroll'}>
                <li><h2 id='1' className="text text_type_main-medium">Булки</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        {renderIngridient('bun', props.ingredients)}
                    </div>
                </li>
                <li>
                    <h2 id='2' className="text text_type_main-medium">Соусы</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        {renderIngridient('sauce', props.ingredients)}
                    </div>
                </li>
                <li>
                    <h2 id='3' className="text text_type_main-medium">Начинки</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        {renderIngridient('main', props.ingredients)}
                    </div>
                </li>
            </ul>
        </section>
    );
}

Ingredient.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({ requirements })).isRequired
}

export default BurgerIngredients;