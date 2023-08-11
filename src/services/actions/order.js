const ORDER_REQUEST = "ORDER_REQUEST"
const ORDER_SUCCESS = "ORDER_SUCCESS"
const ORDER_FAILURE = "ORDER_FAILURE"

const orderRequest = () => ({ type: ORDER_REQUEST })
const orderSuccess = (payload) => ({ type: ORDER_SUCCESS, order: payload.order })
const orderFailure = (payload) => ({ type: ORDER_FAILURE, message: payload.message })

export {ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE, orderRequest, orderSuccess, orderFailure}