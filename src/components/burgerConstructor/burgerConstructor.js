import React from 'react';
import { data } from "../../utils/data";
import burgerConstructorStyles from './burgerConstructor.module.css'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import ConstructorBlock from '../constructorBlock/constructorBlock'

class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: 0
        };
        this.count = 0;
    }

    updateData = (value) => {
        this.count += value;
        this.setState({account : this.count/2})
    }

    render() {
        return (
            <section className={burgerConstructorStyles.section + ' ' + 'ml-15'}>
                <ul className={burgerConstructorStyles.list + ' ' + 'custom-scroll mt-25 pr-2'}>
                    <ConstructorBlock id={data[0]._id} position='top' updateData={this.updateData}/>
                    <ConstructorBlock id={data[2]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[3]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[6]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[8]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[4]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[7]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[8]._id} updateData={this.updateData}/>
                    <ConstructorBlock id={data[0]._id} position='bottom' updateData={this.updateData}/>
                </ul>
                <div>
                    <div className={burgerConstructorStyles.account + ' ' + 'mt-10'}>
                        <div  className={burgerConstructorStyles.account_scaled + ' ' + 'mr-15'}>
                            <p className="text text_type_digits-default mr-2">{this.state.account}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <Button htmlType="button" type="primary" size="large">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </section>
        )
    }
}

export default BurgerConstructor;