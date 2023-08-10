import React from 'react';
import { createPortal } from 'react-dom';

import { ESC_KEYCODE } from '../utils/const';
import { closeModal } from '../services/reducers/ingredients';
import ModalStyles from './modal.module.css'
import icon from '../images/icon 24x24.svg'
import ModalOverlay from '../components/modalOverlay/modalOverlay';
import { useDispatch, useSelector } from "react-redux";
import IngredientDetails from '../components/ingredientDetails/ingredientDetails';
import OrderDetails from '../components/orderDetails/orderDetails';

const ModalComponent = () => {
    const dispatch = useDispatch();
    const ingrInfo = useSelector(state => state.data.currIngredient)
    const isVisible = useSelector(state => state.data.modalIsVisible)
    const orderInfo = useSelector(state => state.data.order)
    const modalType = useSelector(state => state.data.modalType)
    const err = useSelector(state => state.data.errorMsg);

    React.useEffect(() => {
        const close = (e) => {
            if (e.keyCode === ESC_KEYCODE) {
                dispatch(closeModal())
            }
            dispatch(closeModal())
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    function renderSwitch() {
        switch (modalType) {
            case 'ingredient':
                return <>{IngredientDetails(ingrInfo)}</>;
            case 'order':
                return <>{OrderDetails(orderInfo)}</>;
            default:
                return '';
        }
    }

    return createPortal(
        <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <ModalOverlay />
            <section className={ModalStyles.section + ' ' + 'pt-10 pb-15'}>
                <div className={ModalStyles.title}>
                    <h1 className="text text_type_main-large">{ingrInfo._id ? 'Детали ингридиента' : ''}</h1>
                    <img className={ModalStyles.icon} src={icon}
                        onClick={() => (dispatch(closeModal()))}>
                    </img>
                </div>
                {err ? <h2>{err}</h2> : renderSwitch()}
            </section>
        </div>, document.querySelector('#root')
    )
};

export default ModalComponent;