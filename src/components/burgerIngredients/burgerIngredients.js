import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import burgerIngredientsStyles from './burgerIngredients.module.css';
import Ingredient from '../ingredient/ingredient';
import { getInfo } from '../../utils/burger-api';
import { v1 as uuid } from 'uuid';
import { shallowEqual } from 'react-redux';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredients() {
    const dispatch = useDispatch();
    const [current, setCurrent] = React.useState('1');
    const { data } = useSelector((state) => ({ data: state.data.ingredientsSuccess }), shallowEqual);
    const { err } = useSelector((state) => ({ err: state.data.ingredientsFailure }), shallowEqual);

    React.useEffect(() => {
        getInfo()(dispatch)
    }, []);

    const { bun, sauce, main } = React.useMemo(() => {
        return {
            bun: data ? data.filter(item => item.type == 'bun') : [],
            sauce: data ? data.filter(item => item.type == 'sauce') : [],
            main: data ? data.filter(item => item.type == 'main') : []
        };
    }, [data]);

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
            {err ? <h2>{err}</h2> :
                <ul className={burgerIngredientsStyles.list + ' ' + 'custom-scroll'}>
                    <li><h2 id='1' className="text text_type_main-medium">Булки</h2>
                        <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                            {bun.map((item) => {
                                item.key = uuid();
                                return <Ingredient key={item.key} id={item._id} type='bun' props={bun} draggable={true} />
                            })}
                        </div>
                    </li>
                    <li>
                        <h2 id='2' className="text text_type_main-medium">Соусы</h2>
                        <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                            {sauce.map((item) => {
                                item.key = uuid();
                                return <Ingredient key={item.key} id={item._id} type='sauce' props={sauce} draggable={true} />
                            })}
                        </div>
                    </li>
                    <li>
                        <h2 id='3' className="text text_type_main-medium">Начинки</h2>
                        <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                            {main.map((item) => {
                                item.key = uuid();
                                return <Ingredient key={item.key} id={item._id} type='main' props={main} draggable={true} />
                            })}
                        </div>
                    </li>
                </ul>}
        </section>
    );
}

export default BurgerIngredients;