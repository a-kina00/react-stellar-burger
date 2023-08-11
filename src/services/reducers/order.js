import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE } from "../actions/order";

const initialState = {
  orderRequest: false,
  orderSuccess: null,
  orderFailure: null
};

const orderList = (state = initialState, action) => {
  switch (action.type) {

    case ORDER_REQUEST:
      return { ...state, orderRequest: true };

    case ORDER_SUCCESS:
      return { ...state, orderSuccess: action.order };

    case ORDER_FAILURE:
      return { ...state, orderFailure: action.message };

    default:
      return state
  }
}

export default orderList;