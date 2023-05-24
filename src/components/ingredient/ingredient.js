import React from 'react';
import { data } from "../../utils/data";
import ingredientStyles from './ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

class Ingredient extends React.Component {
    constructor(props) {
        super(props);
        this.ingredient = this.findIngredient();
        this.state = {
            count: 0
        };
        this.state.count = this.props.count;
    }
    findIngredient() {
        let index = data.findIndex(el => el._id === this.props.id);
        return data[index];
    }

    render() {
        return (
            <div className={ingredientStyles.ingredient + ' ' + 'm-4'} onClick={() => this.setState({ count: this.state.count + 1 })}>
                <div>
                    {(this.state.count > 0) ? <Counter count={this.state.count} size="default" extraClass="m-1"/> : ''}
                </div>
                <img className={ingredientStyles.image + ' ' + 'm-4'} src={this.ingredient.image} alt={this.ingredient.name}></img>
                <div className={ingredientStyles.price}>
                    <p className='text text_type_digits-default m-1'>{this.ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={ingredientStyles.title + ' ' + "text text_type_main-small"}>{this.ingredient.name}</p>
            </div>

        );
    }
}

export default Ingredient;