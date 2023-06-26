import { combineReducers } from 'redux';

import { ADD_DATA, UPD_DATA, ABOUT_INGR, CLOSE_MODAL, GET_ORDER_NUMBER } from '../actions/ingredients.js'

const initialState = {
    data: [],
    currCart: [],
    currIngredient: [],
    order: []
};

const dataList = (state = initialState, action) => {
    switch (action.type) {

      case UPD_DATA:
        return {...state, [action.title]: action.data};

      default:
        return state
    }
  } 




const rootReducer = combineReducers({
    data: dataList,
}) 

export { rootReducer, dataList }