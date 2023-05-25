import React from 'react';
import { data } from "../../utils/data";
import burgerIngredientsStyles from './burgerIngredients.module.css';

import Ingredient from '../ingredient/ingredient';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredients(props) {
    
    const [current, setCurrent] = React.useState('1');

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      };
    

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
                        <Ingredient id={data[0]._id} count={0} />
                        <Ingredient id={data[14]._id} count={0} />
                    </div>
                </li>
                <li>
                    <h2 id='2' className="text text_type_main-medium">Соусы</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        <Ingredient id={data[3]._id} count={0} />
                        <Ingredient id={data[6]._id} count={0} />
                        <Ingredient id={data[5]._id} count={0} />
                        <Ingredient id={data[9]._id} count={0} />
                    </div>
                </li>
                <li>
                    <h2 id='3' className="text text_type_main-medium">Начинки</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        <Ingredient id={data[1]._id} count={0} />
                        <Ingredient id={data[2]._id} count={0} />
                        <Ingredient id={data[4]._id} count={0} />
                        <Ingredient id={data[7]._id} count={0} />
                        <Ingredient id={data[8]._id} count={0} />
                        <Ingredient id={data[10]._id} count={0} />
                        <Ingredient id={data[11]._id} count={0} />
                        <Ingredient id={data[12]._id} count={0} />
                        <Ingredient id={data[13]._id} count={0} />
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default BurgerIngredients;