import {UPD_CONSTRUCTOR_DATA, DEL_CONSTRUCTOR_DATA} from '../actions/constructor.js'

const initialState = {
  currCart: []
};

const constructorList = (state = initialState, action) => {
  switch (action.type) {

    case UPD_CONSTRUCTOR_DATA:
      return { ...state, currCart: action.currCart };

    case DEL_CONSTRUCTOR_DATA:
      return { ...state, currCart: [] };

    default:
      return state
  }
}
export default constructorList;