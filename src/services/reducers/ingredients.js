import { combineReducers } from 'redux';

import { UPD_DATA, CLOSE_MODAL, POST_DATA, DEL_DATA, OPEN_MODAL } from '../actions/actions.js'

const initialState = {
  data: [],
  currCart: [],
  currIngredient: [],
  modalIsVisible: false,
  modalType: [],
  order: null,
  errorMsg: null
};

const dataList = (state = initialState, action) => {
  switch (action.type) {

    case UPD_DATA:
      return { ...state, [action.title]: action.data };

    case POST_DATA:
      return { ...state, order: action.order };

    case DEL_DATA:
      return { ...state, [action.title]: [] };

    case OPEN_MODAL:
      return { ...state, modalIsVisible: true, modalType: action.title }

    case CLOSE_MODAL:
      return { ...state, modalIsVisible: false, modalType: [], currIngredient: [], order: null }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  data: dataList,
})

const updateData = (payload) => ({ type: UPD_DATA, data: payload.data, title: payload.title })
const postData = (payload) => ({ type: POST_DATA, order: payload })
const delData = (payload) => ({ type: DEL_DATA, title: payload.title })
const openModal = (payload) => ({ type: OPEN_MODAL, title: payload.title })
const closeModal = () => ({ type: CLOSE_MODAL })

export { rootReducer, dataList, updateData, postData, delData, openModal, closeModal }
