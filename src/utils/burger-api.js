import { BURGER_API_URL, checkReponse } from "./const"
import { ingredientRequest, ingredientSuccess, ingredientFailure } from "../services/actions/ingredients";
import { orderRequest, orderSuccess, orderFailure } from "../services/actions/order";
import { openModal } from "../services/actions/modal";

function getInfo() {
    return function (dispatch) {
        fetch(`${BURGER_API_URL}/ingredients`)
            .then(checkReponse)
            .then(json => {
                dispatch(ingredientRequest())
                dispatch(ingredientSuccess({ ingredients: json.data }))
            })
            .catch(error => {
                console.error(error);
                dispatch(ingredientFailure({ message: error }))
            });
    }
}

function orderBurger(ingredients) {
    return function (dispatch) {
        fetch(`${BURGER_API_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "ingredients": ingredients })
        })
            .then(checkReponse)
            .then(json => {
                dispatch(orderRequest())
                dispatch(orderSuccess({ order: json.order.number }))
                dispatch(openModal({ title: 'order' }))
            })
            .catch(error => {
                console.error(error);
                dispatch(orderFailure({ message: error }))
            });
    }
}

export { getInfo, orderBurger }
