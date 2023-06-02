import React from 'react';
import { data } from "../../utils/data";
import burgerConstructorStyles from './burgerConstructor.module.css'
import Modal from "../../hocs/modal";
import OrderDetails from '../orderDetails/orderDetails';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import ConstructorBlock from '../constructorBlock/constructorBlock'

function BurgerConstructor() {
    //const OrderDetailsModal = Modal(OrderDetails);
    const [modalActive, handleModal] = React.useState({isVisible: false});

    let count = 0;
    const [account, setCurrent] = React.useState(0);

    function updateData(value) {
        count += value;
        setCurrent(count / 2)
    }

    return (
        <section className={burgerConstructorStyles.section + ' ' + 'ml-15 mt-25'}>
            {/*<OrderDetailsModal props={{number : '036872'}} isActive={modalActive} handleModal={handleModal}/>*/}
            <ConstructorBlock id={data[0]._id} position='top' updateData={updateData} />
            <ul className={burgerConstructorStyles.list + ' ' + 'custom-scroll pr-2 mt-4 mb-4'}>
                <ConstructorBlock id={data[2]._id} updateData={updateData} />
                <ConstructorBlock id={data[3]._id} updateData={updateData} />
                <ConstructorBlock id={data[6]._id} updateData={updateData} />
                <ConstructorBlock id={data[8]._id} updateData={updateData} />
                <ConstructorBlock id={data[4]._id} updateData={updateData} />
                <ConstructorBlock id={data[7]._id} updateData={updateData} />
                <ConstructorBlock id={data[8]._id} updateData={updateData} />

            </ul>
            <ConstructorBlock id={data[0]._id} position='bottom' updateData={updateData} />
            <div>
                <div className={burgerConstructorStyles.account + ' ' + 'mt-10'}>
                    <div className={burgerConstructorStyles.account_scaled + ' ' + 'mr-15'}>
                        <p className="text text_type_digits-default mr-2">{account}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="large"
                    onClick={() => {handleModal({isVisible : true})}}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </section>
    )
}


export default BurgerConstructor;