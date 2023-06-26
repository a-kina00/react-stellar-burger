import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import burgerIngredientsStyles from './burgerIngredients.module.css';

import { UPD_DATA } from '../../services/actions/ingredients';
import Ingredient from '../ingredient/ingredient';
import { getInfo } from '../../utils/burger-api';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredients() {

    const [current, setCurrent] = React.useState('1');
    const [status, setStatus] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [currCart, addToCart] = React.useState([]);

    React.useEffect(() => {
        getInfo(setData, setStatus);
    }, []);
    
    React.useEffect(() => {
        dispatch({ type: UPD_DATA, data: data, title: 'data' })
        dispatch({ type: UPD_DATA, data: currCart, title: 'currCart' })
    });
    
    const dispatch = useDispatch();

    const { bun, sauce, main } = React.useMemo(() => {
        return {
            bun: data ? data.filter(item => item.type === 'bun') : [],
            sauce: data ? data.filter(item => item.type == 'sauce') : [],
            main: data ? data.filter(item => item.type == 'main') : []
        };
    }, [data]);

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    function createList(id, type, price) {
        let curr = {};
        curr.id = id;
        curr.type = type;
        curr.price = price;

        const currentList = currCart.concat([curr]);
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
                        {bun.map((item) => {
                            return <Ingredient key={item._id} id={item._id} count={0} props={bun} createList={createList} draggable/>
                        })}
                    </div>
                </li>
                <li>
                    <h2 id='2' className="text text_type_main-medium">Соусы</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        {sauce.map((item) => {
                            return <Ingredient key={item._id} id={item._id} count={0} props={sauce} createList={createList} draggable/>
                        })}
                    </div>
                </li>
                <li>
                    <h2 id='3' className="text text_type_main-medium">Начинки</h2>
                    <div className={burgerIngredientsStyles.options + ' ' + 'ml-4 mt-6 mb-10 mr-4'}>
                        {main.map((item) => {
                            return <Ingredient key={item._id} id={item._id} count={0} props={main} createList={createList} draggable/>
                        })}
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default BurgerIngredients;