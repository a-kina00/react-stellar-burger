import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal.js"

const initialState = {
  modalIsVisible: false,
  modalType: []
};

const modalList = (state = initialState, action) => {
  switch (action.type) {

    case OPEN_MODAL:
      return { ...state, modalIsVisible: true, modalType: action.title }

    case CLOSE_MODAL:
      return { ...state, modalIsVisible: false, modalType: [], currIngredient: [], orderSuccess: null }

    default:
      return state
  }
}
export default modalList;