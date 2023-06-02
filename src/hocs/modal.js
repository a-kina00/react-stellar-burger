import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ESC_KEYCODE } from '../utils/const';
import ModalStyles from './modal.module.css'
import icon from '../images/icon 24x24.svg'
import ModalOverlay from '../components/modalOverlay/modalOverlay';

const ModalComponent = (props) => {

    React.useEffect(() => {
        const close = (e) => {
            if (e.keyCode === ESC_KEYCODE) {
                props.handleModal({ isVisible: false })
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    return createPortal(

        <div style={{ visibility: props.isActive.isVisible ? 'visible' : 'hidden' }}>
            <ModalOverlay handleModal={props.handleModal} />
            <section className={ModalStyles.section + ' ' + 'pt-10 pb-15'}>
                <div className={ModalStyles.title}>
                    <h1 className="text text_type_main-large">{props.heading}</h1>
                    <img className={ModalStyles.icon} src={icon}
                        onClick={() => (props.handleModal({ isVisible: false }))}>
                    </img>
                </div>
                {props.children(props.props)}
            </section>
        </div>, document.querySelector('#root')
    )
};

ModalComponent.propTypes = {
    props: PropTypes.object.isRequired,
    isActive: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired,
    heading: PropTypes.string
}

export default ModalComponent;