import React from 'react';
import { data } from "../../utils/data";

import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorBlockStyles from './constructorBlock.module.css';

class ConstructorBlock extends React.Component {
    constructor(props) {
        super(props);
        this.ingredient = this.findIngredient();
        this.state = {
            account: 0
        };
        this.state.account = this.ingredient.price;
        this.props.updateData(this.state.account);
    }

    findIngredient() {
        let index = data.findIndex(el => el._id === this.props.id);
        return data[index];
    }

    render() {
        let position=constructorBlockStyles.middle;
        let caption;

        if (this.props.position === 'top') {
            position=constructorBlockStyles.top;
            caption = ' (верх)';
        }
        if (this.props.position === 'bottom') {
            position=constructorBlockStyles.bottom;
            caption = ' (низ)'
        }

        return (
            <li className={constructorBlockStyles.flex}>
                {!(this.props.position) ? <div className={constructorBlockStyles.icon_grab}><DragIcon type="primary" /></div> : ''}
                <div className={position + ' ' + 'pr-8'}>
                    <img className={constructorBlockStyles.image + ' ' + 'ml-6'} src={this.ingredient.image} alt={this.ingredient.name + caption}></img>
                    <p className={constructorBlockStyles.name + ' ' + "text text_type_main-default"}>{this.ingredient.name + caption}</p>
                    <div className={constructorBlockStyles.flex}>
                        <p className="text text_type_digits-default mr-2">{this.ingredient.price}</p>
                        <CurrencyIcon type="primary" />

                    </div>
                    {!(this.props.position) ? <DeleteIcon type="primary" /> : <LockIcon type="secondary" />}
                </div>
            </li>
        )
    }
}

export default ConstructorBlock;