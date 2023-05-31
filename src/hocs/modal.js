import PropTypes from 'prop-types';

import ModalStyles from './modal.module.css'
import icon from '../images/icon 24x24.svg'
import ModalOverlay from '../components/modalOverlay/modalOverlay';

const Modal = ModalComponent => (props) => {

    return (
        <div style={{ visibility: props.isActive.isVisible ? 'visible' : 'hidden' }}>
            <ModalOverlay handleModal={props.handleModal}/>
            <section className={ModalStyles.section + ' ' + 'pt-10 pb-15'}>
                <div className={ModalStyles.title}>
                    <h1 className="text text_type_main-large">{props.heading}</h1>
                    <img className={ModalStyles.icon} src={icon}
                        onClick={() => (props.handleModal({ isVisible: false }))}>
                    </img>
                </div>
                <ModalComponent {...props.props} />
            </section>
        </div>
    )
};

Modal.propTypes = {
    props: PropTypes.object.isRequired,
    isActive: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired,
    heading: PropTypes.string
}

export default Modal;