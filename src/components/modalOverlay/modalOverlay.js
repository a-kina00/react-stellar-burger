import ModalOverlayStyles from './modalOverlay.module.css'
import { useDispatch } from "react-redux";
import { closeModal } from '../../services/reducers/ingredients';

function ModalOverlay() {
    const dispatch = useDispatch();
    return (
        <div className={ModalOverlayStyles.background}
            onClick={() => {
                dispatch(closeModal())
            }}></div>
    )
}


export default ModalOverlay;