import React from 'react';
import PropTypes from 'prop-types';

import ModalOverlayStyles from './modalOverlay.module.css'

function ModalOverlay(props) {
    return (
        <div className={ModalOverlayStyles.background}
        onClick={() => {props.handleModal({ isVisible: false })}}></div>
    )
}

ModalOverlay.propTypes = {
    handleModal: PropTypes.func.isRequired,
}

export default ModalOverlay;